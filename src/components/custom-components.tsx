"use client";

import { Builder } from "@builder.io/react";
import Image from "next/image";
import { PlantGrid } from "./plant-grid";

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
  name,
  price = "$45.99",
  originalPrice = "$59.99",
  image = "/next.svg",
  careLevel = "Easy",
  category = "Indoor",
  description = "This is a description of the plant",
  rotation = 0,
  onSale = false,
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
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-80 mx-auto flex flex-col bg-red-500">
      {/* Image Section */}
      <div className="relative h-80 flex-shrink-0">
        {/* Sale Badge */}
        {onSale && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            Sale
          </div>
        )}

        {/* Category and Care Level Tags - Positioned over image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm">
            {category}
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-green-700 border border-green-200 shadow-sm">
            {careLevel}
          </span>
        </div>

        {/* Plant Image */}
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Plant Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Review Count */}
        <div className="text-gray-500 text-xm mb-3">{description}</div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            {onSale && originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm whitespace-nowrap flex-shrink-0">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
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

// Navbar Component
Builder.registerComponent(function Navbar({
  logoSrc = "/next.svg",
  logoAlt = "Only Fans of Plants",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Care Guides", href: "/guides" },
    { label: "About", href: "/about" },
  ],
  showCta = false,
  ctaLabel = "Get Started",
  ctaLink = "#",
}: {
  logoSrc?: string;
  logoAlt?: string;
  navItems?: Array<{ label: string; href: string }>;
  showCta?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
}) {
  return (
    <nav className="navbar-container bg-white shadow-sm">
      <div className="navbar-inner container mx-auto px-4 flex items-center justify-between">
        <div className="navbar-left flex items-center gap-4">
          <a href="/" className="navbar-logo-link inline-flex items-center">
            <Image src={logoSrc} alt={logoAlt} width={48} height={48} className="navbar-logo-image" />
            <span className="navbar-brand ml-3 text-lg font-semibold text-gray-900">Only Fans of Plants</span>
          </a>
        </div>

        <div className="navbar-center hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a key={i} href={item.href} className="navbar-item text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar-right flex items-center gap-4">
          {showCta && (
            <a href={ctaLink} className="navbar-cta inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              {ctaLabel}
            </a>
          )}

          <button className="navbar-menu-button md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}, {
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
        { label: "Care Guides", href: "/guides" },
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
    { name: "name", type: "string" },
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
    },
    {
      name: "onSale",
      type: "boolean",
      defaultValue: false,
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
