import { useCallback, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

export function useZoomPan({
  minZoom,
  maxZoom,
  containerRef,
  onZoomCommit,
  commitDelay = 150,
  panEnabled = true,
}: {
  minZoom: number;
  maxZoom: number;
  containerRef: React.RefObject<HTMLElement | null>;
  onZoomCommit?: (zoom: number) => void;
  commitDelay?: number;
  panEnabled?: boolean;
}) {
  const [committedZoom, setCommittedZoom] = useState(1);
  const [smoothZoom, setSmoothZoom] = useState(1);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const committedRef = useRef(committedZoom);
  const smoothRef = useRef(smoothZoom);
  const panRef = useRef(pan);
  const timerRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const lastPointerRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => { committedRef.current = committedZoom; }, [committedZoom]);
  useEffect(() => { smoothRef.current = smoothZoom; }, [smoothZoom]);
  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { if (!panEnabled) setPan({ x: 0, y: 0 }); }, [panEnabled]);

  const clamp = useCallback((v: number) => Math.min(Math.max(v, minZoom), maxZoom), [minZoom, maxZoom]);

  const commit = useCallback((zoom: number) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCommittedZoom(zoom);
      setSmoothZoom(1);
      onZoomCommit?.(zoom);
    }, commitDelay);
  }, [onZoomCommit, commitDelay]);

  const setZoom = useCallback((nextCommitted: number, anchor?: Point) => {
    const next = clamp(nextCommitted);
    if (panEnabled && anchor) {
      const k = next / committedRef.current;
      setPan(prev => ({
        x: anchor.x - (anchor.x - prev.x) * k,
        y: anchor.y - (anchor.y - prev.y) * k,
      }));
    }
    setCommittedZoom(next);
    setSmoothZoom(1);
    onZoomCommit?.(next);
  }, [clamp, onZoomCommit, panEnabled]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const total = committedRef.current * smoothRef.current;
      const nextTotal = clamp(total * Math.exp(-dy * 0.0015));
      if (panEnabled) {
        const k = nextTotal / total;
        const rect = el.getBoundingClientRect();
        const anchor = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setPan(prev => ({
          x: anchor.x - (anchor.x - prev.x) * k,
          y: anchor.y - (anchor.y - prev.y) * k,
        }));
      }
      setSmoothZoom(nextTotal / committedRef.current);
      commit(nextTotal);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();
      isDraggingRef.current = true;
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      el.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const dx = e.clientX - lastPointerRef.current.x;
      const dy = e.clientY - lastPointerRef.current.y;
      lastPointerRef.current = { x: e.clientX, y: e.clientY };

      // Prefer native scrolling when the content overflows the container.
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const maxScrollTop = el.scrollHeight - el.clientHeight;
      let restX = dx;
      let restY = dy;

      if (maxScrollLeft > 0) {
        const before = el.scrollLeft;
        el.scrollLeft = Math.min(Math.max(before - dx, 0), maxScrollLeft);
        restX = dx + (el.scrollLeft - before);
      }
      if (maxScrollTop > 0) {
        const before = el.scrollTop;
        el.scrollTop = Math.min(Math.max(before - dy, 0), maxScrollTop);
        restY = dy + (el.scrollTop - before);
      }

      if (restX !== 0 || restY !== 0) {
        setPan(prev => ({ x: prev.x + restX, y: prev.y + restY }));
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      try { el.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
      el.style.cursor = "";
    };

    const handleDragStart = (e: Event) => e.preventDefault();

    el.style.cursor = panEnabled ? "grab" : "";
    el.addEventListener("dragstart", handleDragStart);
    el.addEventListener("wheel", handleWheel, { passive: false });
    if (panEnabled) {
      el.addEventListener("pointerdown", handlePointerDown);
      el.addEventListener("pointermove", handlePointerMove);
      el.addEventListener("pointerup", handlePointerUp);
      el.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      el.removeEventListener("dragstart", handleDragStart);
      el.removeEventListener("wheel", handleWheel);
      if (panEnabled) {
        el.removeEventListener("pointerdown", handlePointerDown);
        el.removeEventListener("pointermove", handlePointerMove);
        el.removeEventListener("pointerup", handlePointerUp);
        el.removeEventListener("pointercancel", handlePointerUp);
      }
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [clamp, commit, containerRef, panEnabled]);

  const displayZoom = committedZoom * smoothZoom;

  return {
    committedZoom,
    displayZoom,
    pan,
    setZoom,
  };
}
