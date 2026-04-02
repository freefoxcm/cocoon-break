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