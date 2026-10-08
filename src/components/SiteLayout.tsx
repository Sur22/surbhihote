import { Link } from "@tanstack/react-router";
import { Sun, Moon, Linkedin, Mail, Menu, Sparkle } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Case Studies", hash: "case-studies" as const },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/ai", label: "AI" },
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
          <Link to="/" className="flex items-baseline gap-2" aria-label="Surbhi Hote — home">
            <svg
              viewBox="0 0 10.38 12.7"
              className="h-5 w-auto opacity-45"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.44,2.13c-.36-.72-.94-1.18-1.43-1.48.63.27,1.25.54,1.88.81-.02,2.19-.04,2.73-.06,2.73-.03,0,.12-1.05-.38-2.05Z" />
              <path d="M.97,10.63c.38.71.98,1.15,1.48,1.43-.63-.25-1.27-.49-1.9-.74-.05-2.19-.05-2.73-.03-2.73.03,0-.08,1.06.45,2.04Z" />
              <path d="M9.82,7.74c-2.6-.81-5.2-1.61-7.8-2.42-.26-.1-.7-.32-.99-.79-.52-.83-.23-1.94.25-2.55.2-.26.52-.49,1.15-.94.33-.24.62-.42.82-.54,0,0,0,0,0,0,0,0-.77.39-1.34.69-.35.18-.82.43-1.39.75,0,1.06,0,2.12,0,3.18l6.75,2.06c.48.17,1.34.55,1.81,1.19.06.08.13.19.18.31.08.27.25.95-.03,1.65-.03.06-.14.35-.39.65-.08.1-.23.27-.7.61-.54.39-.95.61-.94.62,0,.01.35-.16.73-.38.2-.11.43-.25,1.01-.62.22-.14.52-.34.87-.57,0-.96,0-1.92,0-2.88Z" />
            </svg>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <Link to="/" hash="case-studies" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/gallery" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/ai" activeProps={{ className: "text-foreground" }} className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              AI <Sparkle size={10.5} className="text-accent" fill="currentColor" strokeWidth={0} aria-hidden="true" />
            </Link>
            <a href="mailto:surbhihote@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile hamburger menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors md:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-6 text-lg">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        hash={"hash" in item ? item.hash : undefined}
                        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                        {item.label === "AI" && (
                          <Sparkle size={12} className="text-accent" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                        )}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="flex items-center gap-5 pt-6 border-t border-border">
                  <a href="mailto:surbhihote@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                    <Mail size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-10 flex flex-col items-center gap-5">
          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" hash="case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/ai" className="text-muted-foreground hover:text-foreground transition-colors">AI</Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a href="mailto:surbhihote@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Vibe line — hidden at user request */}
          <p className="hidden p text-accent flex items-center gap-1.5">
            Made with <span className="text-red-500">❤️</span> <span className="text-amber-600">🍜</span> <span className="text-emerald-600">🍵</span> and vibe coding
          </p>

          <p className="text-sm text-muted-foreground whitespace-pre">
            © 2026 SH.   All rights reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
