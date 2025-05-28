'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero.png" // Replace with your image path
        alt="Campagn Highlight"
        className="w-full h-full object-cover"
      />

      {/* Overlay for subtle dark fade (optional) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Explore Button */}
      <div className="absolute inset-0 flex items-end justify-center pb-16">
        <Link
          href="/categories"
          className="px-4 py-1 bg-white text-gray-300 text-sm uppercase tracking-wider cursor-pointer hover:opacity-75 transition duration-300">
          BROWSE
        </Link>
      </div>
    </section>
  );
}