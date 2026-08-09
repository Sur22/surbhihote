import { useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { FileText, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PdfViewer } from "@/components/PdfViewer";
import { ImageViewer } from "@/components/ImageViewer";

export type DocAttachmentItem = {
  label: string;
  url: string;
  /** When present, renders WebP/PNG page exports instead of the PDF. */
  images?: string[];
  note?: string;
};

/** Thumbnail card list; clicking a card opens the PDF/image viewer in a popup. */
export function DocAttachments({ items }: { items: DocAttachmentItem[] }) {
  const [active, setActive] = useState<DocAttachmentItem | null>(null);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <button
            key={item.url}
            type="button"
            onClick={() => setActive(item)}
            className="group flex items-center gap-4 rounded-lg border border-border bg-muted/20 p-4 text-left transition-colors hover:bg-muted/40"
          >
            <span className="flex h-14 w-11 shrink-0 items-center justify-center rounded border border-border bg-background">
              <FileText size={22} className="text-muted-foreground" />
            </span>
            <span className="min-w-0">
              <span className="block text-base text-foreground group-hover:text-accent transition-colors">
                {item.label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {item.note ?? (item.images ? "Open viewer" : "Open PDF")}
              </span>
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-[1100px] p-4 md:p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-normal">
              {active?.label}
            </DialogTitle>
          </DialogHeader>
          {active && (
            <ClientOnly
              fallback={
                <div className="h-[70vh] w-full rounded-xl border border-border bg-muted/30" />
              }
            >
              {active.images && active.images.length > 0 ? (
                <ImageViewer key={active.url} images={active.images} title={active.label} />
              ) : (
                <PdfViewer key={active.url} url={active.url} title={active.label} />
              )}
            </ClientOnly>
          )}
          {active && (
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={14} />
              Open in new tab
            </a>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
