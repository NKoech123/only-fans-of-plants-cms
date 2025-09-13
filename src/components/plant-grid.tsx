"use client";

import { PlantCard } from "./custom-components";
import {
  getAllPlants,
  getFeaturedPlants,
  getPlantsByCategory,
} from "@/lib/plant-data";

interface PlantGridProps {
  title?: string;
  displayType?: "all" | "featured" | "category";
  category?: string;
  columns?: number;
}

export function PlantGrid({
  title = "Our Plants",
  displayType = "all",
  category = "Indoor Plants",
  columns = 3,
}: PlantGridProps) {
  let plants = [];

  switch (displayType) {
    case "featured":
      plants = getFeaturedPlants();
      break;
    case "category":
      plants = getPlantsByCategory(category);
      break;
    default:
      plants = getAllPlants();
  }

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div
          className={`grid gap-8 ${
            gridCols[columns as keyof typeof gridCols] || gridCols[3]
          }`}
        >
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              name={plant.name}
              price={plant.price}
              image={plant.image}
              careLevel={plant.careLevel}
              onSale={plant.onSale}
              description={plant.description}
              category={plant.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
