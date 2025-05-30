// Add "use client" directive because you're using useState
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter
import { products } from '../lib/data'; // Import your product data

export default function Showcase() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

const handleSearch = (e) => { // Removed type annotation for e
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to search results page
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setIsSearchOpen(false);
    }
  };

  // Ensure these items have images that exist in public/images
  const featuredItems = [
    { name: "Bags", image: "bag1.jpg", category: "bag" },
    { name: "Caps", image: "cap1.jpg", category: "cap" },
    { name: "T-shirts", image: "t-shirts1.jpg", category: "t-shirts" },
    { name: "Accessories", image: "accessory1.jpg", category: "accessory" },
  ];

  const mediaClips = [
    { type: "video", src: "clip1.mp4", caption: "Inspiration für Ihr Wohnzimmer" },
    { type: "video", src: "clip2.mp4", caption: "Innovative Küchengeräte" },
  ];

  return (
    <div className="font-lato text-gray-900 bg-white">

      {/* Featured Products Section */}
      <section className="p-8 md:p-16 text-center bg-gray-50">
        <h2 className="font-outfit font-medium mb-6 text-gray-900">ASPECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted grid for smaller screens */}
          {featuredItems.map((item, index) => (
            <Link
              key={index}
              href={`/categories/${encodeURIComponent(item.category)}`}
              className="block bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative w-full h-60">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.name}
                  fill // Changed to fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-outfit font-bold tracking-wide">{item.name}</p>
                </div>
              </div>
              <div className="p-4 text-gray-700 text-sm">
                <p>And... more</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-12 bg-white max-w-7xl mx-auto">
        <div className="md:w-1/2 relative">
          <Image
            src="/images/showcase.jpg"
            alt="Showcase"
            width={1200}
            height={700}
            className="w-full shadow-xl transform hover:scale-[1.01] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="md:w-1/2 text-center md:text-center">
          <h3 className="text-3xl md:text-3xl font-outfit mb-6 text-gray-900 leading-tight">
            Designed to be undone
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            "A whisper, if you're listening."
          </p>
          {/* Link the "Jetzt entdecken" button to the main categories page */}
          <Link
            href="/categories"
            className="inline-block bg-gray-900 text-white px-6 py-3 tracking-wide hover:bg-gray-700 transition-colors duration-300 shadow-md"
          >
            DISCOVER
          </Link>
        </div>
      </section>

      {/* Media Clips Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16 max-w-7xl mx-auto">
        {mediaClips.map((clip, index) => (
          <div key={index} className="text-center bg-white shadow-lg p-6 flex flex-col items-center">
            {clip.type === "video" ? (
              <video src={`/videos/${clip.src}`} controls className="w-full h-auto shadow-md mb-4"></video>
            ) : (
              <Image
                src={`/images/${clip.src}`}
                alt={clip.caption}
                width={800}
                height={450}
                className="w-full h-auto object-cover shadow-md mb-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <p className="mt-2 text-lg font-medium text-gray-800">{clip.caption}</p>
          </div>
        ))}
      </section>
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}