"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@/lib/builder";
import { useEffect, useState } from "react";
// Import custom components to register them
import "./custom-components";

interface BuilderPageProps {
  model: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
  urlPath?: string;
}

export default function BuilderPage({
  model,
  content,
  urlPath,
}: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  const [builderContent, setBuilderContent] = useState(content);

  useEffect(() => {
    // If we're in preview mode or don't have content, fetch it
    if (isPreviewing || !content) {
      const url = urlPath || window.location.pathname;

      builder
        .get(model, {
          url: url,
        })
        .promise()
        .then(setBuilderContent);
    }
  }, [model, content, isPreviewing, urlPath]);

  // If we're in the Builder editor, always show the content
  if (isPreviewing) {
    return <BuilderComponent model={model} content={builderContent} />;
  }

  // If there's no content, return null or a fallback
  if (!builderContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Page not found</div>
      </div>
    );
  }

  return <BuilderComponent model={model} content={builderContent} />;
}
