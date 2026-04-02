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
        "bg-[#6b5a42] text-[#f0e6d0] font-semibold",
        "transition-all duration-200 ease-out",
        "hover:bg-[#7d6b50]",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c896]/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
