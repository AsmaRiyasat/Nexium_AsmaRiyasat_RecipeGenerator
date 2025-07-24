

'use client';

import RecipeForm from "@/components/RecipeForm";

export default function Home() {
  return (
    <div className="min-h-screen text-black p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6"> Recipe Generator AI</h1>
      <RecipeForm />
    </div>
  );
}
