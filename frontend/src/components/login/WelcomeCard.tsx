"use client";

import { useRouter } from "next/navigation";

import { PrimaryButton } from "./PrimaryButton";

export function WelcomeCard() {
  const router = useRouter();

  const handleEnter = () => {
    // Navigate to workspace
    router.push("/workspace");
  };

  return (
    <div
      className="
        relative z-10
        w-full max-w-[420px]
        rounded-3xl
        border border-white/20
        bg-white/15
        p-10
        shadow-2xl
        backdrop-blur-xl
        flex
        flex-col
        items-center
        gap-6
      "
      style={{
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      {/* Logo / Title */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="bg-gradient-to-r from-white to-white/80 bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl">
          Cocoon Break
        </h1>
        <p className="text-lg text-white/80 md:text-xl">
          破茧而出，释放你的生产力
        </p>
      </div>

      {/* Decorative divider */}
      <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Description */}
      <p className="text-center text-sm text-white/70 md:text-base">
        探索 AI SuperAgent 的无限可能
      </p>

      {/* Enter button */}
      <div className="mt-2 w-full">
        <PrimaryButton onClick={handleEnter}>
          开始探索
        </PrimaryButton>
      </div>
    </div>
  );
}