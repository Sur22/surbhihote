import { useCallback, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

export function useZoomPan({
  minZoom,
  maxZoom,
  containerRef,
  onZoomCommit,
  commitDelay = 150,
}: {
  minZoom: number;
  maxZoom: number;
  containerRef: React.RefObject<HTMLElement | null>;
  onZoomCommit?: (zoom: number) => void;
  commitDelay?: number;
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
    if (anchor) {
      const k = next / committedRef.current;
      setPan(prev => ({
        x: anchor.x - (anchor.x - prev.x) * k,
        y: anchor.y - (anchor.y - prev.y) * k,
      }));
    }
    setCommittedZoom(next);
    setSmoothZoom(1);
    onZoomCommit?.(next);
  }, [clamp, onZoomCommit]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const total = committedRef.current * smoothRef.current;
      const nextTotal = clamp(total * Math.exp(-dy * 0.0015));
      const k = nextTotal / total;
      const rect = el.getBoundingClientRect();
      const anchor = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      setPan(prev => ({
        x: anchor.x - (anchor.x - prev.x) * k,
        y: anchor.y - (anchor.y - prev.y) * k,
      }));
      setSmoothZoom(nextTotal / committedRef.current);
      commit(nextTotal);
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastPointerRef.current.x;
      const dy = e.clientY - lastPointerRef.current.y;
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDraggingRef.current = false;
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = "";
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointerleave", handlePointerUp);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
      el.removeEventListener("pointerleave", handlePointerUp);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [clamp, commit, containerRef]);

  const displayZoom = committedZoom * smoothZoom;

  return {
    committedZoom,
    displayZoom,
    pan,
    setZoom,
  };
}
