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

      {/* 标题卡片 */}
      <div className="absolute left-1/3 bottom-24 z-10">
        <div
          className="flex flex-col items-start justify-center p-12"
          style={{
            backgroundColor: "rgba(255, 252, 245, 0.03)",
            backdropFilter: "blur(8px)",
            minWidth: "650px",
          }}
        >
          <h1
            className="text-5xl font-semibold text-[#f0e6d0] tracking-wide"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Cocoon Break
          </h1>
          <p className="mt-6 italic text-xl text-[#c9b896]">
            # See Through the Cocoon _
          </p>

          {!showLogin && (
            <button
              onClick={() => setShowLogin(true)}
              className="mt-8 text-sm tracking-[0.2em] text-[#c9b896] hover:text-[#f0e6d0] transition-colors duration-200"
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
