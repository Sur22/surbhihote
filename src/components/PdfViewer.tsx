import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title?: string;
};

export function PdfViewer({ url, title }: Props) {
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
        const pdfjs: any = await import("pdfjs-dist");
        const workerSrc = (
          await import("pdfjs-dist/build/pdf.worker.min.mjs?url")
        ).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

        const doc = await pdfjs.getDocument({ url }).promise;
        if (cancelled) return;

        const width = container.clientWidth || 900;
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          const scale = (width / base.width) * Math.min(window.devicePixelRatio || 1, 2);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          canvas.style.display = "block";
          canvas.className = "border-b border-border last:border-b-0";
          container.appendChild(canvas);

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport, canvas }).promise;
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
    <div className="w-full rounded-xl border border-border overflow-hidden bg-muted/30">
      {status === "loading" && (
        <p className="p-6 text-sm text-muted-foreground">Loading {title ?? "PDF"}…</p>
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
      <div ref={containerRef} className="max-h-[800px] overflow-y-auto" />
    </div>
  );
}
