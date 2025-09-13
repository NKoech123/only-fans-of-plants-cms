// Sample plant data - replace with your actual data source
export const plantsData = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    price: "$29.99",
    image: "/plants/monstera.jpg",
    careLevel: "Easy" as const,
    rating: 5,
    onSale: true,
    isFavorite: false,
    description:
      "The Swiss cheese plant is a popular houseplant with distinctive split leaves.",
    category: "Indoor Plants",
    stock: 15,
  },
  {
    id: "2",
    name: "Fiddle Leaf Fig",
    price: "$45.99",
    image: "/plants/fiddle-leaf.jpg",
    careLevel: "Hard" as const,
    rating: 4,
    onSale: false,
    isFavorite: true,
    description: "A stunning tree with large, violin-shaped leaves.",
    category: "Indoor Plants",
    stock: 8,
  },
  {
    id: "3",
    name: "Snake Plant",
    price: "$19.99",
    image: "/plants/snake-plant.jpg",
    careLevel: "Easy" as const,
    rating: 5,
    onSale: false,
    isFavorite: false,
    description: "Low-maintenance plant perfect for beginners.",
    category: "Indoor Plants",
    stock: 25,
  },
  {
    id: "4",
    name: "Peace Lily",
    price: "$24.99",
    image: "/plants/peace-lily.jpg",
    careLevel: "Medium" as const,
    rating: 4,
    onSale: true,
    isFavorite: true,
    description: "Beautiful flowering plant that purifies the air.",
    category: "Flowering Plants",
    stock: 12,
  },
];

export function getPlantById(id: string) {
  return plantsData.find((plant) => plant.id === id);
}

export function getAllPlants() {
  return plantsData;
}

export function getPlantsByCategory(category: string) {
  return plantsData.filter((plant) => plant.category === category);
}

export function getFeaturedPlants() {
  return plantsData.filter((plant) => plant.onSale || plant.rating >= 5);
}
