"use client";

import { useRouter } from "next/navigation";

import { GradientButton } from "./GradientButton";
import { Input } from "./Input";

export function LoginCard() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/workspace");
  };

  return (
    <div
      className="
        relative z-10
        w-full max-w-[400px]
        rounded-2xl
        border border-white/[0.06]
        bg-white/8
        p-10
        backdrop-blur-md
        flex
        flex-col
        items-center
        gap-6
      "
      style={{
        backgroundColor: "rgba(255, 252, 245, 0.05)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 80px rgba(255, 200, 100, 0.08), 0 0 120px rgba(255, 200, 100, 0.04)",
      }}
    >
      {/* 标题 */}
      <h1
        className="text-4xl font-semibold text-[#f0e6d0] tracking-wide"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        Cocoon Break
      </h1>
      <p className="italic text-lg text-[#c9b896]">
        # See Through the Cocoon _
      </p>

      {/* 分隔线 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* 登录标题 */}
      <p className="text-sm tracking-[0.3em] text-[#c9b896] uppercase">
        Login
      </p>

      {/* 表单 */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <Input
          type="text"
          placeholder="账号"
          className="w-full"
        />
        <Input
          type="password"
          placeholder="密码"
          className="w-full"
        />

        {/* 登录按钮 */}
        <div className="mt-2">
          <GradientButton type="submit">
            Continue
          </GradientButton>
        </div>
      </form>

    </div>
  );
}
