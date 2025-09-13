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
}

export default function BuilderPage({ model, content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  const [builderContent, setBuilderContent] = useState(content);

  useEffect(() => {
    // If we're in preview mode or don't have content, fetch it
    if (isPreviewing || !content) {
      builder
        .get(model, {
          url: window.location.pathname,
        })
        .promise()
        .then(setBuilderContent);
    }
  }, [model, content, isPreviewing]);

  // If we're in the Builder editor, always show the content
  if (isPreviewing) {
    return <BuilderComponent model={model} content={builderContent} />;
  }

  // If there's no content, return null or a fallback
  if (!builderContent) {
    return null;
  }

  return <BuilderComponent model={model} content={builderContent} />;
}
