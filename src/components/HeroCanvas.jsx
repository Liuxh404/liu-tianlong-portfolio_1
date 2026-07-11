import { useEffect, useRef } from "react";

/**
 * HeroCanvas
 * -----------
 * A restrained, slow-drifting node network rendered on <canvas>,
 * standing in for a literal video background. It reads as
 * "instrument panel" rather than "particle.js demo": few nodes,
 * thin bronze-tinted lines, a soft vignette, gentle parallax on
 * mouse move. Designed to be swapped for a real video later —
 * see the comment block at the bottom of this file.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let width, height, dpr;
    let pointer = { x: 0.5, y: 0.5 };

    const NODE_COUNT = 46;
    const MAX_LINK_DIST = 190;
    let nodes = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const driftX = (pointer.x - 0.5) * 22;
      const driftY = (pointer.y - 0.5) * 22;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DIST) {
            const alpha = (1 - dist / MAX_LINK_DIST) * 0.22;
            ctx.strokeStyle = `rgba(201,168,118,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + driftX, a.y + driftY);
            ctx.lineTo(b.x + driftX, b.y + driftY);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x + driftX, n.y + driftY, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(237,234,226,0.55)";
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
    }

    resize();
    seed();
    step();

    window.addEventListener("resize", () => {
      resize();
      seed();
    });
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}

/**
 * Swapping in a real video background later:
 *
 * <video
 *   className="absolute inset-0 h-full w-full object-cover opacity-40"
 *   src="/hero-reel.mp4"
 *   autoPlay muted loop playsInline
 * />
 *
 * Drop the file in /public, render the <video> in place of <HeroCanvas />
 * (or layer both — canvas on top at low opacity reads well over footage too),
 * and keep the dark gradient overlay in Hero.jsx so headline contrast holds.
 */
