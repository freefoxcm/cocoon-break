"use client";

import { GradientButton } from "./GradientButton";
import { Input } from "./Input";

export function LoginCard() {
  return (
    <div
      className="
        relative z-10
        w-full max-w-[380px]
        rounded-2xl
        border border-white/10
        bg-white/8
        p-10
        backdrop-blur-md
        flex
        flex-col
        items-center
        gap-6
      "
      style={{
        backgroundColor: "rgba(255, 252, 245, 0.08)",
        backdropFilter: "blur(15px)",
      }}
    >
      {/* Logo 和标题 */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#f5f0e8] md:text-4xl">
          Cocoon Break
        </h1>
        <p className="italic text-lg text-[#a8c5b8] md:text-xl">
          Find Your Clarity
        </p>
      </div>

      {/* 分隔线 */}
      <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
            text-sm text-[#a8c5b8]
            hover:text-[#f5f0e8]
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
