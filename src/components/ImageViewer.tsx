import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";

type Props = {
  images: string[];
  title?: string;
  scale?: number;
  hideSlider?: boolean;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 8;

/** Renders a list of images (e.g. WebP page exports) in the same frame as PdfViewer. */
export function ImageViewer({ images, title, scale: initialScale = 1, hideSlider = false }: Props) {
  const [zoom, setZoom] = useState(initialScale);
  const [displayZoom, setDisplayZoom] = useState(initialScale);

  useEffect(() => {
    setZoom(initialScale);
    setDisplayZoom(initialScale);
  }, [initialScale, images]);

  return (
    <div className="relative w-full rounded-xl border border-border bg-muted/30">
      <div className="h-[800px] overflow-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted dark:[&::-webkit-scrollbar-track]:bg-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/35 dark:[&::-webkit-scrollbar-thumb]:bg-foreground/60 [&::-webkit-scrollbar-thumb]:hover:bg-foreground/50 dark:[&::-webkit-scrollbar-thumb]:hover:bg-foreground/80">
        <div className="flex flex-col items-center min-w-full">
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
            onValueCommit={(value) => setZoom(value[0])}
            className="w-28 md:w-40"
          />
        </div>
      )}
    </div>
  );
}
