import { Link } from "@tanstack/react-router";
import { Sun, Moon, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Case Studies" },
  { to: "/work/fjord", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl leading-none">Mira Vale</span>
            <span className="eyebrow hidden sm:inline">— Studio</span>
          </Link>
          <nav className="flex items-center gap-7 text-sm">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Index</Link>
            <Link to="/gallery" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <a href="mailto:hello@miravale.studio" className="hidden sm:inline-flex items-center gap-1.5 text-foreground border-b border-foreground/40 hover:border-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border mt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-md">
              Have a product worth designing well?
            </p>
            <a href="mailto:hello@miravale.studio" className="mt-6 inline-block text-base border-b border-foreground/40 hover:border-foreground">
              hello@miravale.studio
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Studio</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Independent product design practice. Based in Lisbon, working worldwide.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-accent" href="#">Read.cv</a></li>
              <li><a className="hover:text-accent" href="#">Are.na</a></li>
              <li><a className="hover:text-accent" href="#">Dribbble</a></li>
              <li><a className="hover:text-accent" href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()}</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
