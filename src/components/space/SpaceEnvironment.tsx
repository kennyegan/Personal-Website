'use client';

import { useEffect, useRef, useState } from 'react';

// Seeded random for deterministic star placement (no layout shift between renders)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface TwinklingStar extends Star {
  delay: number;
  duration: number;
}

function generateDistantStars(count: number, seed: number): Star[] {
  const rand = seededRandom(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      size: 0.5 + rand() * 1, // 0.5px – 1.5px
      opacity: 0.15 + rand() * 0.15, // 0.15 – 0.30
    });
  }
  return stars;
}

function generateTwinklingStars(count: number, seed: number): TwinklingStar[] {
  const rand = seededRandom(seed);
  const stars: TwinklingStar[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      size: 1 + rand() * 1, // 1px – 2px
      opacity: 0.4 + rand() * 0.25, // 0.4 – 0.65
      delay: rand() * 10, // 0 – 10s random delay
      duration: 6 + rand() * 4, // 6 – 10s
    });
  }
  return stars;
}

export default function SpaceEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [twinklingStars] = useState(() => generateTwinklingStars(65, 54321));

  // Draw distant stars on canvas for performance (200-300 tiny dots)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const distantStars = generateDistantStars(280, 12345);
    for (const star of distantStars) {
      ctx.beginPath();
      ctx.arc((star.x / 100) * w, (star.y / 100) * h, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }

    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      const ndpr = window.devicePixelRatio || 1;
      canvas.width = nw * ndpr;
      canvas.height = nh * ndpr;
      canvas.style.width = `${nw}px`;
      canvas.style.height = `${nh}px`;

      const nctx = canvas.getContext('2d');
      if (!nctx) return;
      nctx.scale(ndpr, ndpr);
      nctx.clearRect(0, 0, nw, nh);

      const stars = generateDistantStars(280, 12345);
      for (const star of stars) {
        nctx.beginPath();
        nctx.arc((star.x / 100) * nw, (star.y / 100) * nh, star.size, 0, Math.PI * 2);
        nctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        nctx.fill();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      {/* Layer 1: Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #02060D 0%, #040B16 100%)',
        }}
      />

      {/* Layer 2: Distant static stars (canvas) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Layer 3: Foreground twinkling stars (DOM for CSS animation) */}
      <div className="absolute inset-0">
        {twinklingStars.map((star, i) => (
          <span
            key={i}
            className="star-twinkle"
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              backgroundColor: `rgba(255, 255, 255, ${star.opacity})`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(2, 6, 13, 0.4) 100%)',
        }}
      />
    </div>
  );
}
