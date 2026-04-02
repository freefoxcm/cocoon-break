"use client";

export function TitleCard() {
  return (
    <div
      className="relative z-10 flex flex-col items-start justify-center p-12"
      style={{
        backgroundColor: "rgba(255, 252, 245, 0.03)",
        backdropFilter: "blur(8px)",
      }}
    >
      <h1
        className="text-5xl font-semibold text-[#f0e6d0] md:text-6xl tracking-wide"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        Cocoon Break
      </h1>
      <p className="mt-6 italic text-xl text-[#c9b896] md:text-2xl">
        # See Through the Cocoon _
      </p>
    </div>
  );
}
