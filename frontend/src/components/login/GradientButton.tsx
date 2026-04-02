"use client";

import { type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "h-12 w-full cursor-pointer rounded-lg",
        "text-[#f0e6d0] font-semibold",
        "transition-all duration-200 ease-out",
        "hover:brightness-110",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c896]/50",
        className
      )}
      style={{
        backgroundColor: "rgba(107, 90, 66, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
