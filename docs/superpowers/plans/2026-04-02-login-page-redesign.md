# Welcome Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 重构 landing page 为欢迎页 — 全屏晨曦渐变背景 + 蝴蝶破茧飞舞动画 + 毛玻璃欢迎卡片，点击进入 workspace

**Architecture:**
- 背景：CSS 线性渐变 + 径向光晕，纯代码实现
- 动画：CSS @keyframes + SVG 蝴蝶路径
- 组件：WelcomeCard, PrimaryButton, ButterflyAnimation
- 路由：点击按钮使用 Next.js `router.push('/workspace')` 跳转

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4

---

## File Structure

```
frontend/src/
├── app/
│   └── page.tsx                          # 重构为欢迎页
├── components/
│   ├── login/
│   │   ├── WelcomeCard.tsx              # 毛玻璃欢迎卡片
│   │   ├── PrimaryButton.tsx            # 渐变按钮
│   │   ├── ButterflyAnimation.tsx       # 蝴蝶动画
│   │   └── index.ts                     # 导出
│   └── landing/                          # 现有组件（保留原位，不使用）
└── styles/
    └── globals.css                       # 渐变背景样式
```

---

## Task 1: 渐变背景样式

**Files:**
- Modify: `frontend/src/styles/globals.css`

- [ ] **Step 1: 添加渐变背景样式**

```css
/* Sunrise gradient background for welcome page */
.bg-sunrise {
  background: linear-gradient(
    to top,
    #FF8C42 0%,   /* Deep orange - bottom */
    #FFD700 40%,  /* Golden yellow - middle */
    #FFB6C1 100%  /* Soft pink - top */
  );
  position: relative;
}

.bg-sunrise::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 40%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 248, 220, 0.6) 0%,   /* Light cream center */
    rgba(255, 215, 0, 0.3) 40%,    /* Golden glow */
    transparent 70%
  );
  pointer-events: none;
}
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/styles/globals.css
git commit -m "feat(frontend): add sunrise gradient background styles"
```

---

## Task 2: PrimaryButton 组件

**Files:**
- Create: `frontend/src/components/login/PrimaryButton.tsx`

- [ ] **Step 1: 创建 PrimaryButton 组件**

```tsx
"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { type ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function PrimaryButton({
  children,
  className,
  onClick,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        "h-14 w-full cursor-pointer rounded-xl font-semibold text-white",
        // Gradient background
        "bg-gradient-to-r from-[#FF8C42] to-[#FFB6C1]",
        // Hover: brightness + scale
        "transition-all duration-200 ease-out",
        "hover:brightness-110 hover:scale-[1.02]",
        // Active: scale down
        "active:scale-[0.98]",
        // Focus: visible focus ring for accessibility
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/components/login/PrimaryButton.tsx
git commit -m "feat(frontend): add PrimaryButton component with gradient and hover effects"
```

---

## Task 3: ButterflyAnimation 组件

**Files:**
- Create: `frontend/src/components/login/ButterflyAnimation.tsx`

- [ ] **Step 1: 创建 ButterflyAnimation 组件**

```tsx
"use client";

import { cn } from "@/lib/utils";

interface ButterflyAnimationProps {
  className?: string;
}

export function ButterflyAnimation({ className }: ButterflyAnimationProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Butterfly SVG with CSS animation */}
      <div className="butterfly-container">
        <svg
          viewBox="0 0 100 80"
          className="butterfly h-16 w-16 md:h-24 md:w-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left wing */}
          <path
            className="wing wing-left"
            d="M50 40 Q30 20 10 30 Q5 45 20 55 Q35 60 50 45"
            fill="url(#wingGradient)"
            opacity="0.9"
          />
          {/* Right wing */}
          <path
            className="wing wing-right"
            d="M50 40 Q70 20 90 30 Q95 45 80 55 Q65 60 50 45"
            fill="url(#wingGradient)"
            opacity="0.9"
          />
          {/* Body */}
          <ellipse
            cx="50"
            cy="45"
            rx="4"
            ry="15"
            fill="#4A3728"
          />
          {/* Wing gradient definition */}
          <defs>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="50%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        /* Butterfly emergence animation (Phase 1: 3s) */
        @keyframes butterflyEmerge {
          0% {
            transform: translateY(100vh) scale(0.3);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) scale(0.6);
          }
          70% {
            transform: translateY(30vh) scale(0.8);
          }
          100% {
            transform: translateY(20vh) scale(1);
            opacity: 1;
          }
        }

        /* Floating animation (Phase 2: 8s loop) */
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(30px) rotate(10deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) translateX(-20px) rotate(-5deg);
            opacity: 0;
          }
        }

        /* Wing flapping */
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.6);
          }
        }

        .butterfly-container {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          animation:
            butterflyEmerge 3s ease-out forwards,
            floatUp 8s ease-in-out 3s infinite;
        }

        .wing {
          transform-origin: 50% 50%;
          animation: wingFlap 0.3s ease-in-out infinite;
        }

        .wing-left {
          animation-delay: 0s;
        }

        .wing-right {
          animation-delay: 0.15s;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .butterfly-container {
            animation: none;
            transform: translateX(-50%) translateY(30vh);
            opacity: 0.7;
          }
          .wing {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/components/login/ButterflyAnimation.tsx
git commit -m "feat(frontend): add butterfly emergence and float animation"
```

---

## Task 4: WelcomeCard 组件

**Files:**
- Create: `frontend/src/components/login/WelcomeCard.tsx`

- [ ] **Step 1: 创建 WelcomeCard 组件**

```tsx
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
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/components/login/WelcomeCard.tsx
git commit -m "feat(frontend): add WelcomeCard with frosted glass effect"
```

---

## Task 5: index.ts 导出

**Files:**
- Create: `frontend/src/components/login/index.ts`

- [ ] **Step 1: 创建 index.ts**

```typescript
export { WelcomeCard } from "./WelcomeCard";
export { PrimaryButton } from "./PrimaryButton";
export { ButterflyAnimation } from "./ButterflyAnimation";
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/components/login/index.ts
git commit -m "feat(frontend): export login components"
```

---

## Task 6: 页面重构 page.tsx

**Files:**
- Modify: `frontend/src/app/page.tsx`

- [ ] **Step 1: 重构 page.tsx**

```tsx
import { WelcomeCard } from "@/components/login";
import { ButterflyAnimation } from "@/components/login";

export default function WelcomePage() {
  return (
    <main className="bg-sunrise relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Butterfly animation overlay */}
      <ButterflyAnimation />

      {/* Centered welcome card */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <WelcomeCard />
      </div>
    </main>
  );
}
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/app/page.tsx
git commit -m "feat(frontend): refactor page.tsx to welcome page with gradient and butterfly animation"
```

---

## Task 7: Google Fonts 引入

**Files:**
- Modify: `frontend/src/app/layout.tsx` (检查并添加 Google Fonts)

- [ ] **Step 1: 检查 layout.tsx 中的字体引入**

读取 `frontend/src/app/layout.tsx`，确保包含 Lora 和 Raleway 字体引入。

如果需要添加，在 `<head>` 中添加：
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: 提交**

```bash
git add frontend/src/app/layout.tsx
git commit -m "feat(frontend): add Lora and Raleway Google Fonts"
```

---

## Task 8: 验证与测试

- [ ] **Step 1: 运行类型检查**

```bash
cd frontend && pnpm typecheck
```

- [ ] **Step 2: 运行 lint 检查**

```bash
cd frontend && pnpm lint
```

- [ ] **Step 3: 本地预览**

```bash
cd frontend && pnpm dev
```

访问 http://localhost:3000 验证：
- [ ] 全屏晨曦渐变背景正确显示
- [ ] 径向光晕效果可见
- [ ] 蝴蝶动画正常播放（破茧 → 飞舞）
- [ ] 欢迎卡片毛玻璃效果正常
- [ ] 点击"开始探索"按钮跳转到 /workspace

- [ ] **Step 4: 响应式测试**

在移动端视口（375px）下验证布局正确。

- [ ] **Step 5: 提交所有更改**

```bash
git add .
git commit -m "feat(frontend): complete welcome page redesign with sunrise theme"
```

---

## Self-Review Checklist

- [ ] 渐变背景使用 CSS 而非图片，性能更好
- [ ] 蝴蝶动画使用 CSS @keyframes + SVG，无外部依赖
- [ ] 毛玻璃效果使用 backdrop-blur-xl，兼容现代浏览器
- [ ] 按钮有 hover/active/focus 状态
- [ ] 支持 prefers-reduced-motion
- [ ] 触摸目标 ≥44px
- [ ] 所有文本对比度 ≥4.5:1
- [ ] 响应式布局在 375px / 768px / 1024px 下正常
