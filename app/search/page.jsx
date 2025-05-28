"use client"; // This component needs to be client-side to access URL search params

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// Removed 'Product' from import, as it's a TypeScript type.
import { searchProducts } from '../../lib/data'; // Adjust path if needed

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  // Removed the type annotation for useState. JavaScript infers the type from the initial value.
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProducts = searchProducts(query);
    setResults(foundProducts);
    setLoading(false);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8 font-outfit">
          Suchergebnisse für "{query}"
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Lade Ergebnisse...</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Keine Produkte gefunden für "{query}". Bitte versuchen Sie einen anderen Suchbegriff.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${encodeURIComponent(product.id)}`}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
                    <p className="text-white text-xl font-outfit font-bold">{product.name}</p>
                  </div>
                </div>
                <div className="p-4 text-gray-700 text-sm">
                  <p>{product.price}</p>
                  <p className="text-gray-500 text-xs mt-1">{product.description.substring(0, 50)}...</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}