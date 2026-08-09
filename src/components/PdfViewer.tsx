import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title?: string;
  className?: string;
};

const LOCKED_ZOOM = 0.97;

export function PdfViewer({ url, title: _title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const lastUrlRef = useRef(url);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;
    const isUrlChange = lastUrlRef.current !== url;
    lastUrlRef.current = url;
    container.innerHTML = "";
    if (isUrlChange) setStatus("loading");

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

          const renderScale = LOCKED_ZOOM * dpr;
          const cssWidth = base.width * LOCKED_ZOOM;
          const viewport = page.getViewport({ scale: renderScale });

          const wrapper = document.createElement("div");
          wrapper.className = "flex justify-center border-b border-border last:border-b-0";
          wrapper.style.minWidth = "100%";

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = `${cssWidth}px`;
          canvas.style.height = "auto";
          canvas.style.display = "block";
          canvas.style.flexShrink = "0";

          wrapper.appendChild(canvas);
          container.appendChild(wrapper);

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
  }, [url]);

  return (
    <div className="relative w-full rounded-xl border border-border bg-muted/30">
      {status === "loading" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-xl bg-background/85 backdrop-blur-sm p-10 text-center">
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
        <p className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-background/85 p-6 text-sm text-muted-foreground">
          Unable to display this PDF here.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
            Open it in a new tab
          </a>
          .
        </p>
      )}
      <div
        ref={containerRef}
        className="h-[60vh] overflow-x-auto overflow-y-scroll [scrollbar-gutter:stable] [scrollbar-width:auto] [scrollbar-color:var(--foreground)_var(--muted)] [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-muted [&::-webkit-scrollbar-thumb]:bg-foreground/70 [&::-webkit-scrollbar-thumb]:hover:bg-foreground select-none"
      />
    </div>
  );
}
