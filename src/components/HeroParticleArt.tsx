import { useEffect, useRef } from "react";

type Particle = {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  c: string;
};

/** Renders the hero artwork as a cloud of dots sampled from the image.
 *  The cursor pushes the dots away and a spring pulls each one back home,
 *  so the picture scatters around the mouse and quietly re-forms — the
 *  effect from the reference recording. Dots start scattered so the
 *  artwork assembles itself on load. Pointer interaction happens on fine
 *  pointers only; callers gate the whole component on reduced motion. */
export function HeroParticleArt({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fine = window.matchMedia("(pointer: fine)").matches;
    let particles: Particle[] = [];
    let raf = 0;
    let boxW = 0;
    let boxH = 0;
    const mouse = { x: -9999, y: -9999 };

    const img = new Image();
    img.src = src;

    const build = () => {
      if (!img.complete || !img.naturalWidth) return;
      /* offsetWidth/Height give the layout box, unaffected by the
         wrapper's scale transform that getBoundingClientRect includes. */
      boxW = parent.offsetWidth;
      boxH = parent.offsetHeight;
      if (boxW < 2 || boxH < 2) return;
      canvas.width = Math.round(boxW * dpr);
      canvas.height = Math.round(boxH * dpr);
      canvas.style.width = `${boxW}px`;
      canvas.style.height = `${boxH}px`;

      /* Replicate the old background: contain fit, pinned right-bottom. */
      const scale = Math.min(boxW / img.naturalWidth, boxH / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const offX = boxW - drawW;
      const offY = boxH - drawH;

      const off = document.createElement("canvas");
      off.width = Math.max(1, Math.round(boxW));
      off.height = Math.max(1, Math.round(boxH));
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.drawImage(img, offX, offY, drawW, drawH);
      const data = octx.getImageData(0, 0, off.width, off.height).data;

      const STRIDE = 6;
      const next: Particle[] = [];
      for (let y = 0; y < off.height; y += STRIDE) {
        for (let x = 0; x < off.width; x += STRIDE) {
          const i = (y * off.width + x) * 4;
          if (data[i + 3] > 128) {
            next.push({
              hx: x,
              hy: y,
              x: x + (Math.random() - 0.5) * 500,
              y: y + (Math.random() - 0.5) * 500,
              vx: 0,
              vy: 0,
              c: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
            });
          }
        }
      }
      particles = next;
    };

    const REPEL_R = 100;
    const tick = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, boxW, boxH);
      /* Map the cursor from screen px into the wrapper's layout px; the
         wrapper is scaled, so the visible rect is smaller than the box. */
      const rect = canvas.getBoundingClientRect();
      const sx = rect.width > 0 ? boxW / rect.width : 1;
      const sy = rect.height > 0 ? boxH / rect.height : 1;
      const mx = (mouse.x - rect.left) * sx;
      const my = (mouse.y - rect.top) * sy;

      for (const p of particles) {
        p.vx += (p.hx - p.x) * 0.02;
        p.vy += (p.hy - p.y) * 0.02;
        if (fine) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < REPEL_R * REPEL_R && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = ((REPEL_R - d) / REPEL_R) * 2.4;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;
        ctx.fillStyle = p.c;
        ctx.fillRect(p.x, p.y, 2.4, 2.4);
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const ro = new ResizeObserver(() => build());
    ro.observe(parent);
    if (img.complete) build();
    else img.onload = build;

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [src]);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />;
}
