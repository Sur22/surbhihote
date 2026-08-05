import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title?: string;
  scale?: number; // fixed zoom scale; omit to fit page width to container
};

export function PdfViewer({ url, title, scale: fixedScale }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

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

        const containerWidth = container.clientWidth || 900;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });

          let scale: number;
          let cssWidth: number;
          if (fixedScale) {
            scale = fixedScale;
            cssWidth = (base.width * scale) / dpr;
          } else {
            scale = (containerWidth / base.width) * dpr;
            cssWidth = containerWidth;
          }
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = `${cssWidth}px`;
          canvas.style.height = "auto";
          canvas.style.display = "block";
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
  }, [url, fixedScale]);

  return (
    <div className="w-full rounded-xl border border-border overflow-hidden bg-muted/30">
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
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
        <p className="p-6 text-sm text-muted-foreground">
          Unable to display this PDF here.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
            Open it in a new tab
          </a>
          .
        </p>
      )}
      <div
        ref={containerRef}
        className={`h-[800px] overflow-auto ${fixedScale ? "flex flex-col items-center" : ""}`}
        style={fixedScale ? { maxWidth: "595px", margin: "0 auto" } : undefined}
      />
    </div>
  );
}
