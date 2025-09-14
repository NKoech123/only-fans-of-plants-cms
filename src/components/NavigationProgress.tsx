"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

function NavigationProgressInner({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let contentTimeoutId: NodeJS.Timeout;

    // Listen for clicks on links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement;

      if (
        link &&
        link.href &&
        !link.href.startsWith("mailto:") &&
        !link.href.startsWith("tel:") &&
        !link.href.startsWith("#")
      ) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only show loading for different pages
        if (
          url.pathname !== currentUrl.pathname ||
          url.search !== currentUrl.search
        ) {
          // Prevent default to control the navigation
          e.preventDefault();

          // Start loading immediately
          setIsLoading(true);
          setShowContent(false);

          // Navigate programmatically after a short delay
          setTimeout(() => {
            window.location.href = link.href;
          }, 100);

          // Fallback timeout in case navigation doesn't complete
          timeoutId = setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
          }, 8000);
        }
      }
    };

    // Handle navigation completion
    const handleNavigationComplete = () => {
      // Add a delay before hiding the spinner to ensure content is ready
      contentTimeoutId = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500);
    };

    // Add event listener for link clicks
    document.addEventListener("click", handleLinkClick);

    // Clean up on pathname change (navigation completed)
    handleNavigationComplete();

    return () => {
      document.removeEventListener("click", handleLinkClick);
      clearTimeout(timeoutId);
      clearTimeout(contentTimeoutId);
    };
  }, [pathname, searchParams]);

  // Show spinner during loading, hide content to prevent "Page not found" flash
  if (isLoading) {
    return <LoadingSpinner isVisible={true} />;
  }

  return (
    <>
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default function NavigationProgress({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoadingSpinner isVisible={true} />}>
      <NavigationProgressInner>{children}</NavigationProgressInner>
    </Suspense>
  );
}
