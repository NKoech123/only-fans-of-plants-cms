"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar({
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
}

export default Navbar;
