"use client";

import { useEffect, useState } from "react";
import { PlantCard } from "./custom-components";

interface PlantData {
  id: string;
  name: string;
  category: string;
  description: string;
  rotation: number;
  price: string;
  image: string;
  careLevel: "Easy" | "Medium" | "Hard";
  rating: number;
  onSale: boolean;
  isFavorite: boolean;
}

export function PlantDataCard({ plantId }: { plantId: string }) {
  const [plantData, setPlantData] = useState<PlantData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch plant data from your API
    const fetchPlantData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`/api/plants/${plantId}`);
        const data = await response.json();
        setPlantData(data);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantData();
  }, [plantId]);

  if (loading) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-2xl"></div>;
  }

  if (!plantData) {
    return <div>Plant not found</div>;
  }

  return (
    <PlantCard
      name={plantData.name}
      price={plantData.price}
      image={plantData.image}
      careLevel={plantData.careLevel}
      category={plantData.category}
      description={plantData.description}
      onSale={plantData.onSale}
      rotation={plantData.rotation}
    />
  );
}
