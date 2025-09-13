"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PlantCareCardProps {
  title?: string;
  image?: string;
  href?: string;
  showPlaceholder?: boolean;
}

export default function PlantCareCard({
  title = "Plant Care Guide",
  image,
  href = "/plant-care",
  showPlaceholder = false,
}: PlantCareCardProps) {
  const content = (
    <div className="pc-card group w-full">
      <div className="pc-card-media relative aspect-square rounded-xl overflow-hidden bg-emerald-50 flex items-center justify-center h-32 w-full">
        {image && !showPlaceholder ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="w-full"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-emerald-200" aria-hidden />
        )}
      </div>
      <div className="mt-3">
        <div className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100">
          {title}
        </div>
      </div>
    </div>
  );

  if (href && href !== "#") {
    return (
      <Link href={href} className="group block pc-card-link" prefetch>
        {content}
      </Link>
    );
  }

  return content;
}
