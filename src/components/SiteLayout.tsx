import { Link } from "@tanstack/react-router";
import { Sun, Moon, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Case Studies" },
  { to: "/work/fjord", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {mounted && resolved === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl leading-none">Surbhi Hote</span>
          </Link>
          <nav className="flex items-center gap-7 text-sm">
            <Link to="/" hash="case-studies" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/gallery" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <a href="mailto:surbhihote@gmail.com" className="hidden sm:inline-flex items-center gap-1.5 text-foreground border-b border-foreground/40 hover:border-foreground transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border mt-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-5">
            <a href="mailto:surbhihote@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Surbhi Hote. All rights reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
