"use client";

import { type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-[#a8c5b8] mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full h-12 px-4 bg-transparent",
          "border-b border-[#3d5c4a]",
          "text-[#f5f0e8] placeholder:text-[#a8c5b8]/60",
          "transition-colors duration-200",
          "focus:outline-none focus:border-[#f5f0e8]",
          className
        )}
        {...props}
      />
    </div>
  );
}