// components/Navbar.jsx
"use client";

import { useEffect, useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, 
  []);

  return (
    <header className="w-full bg-white shadow-sm">
  <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center">
    <div className="w-1/3" />

    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl font-semibold tracking-widest text-neutral-900">
        CHVIVAN
      </h1>
    </div>

    <div className="w-1/3 flex items-center justify-end space-x-4 text-neutral-400">
      <Search className="w-5 h-5 cursor-pointer hover:text-white" />
      <User className="w-5 h-5 cursor-pointer hover:text-white" />
      <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-white" />
      <Menu className="w-6 h-6 cursor-pointer hover:text-white" />
    </div>
  </nav>
</header>
  );
}