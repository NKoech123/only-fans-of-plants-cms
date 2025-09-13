"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar({
  logoSrc = "/next.svg",
  logoAlt = "Only Fans of Plants",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Plant Care", href: "/plant-care" },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".navbar-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar-container w-full bg-white shadow-sm relative z-50">
        <div className="navbar-inner w-full max-w-none px-4 flex items-center justify-between">
          <div className="navbar-left flex items-center gap-4">
            <Link
              href="/"
              className="navbar-logo-link inline-flex items-center"
            >
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={48}
                height={48}
                className="navbar-logo-image rounded-full"
              />
              <span className="navbar-brand ml-3 text-lg font-semibold text-gray-900">
                Only Fans of Plants
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`navbar-item relative px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar-right flex items-center gap-4">
            {showCta && (
              <Link
                href={ctaLink}
                className="navbar-cta hidden md:inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {ctaLabel}
              </Link>
            )}

            <button
              onClick={toggleMobileMenu}
              className="navbar-menu-button md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-full h-full w-64 bg-white shadow-xl transform transition-transform z-[70]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-900">
                  Menu
                </span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 py-4">
                <div className="flex flex-col space-y-1 px-4">
                  {navItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-md transition-colors font-medium ${
                        pathname === item.href
                          ? "bg-green-600 text-white"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                {showCta && (
                  <div className="px-4 mt-6">
                    <Link
                      href={ctaLink}
                      onClick={closeMobileMenu}
                      className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      {ctaLabel}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
