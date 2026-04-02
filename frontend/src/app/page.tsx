"use client";

import { useState, useEffect } from "react";
import { Background } from "@/components/login/Background";
import { LoginCard } from "@/components/login/LoginCard";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowLogin(!showLogin);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <style jsx>{`
        .login-container {
          transition: transform 0.4s ease-out, opacity 0.4s ease-out;
        }
        .login-hidden {
          transform: translateX(100%);
          opacity: 0;
        }
        .login-visible {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>

      {/* 背景层 */}
      <Background />

      {/* 标题卡片 - 垂直水平居中 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="flex flex-col items-start p-8"
          style={{
            backgroundColor: "rgba(255, 252, 245, 0.03)",
            backdropFilter: "blur(8px)",
            minWidth: "600px",
          }}
        >
          <h1
            className="text-5xl font-semibold text-[#f0e6d0] tracking-wide"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Cocoon Break
          </h1>
          <p className="mt-4 italic text-xl text-[#c9b896]">
            # See Through the Cocoon _
          </p>

          <div className="self-end">
            <button
              onClick={handleToggle}
              className="mt-4 px-6 py-2 rounded-lg text-sm tracking-[0.2em] text-[#f0e6d0] hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              style={{
                backgroundColor: "rgba(180, 140, 80, 0.3)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 160, 100, 0.3)",
              }}
            >
              {showLogin ? "← Back" : "Continue →"}
            </button>
          </div>
        </div>
      </div>

      {/* 登录卡片 */}
      <div
        className={`login-container absolute right-0 z-10 flex h-screen items-center justify-end px-12 ${showLogin ? "login-visible" : "login-hidden"}`}
      >
        <LoginCard />
      </div>
    </main>
  );
}
