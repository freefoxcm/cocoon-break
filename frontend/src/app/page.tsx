"use client";

import { useState } from "react";
import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";
import { GradientButton } from "@/components/login/GradientButton";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* 背景层 */}
      <Background />

      {/* 标题卡片 - 垂直水平居中 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="flex flex-col items-start justify-between p-12"
          style={{
            backgroundColor: "rgba(255, 252, 245, 0.03)",
            backdropFilter: "blur(8px)",
            minWidth: "600px",
            minHeight: "300px",
          }}
        >
          <div>
            <h1
              className="text-5xl font-semibold text-[#f0e6d0] tracking-wide"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Cocoon Break
            </h1>
            <p className="mt-6 italic text-xl text-[#c9b896]">
              # See Through the Cocoon _
            </p>
          </div>

          {!showLogin && (
            <button
              onClick={() => setShowLogin(true)}
              className="self-end text-sm tracking-[0.2em] text-[#c9b896] hover:text-[#f0e6d0] transition-colors duration-200"
            >
              Continue →
            </button>
          )}
        </div>
      </div>

      {/* 登录卡片 */}
      {showLogin && (
        <div className="relative z-10 flex h-screen items-center justify-end px-12">
          <LoginCard />
        </div>
      )}
    </main>
  );
}
