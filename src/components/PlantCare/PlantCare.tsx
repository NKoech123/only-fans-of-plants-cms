"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { builder } from "@/lib/builder";

interface PlantItem {
  id: string;
  name?: string;
  data?: Record<string, unknown> & {
    title?: string;
    name?: string;
    heading?: string;
    image?: string | { src?: string };
    coverImage?: string | { src?: string };
    excerpt?: string;
    summary?: string;
    description?: string;
    url?: string;
    slug?: string;
    tags?: string[];
  };
  url?: string;
  lastUpdated?: number;
}

interface PlantCareProps {
  posts?: PlantItem[];
  model?: string;
  limit?: number;
}

function getImageUrl(item: PlantItem): string | null {
  const data = item.data || {};
  const first = (val: unknown) => {
    if (!val) return null;
    if (typeof val === "string") return val;
    if (typeof val === "object" && val && "src" in val) {
      return (val as { src?: string }).src || null;
    }
    return null;
  };
  return first(data.image) || first(data.coverImage) || null;
}

function getTitle(item: PlantItem): string {
  const data = item.data || {};
  return (
    (data.title as string) ||
    (data.name as string) ||
    (data.heading as string) ||
    item.name ||
    "Untitled"
  );
}

function getHref(item: PlantItem): string {
  const data = item.data || {};
  const raw = (data.url as string) || item.url || (data.slug as string) || "";
  if (!raw) return "/plant-care";
  if (raw.startsWith("http")) return raw;
  if (raw.startsWith("/")) return raw;
  return `/plant-care/${raw}`;
}

export default function PlantCare({
  posts: initialPosts,
  model = "plant-care-post",
  limit = 24,
}: PlantCareProps) {
  const [posts, setPosts] = useState<PlantItem[] | null>(initialPosts ?? null);
  const [loading, setLoading] = useState(initialPosts ? false : true);

  useEffect(() => {
    if (posts === null) {
      setLoading(true);
      builder
        .getAll(model, { limit, fields: "id,name,data,url,lastUpdated" })
        .then((res) => {
          setPosts(res as PlantItem[]);
          setLoading(false);
        })
        .catch(() => {
          setPosts([]);
          setLoading(false);
        });
    }
  }, [model, limit, posts]);

  return (
    <div className="pc-container px-6 sm:px-10 md:px-12 lg:px-20 xl:px-28 max-w-[1200px] mx-auto py-12 md:py-16">
      <header className="pc-header text-center mb-10 md:mb-12">
        <h2 className="pc-title text-4xl md:text-5xl font-semibold tracking-tight text-emerald-800">
          Plant Care Guides
        </h2>
        <p className="pc-subtitle mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
          Browse practical how‑tos for thriving houseplants—watering, light,
          soil, pests, and more.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="pc-cta inline-flex items-center justify-center rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            Care Guide PDF
          </Link>
        </div>
      </header>
    </div>
  );
}
