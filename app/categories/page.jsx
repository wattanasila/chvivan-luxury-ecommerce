// Add "use client" directive if you need client-side interactivity on this page
// "use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../lib/data'; // Import your product data

export default function CategoriesPage() {
  // Get unique categories from your product data
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Map category names to user-friendly German titles
  // In JavaScript, you define objects directly without interface annotations.
  const categoryTitles = {
    sofa: "Sofas",
    lampe: "Lampen",
    tisch: "Tische",
    fernseher: "Fernseher & Elektronik",
  };

  // Get a representative image for each category (or use a placeholder)
  // Removed the ': string' type annotation for the parameter and return type.
  const getCategoryImage = (category) => {
    const product = products.find(p => p.category === category);
    return product ? product.image : 'placeholder.jpg'; // Ensure you have a placeholder.jpg
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl text-gray-900 text-center mb-12 font-outfit">
          Our product categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="group block bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={`/images/${getCategoryImage(category)}`}
                  alt={categoryTitles[category] || category}
                  fill // Use fill to make the image cover the parent div
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  priority // Prioritize loading for initial categories
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h2 className="text-white font-outfit tracking-wide">
                    {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                </div>
              </div>
              <div className="p-6 text-gray-700 text-lg">
                <p>All {categoryTitles[category] || category} discover</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}