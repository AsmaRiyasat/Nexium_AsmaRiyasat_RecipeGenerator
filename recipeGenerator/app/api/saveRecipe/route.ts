
// app/api/saveRecipe/route.ts
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongo";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ingredients, recipe, sessionId } = body;

    if (!ingredients || !recipe || !sessionId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("recipe_db");
    const collection = db.collection("recipes");

    const result = await collection.insertOne({ ingredients, recipe, sessionId, createdAt: new Date() });
    console.log("✅ Recipe inserted with ID:", result.insertedId);


    return NextResponse.json({ message: "Recipe saved", id: result.insertedId });
  } catch (error) {
    console.error("Error saving recipe:", error);
    return NextResponse.json({ error: "Failed to save recipe" }, { status: 500 });
  }
}
