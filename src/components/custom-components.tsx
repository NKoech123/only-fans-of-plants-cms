"use client";

import { Builder } from "@builder.io/react";
import Image from "next/image";
import React, { useState } from "react";
import { PlantGrid } from "./plant-grid";
import { Navbar } from "./navbar";
import PlantCare from "./PlantCare/PlantCare";
import PlantCareCard from "./PlantCare/PlantCareCard";
import CheckoutModal from "./CheckoutModal";

// Custom Hero Component
export function Hero({
  title = "Welcome to Only Fans of Plants",
  subtitle = "Your ultimate plant care companion",
  ctaText = "Get Started",
  ctaLink = "#",
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

// Custom Plant Card Component
export function PlantCard({
  name = "Plant Name",
  price = "$45.99",
  originalPrice = "$59.99",
  image = "/next.svg",
  careLevel = "Easy",
  category = "Indoor",
  description = "This is a description of the plant",
  rotation = 90,
  onSale = false,
  // Image control props
  imageAspectRatio = "square",
  imageObjectFit = "cover",
  imagePosition = "center",
  imageScale = 100,
  hoverZoom = 110,
  imageOffsetX = 0,
  imageOffsetY = 0,
}: {
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
  careLevel: string;
  category: string;
  description: string;
  rotation?: number;
  onSale?: boolean;
  // Image control types
  imageAspectRatio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  imageObjectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  imagePosition?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  imageScale?: number;
  hoverZoom?: number;
  imageOffsetX?: number;
  imageOffsetY?: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-80 mx-auto flex flex-col bg-red-500 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4">
        {/* Image Section */}
        <div
          className={`relative flex-shrink-0 overflow-hidden ${
            imageAspectRatio === "square"
              ? "aspect-square"
              : imageAspectRatio === "portrait"
              ? "aspect-[3/4]"
              : imageAspectRatio === "landscape"
              ? "aspect-[4/3]"
              : imageAspectRatio === "wide"
              ? "aspect-[16/9]"
              : imageAspectRatio === "tall"
              ? "aspect-[2/3]"
              : "aspect-square"
          }`}
        >
          {/* Sale Badge */}
          {onSale && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10 animate-in zoom-in-50 duration-500 delay-300">
              Sale
            </div>
          )}

          {/* Category and Care Level Tags - Positioned over image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              {category}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-green-700 border border-green-200 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-200">
              {careLevel}
            </span>
          </div>

          {/* Plant Image */}
          <div
            className="relative w-full h-full group/image"
            style={
              {
                "--rotation": `${rotation}deg`,
                "--scale": imageScale / 100,
                "--hover-scale": hoverZoom / 100,
                "--offset-x": `${imageOffsetX}px`,
                "--offset-y": `${imageOffsetY}px`,
              } as React.CSSProperties
            }
          >
            <Image
              src={image}
              alt={name}
              fill
              className={`transition-transform duration-500 ease-out ${
                imageObjectFit === "cover"
                  ? "object-cover"
                  : imageObjectFit === "contain"
                  ? "object-contain"
                  : imageObjectFit === "fill"
                  ? "object-fill"
                  : imageObjectFit === "scale-down"
                  ? "object-scale-down"
                  : imageObjectFit === "none"
                  ? "object-none"
                  : "object-cover"
              } ${
                imagePosition === "center"
                  ? "object-center"
                  : imagePosition === "top"
                  ? "object-top"
                  : imagePosition === "bottom"
                  ? "object-bottom"
                  : imagePosition === "left"
                  ? "object-left"
                  : imagePosition === "right"
                  ? "object-right"
                  : imagePosition === "top-left"
                  ? "object-left-top"
                  : imagePosition === "top-right"
                  ? "object-right-top"
                  : imagePosition === "bottom-left"
                  ? "object-left-bottom"
                  : imagePosition === "bottom-right"
                  ? "object-right-bottom"
                  : "object-center"
              }`}
              style={{
                transform: `rotate(var(--rotation)) scale(var(--scale)) translate(var(--offset-x), var(--offset-y))`,
                transformOrigin: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(var(--rotation)) scale(var(--hover-scale)) translate(var(--offset-x), var(--offset-y))`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(var(--rotation)) scale(var(--scale)) translate(var(--offset-x), var(--offset-y))`;
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Plant Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-800 transition-colors duration-300">
            {name}
          </h3>

          {/* Review Count */}
          <div className="text-gray-500 text-xm mb-3 group-hover:text-gray-600 transition-colors duration-300">
            {description}
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between gap-4 mt-auto">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
                {price}
              </span>
              {onSale && originalPrice && (
                <span className="text-lg text-gray-400 line-through animate-in fade-in duration-500 delay-200">
                  {originalPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

// Custom Feature Section Component
export function FeatureSection({
  title = "Features",
  features = [],
}: {
  title?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}) {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon || "🌱"}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Register Navbar with Builder.io
Builder.registerComponent(Navbar, {
  name: "Navbar",
  inputs: [
    {
      name: "logoSrc",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
    { name: "logoAlt", type: "string", defaultValue: "Only Fans of Plants" },
    {
      name: "navItems",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
      defaultValue: [
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: "Plant Care", href: "/plant-care" },
        { label: "About", href: "/about" },
      ],
    },
    { name: "showCta", type: "boolean", defaultValue: false },
    { name: "ctaLabel", type: "string", defaultValue: "Get Started" },
    { name: "ctaLink", type: "string", defaultValue: "#" },
  ],
});

// Register components with Builder.io
Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Welcome to Only Fans of Plants",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Your ultimate plant care companion",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
    { name: "ctaText", type: "string", defaultValue: "Get Started" },
    { name: "ctaLink", type: "string", defaultValue: "#" },
  ],
});

Builder.registerComponent(PlantCard, {
  name: "Plant Card",
  inputs: [
    { name: "name", type: "string", defaultValue: "Plant Name" },
    { name: "price", type: "string", defaultValue: "$45.99" },
    { name: "originalPrice", type: "string", defaultValue: "$59.99" },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
    { name: "category", type: "string" },
    {
      name: "careLevel",
      type: "string",
      enum: ["Easy", "Medium", "Hard"],
      defaultValue: "Easy",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "This is a description of the plant",
    },
    {
      name: "rotation",
      type: "number",
      defaultValue: 0,
      min: -180,
      max: 180,
      step: 15,
      helperText: "Rotate the image in degrees",
    },
    {
      name: "onSale",
      type: "boolean",
      defaultValue: false,
    },
    // Image Control Props
    {
      name: "imageAspectRatio",
      type: "string",
      enum: ["square", "portrait", "landscape", "wide", "tall"],
      defaultValue: "square",
      helperText: "Control the aspect ratio of the image container",
    },
    {
      name: "imageObjectFit",
      type: "string",
      enum: ["cover", "contain", "fill", "scale-down", "none"],
      defaultValue: "cover",
      helperText: "How the image should fit within its container",
    },
    {
      name: "imagePosition",
      type: "string",
      enum: [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ],
      defaultValue: "center",
      helperText: "Position of the image within its container",
    },
    {
      name: "imageScale",
      type: "number",
      defaultValue: 100,
      min: 50,
      max: 200,
      step: 5,
      helperText: "Scale the image size (percentage)",
    },
    {
      name: "hoverZoom",
      type: "number",
      defaultValue: 110,
      min: 100,
      max: 150,
      step: 5,
      helperText: "Scale on hover (percentage)",
    },
    {
      name: "imageOffsetX",
      type: "number",
      defaultValue: 0,
      min: -100,
      max: 100,
      step: 5,
      helperText: "Horizontal offset in pixels",
    },
    {
      name: "imageOffsetY",
      type: "number",
      defaultValue: 0,
      min: -100,
      max: 100,
      step: 5,
      helperText: "Vertical offset in pixels",
    },
  ],
});

Builder.registerComponent(FeatureSection, {
  name: "Feature Section",
  inputs: [
    { name: "title", type: "string", defaultValue: "Features" },
    {
      name: "features",
      type: "list",
      subFields: [
        { name: "title", type: "string" },
        { name: "description", type: "longText" },
        { name: "icon", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(PlantGrid, {
  name: "Plant Grid",
  inputs: [
    { name: "title", type: "string", defaultValue: "Our Plants" },
    {
      name: "displayType",
      type: "string",
      enum: ["all", "featured", "category"],
      defaultValue: "all",
    },
    {
      name: "category",
      type: "string",
      defaultValue: "Indoor Plants",
    },
    {
      name: "columns",
      type: "number",
      defaultValue: 3,
      min: 1,
      max: 4,
    },
  ],
});

Builder.registerComponent(PlantCare, {
  name: "Plant Care",
  inputs: [
    {
      name: "posts",
      type: "list",
      subFields: [
        {
          name: "id",
          type: "string",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "data",
          type: "object",
        },
        {
          name: "url",
          type: "string",
        },
        {
          name: "lastUpdated",
          type: "number",
        },
      ],
    },
    {
      name: "model",
      type: "string",
      defaultValue: "plant-care-post",
      helperText: "The Builder.io model to fetch content from",
    },
    {
      name: "limit",
      type: "number",
      defaultValue: 24,
      helperText: "Maximum number of posts to display",
    },
  ],
});

Builder.registerComponent(PlantCareCard, {
  name: "Plant Care Card",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Plant Care Guide",
      helperText: "The title of the plant care guide",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      helperText: "Optional image for the plant care guide",
    },
    {
      name: "href",
      type: "string",
      defaultValue: "/plant-care",
      helperText: "Link destination when the card is clicked",
    },
    {
      name: "showPlaceholder",
      type: "boolean",
      defaultValue: false,
      helperText: "Show placeholder icon instead of image",
    },
  ],
});
