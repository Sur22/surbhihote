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
        <DialogContent className="fixed inset-0 z-50 flex h-screen max-h-screen w-screen max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-0 bg-background p-0 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <DialogHeader className="shrink-0 px-4 py-4 md:px-6 md:py-5">
            <DialogTitle className="font-serif text-xl md:text-2xl font-normal pr-10">
              {active?.label}
            </DialogTitle>
          </DialogHeader>
          {active && (
            <ClientOnly
              fallback={
                <div className="flex-1 w-full rounded-none bg-muted/30" />
              }
            >
              <div className="flex-1 min-h-0 px-4 pb-4 md:px-6 md:pb-6">
                {active.images && active.images.length > 0 ? (
                  <ImageViewer key={active.url} images={active.images} title={active.label} className="h-full" />
                ) : (
                  <PdfViewer key={active.url} url={active.url} title={active.label} className="h-full" />
                )}
              </div>
            </ClientOnly>
          )}
          {active && (
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 md:px-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
