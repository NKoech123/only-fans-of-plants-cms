import BuilderPage from "@/components/builder";

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.page?.join("/") || "");

  return <BuilderPage model="page" urlPath={urlPath} />;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.page?.join("/") || "");

  return {
    title: `Page - ${urlPath}`,
    description: "Builder.io page",
  };
}
