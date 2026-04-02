"use client";

import { GradientButton } from "./GradientButton";
import { Input } from "./Input";

export function LoginCard() {
  return (
    <div
      className="
        relative z-10
        w-full max-w-[340px]
        rounded-2xl
        border border-white/[0.06]
        bg-white/8
        p-8
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
      {/* Logo */}
      <img
        src="/images/cocoon-logo.svg"
        alt="logo"
        className="mb-2 opacity-80"
      />

      {/* 表单 */}
      <form className="w-full flex flex-col gap-4">
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
            进入探索
          </GradientButton>
        </div>
      </form>

      {/* 底部链接 */}
      <div className="mt-2">
        <a
          href="#"
          className="
            text-sm text-[#c9b896]
            hover:text-[#f0e6d0]
            hover:underline
            transition-colors duration-200
          "
        >
          探索更多 →
        </a>
      </div>
    </div>
  );
}
