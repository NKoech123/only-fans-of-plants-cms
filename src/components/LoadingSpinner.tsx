"use client";

import React from "react";
import Image from "next/image";

interface LoadingSpinnerProps {
  isVisible: boolean;
}

export default function LoadingSpinner({ isVisible }: LoadingSpinnerProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Image Spinner */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden animate-spin">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/de86e9290acb43dbbeccd5bf3e91c119/d5794e62bc5e4a1293c1a18c35bf389e"
              alt="Loading"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-20 h-20 border-2 border-transparent border-t-emerald-500 rounded-full animate-spin"></div>

          {/* Pulsing glow effect */}
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-emerald-200/30 animate-ping"></div>
        </div>

        {/* Loading text */}
        <div className="text-emerald-700 font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
