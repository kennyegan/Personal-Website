'use client';

/**
 * Solar system scene — Sun, Earth+Moon, Mars.
 * Positioned on the left side of the viewport behind the left panel.
 */
export default function StarshipScene() {
  return (
    <div className="starship-scene" aria-hidden="true">
      <svg
        viewBox="0 0 1200 600"
        className="starship-scene__svg"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Sun glow */}
          <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF5E0" stopOpacity="1" />
            <stop offset="35%" stopColor="#FFDD70" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#FFB830" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
          </radialGradient>

          {/* Sun corona */}
          <radialGradient id="sun-corona" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="60%" stopColor="transparent" />
            <stop offset="80%" stopColor="rgba(255, 200, 50, 0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Earth gradient */}
          <radialGradient id="earth-surface" cx="38%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#6DB3F2" stopOpacity="1" />
            <stop offset="40%" stopColor="#2E8BC0" stopOpacity="1" />
            <stop offset="70%" stopColor="#1A6E3E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1B3A5C" stopOpacity="1" />
          </radialGradient>

          {/* Earth atmosphere */}
          <radialGradient id="earth-atmo" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="95%" stopColor="rgba(100, 180, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(100, 180, 255, 0.05)" />
          </radialGradient>

          {/* Moon gradient */}
          <radialGradient id="moon-surface" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#E8E4DF" stopOpacity="1" />
            <stop offset="50%" stopColor="#C4BEB8" stopOpacity="1" />
            <stop offset="100%" stopColor="#8A8580" stopOpacity="1" />
          </radialGradient>

          {/* Mars gradient */}
          <radialGradient id="mars-surface" cx="38%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#E8714A" stopOpacity="1" />
            <stop offset="45%" stopColor="#C1440E" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B2500" stopOpacity="1" />
          </radialGradient>

          {/* Mars atmosphere */}
          <radialGradient id="mars-atmo" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="95%" stopColor="rgba(200, 100, 50, 0.08)" />
            <stop offset="100%" stopColor="rgba(200, 100, 50, 0.03)" />
          </radialGradient>

          {/* Filter for sun glow bloom */}
          <filter id="sun-bloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>

        {/* === SUN (left side, partially off-screen for scale) === */}
        <g>
          <circle cx="80" cy="300" r="120" fill="url(#sun-corona)" />
          <circle cx="80" cy="300" r="65" fill="url(#sun-glow)" filter="url(#sun-bloom)" opacity="0.5" />
          <circle cx="80" cy="300" r="48" fill="url(#sun-glow)" />
          <circle cx="68" cy="286" r="16" fill="rgba(255, 255, 255, 0.15)" />
        </g>

        {/* === EARTH + MOON (left-center) === */}
        <g>
          {/* Earth orbit hint */}
          <ellipse
            cx="80" cy="300"
            rx="300" ry="280"
            stroke="rgba(100, 180, 255, 0.04)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            fill="none"
          />
          {/* Earth atmosphere glow */}
          <circle cx="370" cy="310" r="18" fill="url(#earth-atmo)" />
          {/* Earth body */}
          <circle cx="370" cy="310" r="14" fill="url(#earth-surface)" />
          {/* Earth landmass hints */}
          <path
            d="M363 305 Q366 302 370 304 Q373 306 371 310 Q368 312 365 309 Z"
            fill="rgba(34, 139, 34, 0.3)"
          />
          <path
            d="M374 308 Q377 306 378 310 Q377 314 374 312 Z"
            fill="rgba(34, 139, 34, 0.25)"
          />
          {/* Earth specular */}
          <circle cx="365" cy="304" r="4" fill="rgba(255, 255, 255, 0.12)" />

          {/* Moon */}
          <circle cx="398" cy="296" r="4.2" fill="url(#moon-surface)" />
          <circle cx="396" cy="295" r="0.8" fill="rgba(140, 135, 130, 0.4)" />
          <circle cx="399" cy="297" r="0.6" fill="rgba(140, 135, 130, 0.3)" />
        </g>

        {/* === MARS (right side) === */}
        <g>
          {/* Mars orbit hint */}
          <ellipse
            cx="80" cy="300"
            rx="860" ry="340"
            stroke="rgba(200, 100, 50, 0.03)"
            strokeWidth="0.5"
            strokeDasharray="4 12"
            fill="none"
          />
          {/* Mars atmosphere glow */}
          <circle cx="920" cy="280" r="22" fill="url(#mars-atmo)" />
          {/* Mars body */}
          <circle cx="920" cy="280" r="11" fill="url(#mars-surface)" />
          {/* Olympus Mons hint */}
          <circle cx="917" cy="276" r="2" fill="rgba(180, 80, 30, 0.4)" />
          {/* Valles Marineris hint */}
          <path
            d="M915 281 Q920 279 925 282"
            stroke="rgba(120, 50, 20, 0.3)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Mars polar cap */}
          <path
            d="M916 271 Q920 269 924 271"
            fill="rgba(230, 225, 220, 0.35)"
          />
          {/* Mars specular */}
          <circle cx="916" cy="275" r="3" fill="rgba(255, 200, 150, 0.08)" />
        </g>

      </svg>
    </div>
  );
}
