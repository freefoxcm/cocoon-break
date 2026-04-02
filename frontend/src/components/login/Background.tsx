"use client";

export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      {/* 破茧图片背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cocoon-break-bg.png')",
          opacity: 0.3,
        }}
      />

      {/* 光晕效果 */}
      <div
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,200,100,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 苔藓绿渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3d2e] to-[#0d1f17] opacity-85" />
    </div>
  );
}
