"use client";

export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      {/* 苔藓绿渐变底层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3d2e] to-[#0d1f17]" />

      {/* 破茧图片背景 - 使用 img 标签便于控制透明度 */}
      <img
        src="/images/cocoon-break-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />

      {/* 中心光晕效果 */}
      <div
        className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,200,100,0.35) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
