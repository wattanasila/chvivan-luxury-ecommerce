import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// Removed 'Product' from import, as it's a TypeScript type.
import { getProductsByCategory } from '../../../lib/data'; // Adjust path if needed

// Function to generate static params for all categories at build time
export async function generateStaticParams() {
  const categories = ['sofa', 'lampe', 'tisch', 'fernseher']; // List all your categories
  return categories.map((category) => ({
    categoryName: category,
  }));
}

// Removed the interface CategoryPageProps as it's TypeScript specific.
// The 'params' object will still be available via destructuring in JavaScript.
export default function CategoryPage({ params }) {
  const { categoryName } = params;
  // Removed ': Product[]' type annotation.
  const products = getProductsByCategory(categoryName);

  if (!products.length) {
    notFound(); // Display 404 if category has no products or doesn't exist
  }

  // Map category names to user-friendly German titles for display
  // In JavaScript, you define objects directly without interface annotations.
  const categoryTitles = {
    sofa: "Sofas",
    lampe: "Lampen",
    tisch: "Tische",
    fernseher: "Fernseher & Elektronik",
  };
  const displayCategoryName = categoryTitles[categoryName] || categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-900 text-center mb-12 font-outfit">
          Categories: {displayCategoryName}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.id)}`}
              className="group block bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-60">
                <Image
                  src={`/images/${product.image}`}
                  alt={product.name}
                  fill // Use fill to make the image cover the parent div
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-outfit">{product.name}</p>
                </div>
              </div>
              <div className="p-4 text-gray-700 text-sm">
                <p>{product.price}</p>
                <p className="text-gray-500 text-xs mt-1">{product.description.substring(0, 50)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}