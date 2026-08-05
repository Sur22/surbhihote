import { useCallback, useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useZoomPan } from "@/hooks/useZoomPan";

type Props = {
  url: string;
  title?: string;
  scale?: number; // initial zoom scale; defaults to A4 natural size (1)
  hideSlider?: boolean;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 10;

export function PdfViewer({ url, title, scale: initialScale = 1, hideSlider = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [renderZoom, setRenderZoom] = useState(initialScale);
  const [displayZoom, setDisplayZoom] = useState(initialScale);
  const handleZoomCommit = useCallback((next: number) => {
    setRenderZoom(next);
    setDisplayZoom(next);
  }, []);
  const { committedZoom, pan, setZoom } = useZoomPan({
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    containerRef,
    onZoomCommit: handleZoomCommit,
    commitDelay: 200,
  });

  useEffect(() => {
    setRenderZoom(initialScale);
    setDisplayZoom(initialScale);
    setZoom(initialScale);
  }, [url, initialScale, setZoom]);

  const handleSliderChange = (value: number[]) => {
    const next = value[0];
    setDisplayZoom(next);
    setZoom(next);
  };

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";
    setStatus("loading");

    (async () => {
      try {
        const pdfjs: any = await import("pdfjs-dist/legacy/build/pdf.mjs");
        const workerSrc = (
          await import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url")
        ).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

        const doc = await pdfjs.getDocument({ url }).promise;
        if (cancelled) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });

          const renderScale = renderZoom * dpr;
          const cssWidth = base.width * renderZoom;
          const viewport = page.getViewport({ scale: renderScale });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = `${cssWidth}px`;
          canvas.style.height = "auto";
          canvas.style.display = "block";
          canvas.style.flexShrink = "0";
          canvas.className = "border-b border-border last:border-b-0";
          container.appendChild(canvas);

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport }).promise;
        }
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url, renderZoom]);

  return (
    <div className="relative w-full rounded-xl border border-border bg-muted/30">
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center h-[800px]">
          <img
            src="/loading.gif"
            alt="Loading"
            width={48}
            height={48}
            className="opacity-80"
          />
          <p className="text-sm text-muted-foreground">
            Please wait — the file is loading. This may take a few moments.
          </p>
        </div>
      )}
      {status === "error" && (
        <p className="p-6 text-sm text-muted-foreground h-[800px]">
          Unable to display this PDF here.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
            Open it in a new tab
          </a>
          .
        </p>
      )}
      <div
        ref={containerRef}
        className="h-[800px] overflow-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted dark:[&::-webkit-scrollbar-track]:bg-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/35 dark:[&::-webkit-scrollbar-thumb]:bg-foreground/60 [&::-webkit-scrollbar-thumb]:hover:bg-foreground/50 dark:[&::-webkit-scrollbar-thumb]:hover:bg-foreground/80 touch-none"
      >
        <div
          className="flex flex-col items-center min-w-full origin-top-left"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${displayZoom / renderZoom})`,
          }}
        />
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
