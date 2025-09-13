import BuilderPage from "@/components/builder";

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page() {
  // For now, we'll render the Builder component and let it handle the content fetching
  // This avoids SSR issues with Builder.io
  return <BuilderPage model="page" />;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.page?.join("/") || "");

  return {
    title: `Page - ${urlPath}`,
    description: "Builder.io page",
  };
}
