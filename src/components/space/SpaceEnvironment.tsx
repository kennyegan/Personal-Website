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
      size: 0.8 + rand() * 1.2, // 0.8px – 2px
      opacity: 0.35 + rand() * 0.35, // 0.35 – 0.70
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
      size: 1.2 + rand() * 1.3, // 1.2px – 2.5px
      opacity: 0.6 + rand() * 0.35, // 0.6 – 0.95
      delay: rand() * 10, // 0 – 10s random delay
      duration: 6 + rand() * 4, // 6 – 10s
    });
  }
  return stars;
}

const DISTANT_STARS = generateDistantStars(150, 12345);
const TWINKLING_STARS = generateTwinklingStars(20, 54321);

function drawStarsOnCanvas(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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

  for (const star of DISTANT_STARS) {
    ctx.beginPath();
    ctx.arc((star.x / 100) * w, (star.y / 100) * h, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  }
}

export default function SpaceEnvironment() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const environmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  // Draw distant stars on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    drawStarsOnCanvas(canvas);

    const handleResize = () => {
      if (canvasRef.current) drawStarsOnCanvas(canvasRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    if (prefersReducedMotion || !mediaQuery.matches) return;

    const environment = environmentRef.current;
    if (!environment) return;

    let positionFrame = 0;
    let nextX = window.innerWidth * 0.42;
    let nextY = window.innerHeight * 0.28;

    environment.style.setProperty('--cursor-x', `${nextX}px`);
    environment.style.setProperty('--cursor-y', `${nextY}px`);
    environment.style.setProperty('--cursor-opacity', '0');

    const hideCursorGlow = () => {
      environment.style.setProperty('--cursor-opacity', '0');
    };

    const flushPointerPosition = () => {
      positionFrame = 0;
      environment.style.setProperty('--cursor-x', `${nextX}px`);
      environment.style.setProperty('--cursor-y', `${nextY}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      environment.style.setProperty('--cursor-opacity', '1');

      if (!positionFrame) {
        positionFrame = window.requestAnimationFrame(flushPointerPosition);
      }
    };

    const handlePointerEnter = () => {
      environment.style.setProperty('--cursor-opacity', '1');
    };

    const handlePointerLeave = () => hideCursorGlow();

    window.addEventListener('pointerenter', handlePointerEnter);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    return () => {
      if (positionFrame) window.cancelAnimationFrame(positionFrame);
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div ref={environmentRef} className="space-environment absolute inset-0">
        {/* Layer 1: Deep space base + subtle gradient overlays */}
        <div className="space-environment__base" />
        <div className="space-environment__gradient" />

        {/* Cursor-following glow */}
        <div className="space-environment__cursor" />

        {/* Nebula blobs */}
        <div className="space-environment__nebula space-environment__nebula--violet" />
        <div className="space-environment__nebula space-environment__nebula--cyan" />

        {/* Layer 2: Distant static stars */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Layer 3: Brighter twinkling stars */}
        <div className="absolute inset-0">
          {TWINKLING_STARS.map((star, i) => (
            <span
              key={i}
              className={prefersReducedMotion ? '' : 'star-twinkle'}
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

        {/* Vignette */}
        <div className="space-environment__vignette" />

      </div>
    </div>
  );
}
