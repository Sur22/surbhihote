import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useZoomPan } from "@/hooks/useZoomPan";

type Props = {
  images: string[];
  title?: string;
  scale?: number;
  hideSlider?: boolean;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 10;

/** Renders a list of images (e.g. WebP page exports) with wheel zoom + pan. */
export function ImageViewer({ images, title, scale: initialScale = 1, hideSlider = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoomState] = useState(initialScale);
  const [displayZoom, setDisplayZoom] = useState(initialScale);
  // Scroll adjustment queued for after the layout re-flows at the new zoom,
  // so the viewport keeps looking at the same point in the document.
  const pendingScrollRef = useRef<{ k: number; cx: number; cy: number } | null>(null);
  const handleZoomCommit = useCallback((next: number) => {
    setZoomState((prev) => {
      const el = containerRef.current;
      if (el && prev > 0 && next !== prev) {
        pendingScrollRef.current = {
          k: next / prev,
          cx: el.clientWidth / 2,
          cy: el.clientHeight / 2,
        };
      }
      return next;
    });
    setDisplayZoom(next);
  }, []);

  useLayoutEffect(() => {
    const pending = pendingScrollRef.current;
    const el = containerRef.current;
    if (!pending || !el) return;
    pendingScrollRef.current = null;
    el.scrollLeft = (el.scrollLeft + pending.cx) * pending.k - pending.cx;
    el.scrollTop = (el.scrollTop + pending.cy) * pending.k - pending.cy;
  }, [zoom]);

  const { pan, setZoom } = useZoomPan({
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    containerRef,
    onZoomCommit: handleZoomCommit,
    commitDelay: 120,
  });

  // Only reset when the document itself changes, not on every re-render.
  const lastDocRef = useRef<string | null>(null);
  useEffect(() => {
    const docKey = `${initialScale}|${images.join("|")}`;
    if (lastDocRef.current === docKey) return;
    lastDocRef.current = docKey;
    pendingScrollRef.current = null;
    setZoomState(initialScale);
    setDisplayZoom(initialScale);
    setZoom(initialScale);
  }, [initialScale, images, setZoom]);


  const handleSliderChange = (value: number[]) => {
    const next = value[0];
    setDisplayZoom(next);
    setZoom(next);
  };

  return (
    <div className="relative w-full rounded-xl border border-border bg-muted/30">
      <div
        ref={containerRef}
        className="h-[800px] overflow-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted dark:[&::-webkit-scrollbar-track]:bg-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/35 dark:[&::-webkit-scrollbar-thumb]:bg-foreground/60 [&::-webkit-scrollbar-thumb]:hover:bg-foreground/50 dark:[&::-webkit-scrollbar-thumb]:hover:bg-foreground/80 touch-none select-none"
      >
        <div
          className="flex h-max min-h-full w-max min-w-full flex-col items-center justify-center origin-top-left"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${displayZoom / zoom})`,
          }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title ?? "Document"} — page ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              style={{ width: `${595 * zoom}px` }}
              className="block h-auto max-w-none shrink-0 border-b border-border last:border-b-0"
            />
          ))}
        </div>
      </div>

      {!hideSlider && (
        <div className="absolute bottom-6 left-4 z-10 flex items-center gap-3 rounded-full border border-border bg-background/90 backdrop-blur px-3 py-2 shadow-sm">
          <span className="text-xs text-muted-foreground w-10 tabular-nums">
            {Math.round(displayZoom * 100)}%
          </span>
          <Slider
            value={[displayZoom]}
            min={MIN_ZOOM}
            max={MAX_ZOOM}
            step={0.1}
            onValueChange={(value) => setDisplayZoom(value[0])}
            onValueCommit={(value) => handleSliderChange(value)}
            className="w-28 md:w-40"
          />
        </div>
      )}
    </div>
  );
}
