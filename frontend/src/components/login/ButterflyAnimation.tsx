"use client";

import { cn } from "@/lib/utils";

interface ButterflyAnimationProps {
  className?: string;
}

export function ButterflyAnimation({ className }: ButterflyAnimationProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Butterfly SVG with CSS animation */}
      <div className="butterfly-container">
        <svg
          viewBox="0 0 100 80"
          className="butterfly h-16 w-16 md:h-24 md:w-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left wing */}
          <path
            className="wing wing-left"
            d="M50 40 Q30 20 10 30 Q5 45 20 55 Q35 60 50 45"
            fill="url(#wingGradient)"
            opacity="0.9"
          />
          {/* Right wing */}
          <path
            className="wing wing-right"
            d="M50 40 Q70 20 90 30 Q95 45 80 55 Q65 60 50 45"
            fill="url(#wingGradient)"
            opacity="0.9"
          />
          {/* Body */}
          <ellipse
            cx="50"
            cy="45"
            rx="4"
            ry="15"
            fill="#4A3728"
          />
          {/* Wing gradient definition */}
          <defs>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="50%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        /* Butterfly emergence animation (Phase 1: 3s) */
        @keyframes butterflyEmerge {
          0% {
            transform: translateY(100vh) scale(0.3);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) scale(0.6);
          }
          70% {
            transform: translateY(30vh) scale(0.8);
          }
          100% {
            transform: translateY(20vh) scale(1);
            opacity: 1;
          }
        }

        /* Floating animation (Phase 2: 8s loop) */
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(30px) rotate(10deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) translateX(-20px) rotate(-5deg);
            opacity: 0;
          }
        }

        /* Wing flapping */
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.6);
          }
        }

        .butterfly-container {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          animation:
            butterflyEmerge 3s ease-out forwards,
            floatUp 8s ease-in-out 3s infinite;
        }

        .wing {
          transform-origin: 50% 50%;
          animation: wingFlap 0.3s ease-in-out infinite;
        }

        .wing-left {
          animation-delay: 0s;
        }

        .wing-right {
          animation-delay: 0.15s;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .butterfly-container {
            animation: none;
            transform: translateX(-50%) translateY(30vh);
            opacity: 0.7;
          }
          .wing {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}