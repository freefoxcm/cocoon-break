"use client";

export function Background() {
  return (
    <>
      <style>{`
        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: linear-gradient(to bottom, #1a3d2e, #0d1f17);
        }
        .bg-layer::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('/images/cocoon-break-bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.5;
          mix-blend-mode: soft-light;
        }
        .bg-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 800px;
          height: 800px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255,200,100,0.35) 0%, transparent 60%);
          filter: blur(80px);
          pointer-events: none;
        }
      `}</style>
      <div className="bg-layer">
        <div className="bg-glow" />
      </div>
    </>
  );
}
