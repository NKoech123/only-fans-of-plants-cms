import { NextResponse } from "next/server";
import { getAllPlants } from "@/lib/plant-data";

export async function GET() {
  try {
    const plants = getAllPlants();
    return NextResponse.json(plants);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch plants" },
      { status: 500 }
    );
  }
}
