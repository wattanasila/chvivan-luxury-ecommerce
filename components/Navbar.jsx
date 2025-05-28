// components/Navbar.jsx
"use client";

import { useEffect, useState } from 'react';
import { Search, HeartPlus, Contact, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Sidebar from './Sidebar'; // <--- IMPORT THE NEW SIDEBAR COMPONENT

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverState, setHoverState] = useState('default');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // <--- NEW STATE FOR SIDEBAR
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Dynamic Class Logic ---
  const navbarBgClass = hoverState === 'logoHovered' ? 'bg-neutral-900' : 'bg-white';
  const logoTextColorClass = hoverState === 'logoHovered' ? 'text-white' : 'text-neutral-900';
  const iconBaseColorClass = hoverState === 'logoHovered' ? 'text-white' : 'text-neutral-400';

  const getIconClass = (iconName) => {
    return `${iconBaseColorClass} w-4 h-4 cursor-pointer hover:text-neutral-700 transition-colors duration-200`;
  };

  // --- Search Functionality ---
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className={`w-full ${navbarBgClass} transition-colors duration-300 z-50 sticky top-0`}>
      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Search Icon or Input */}
        <div className="flex items-center">
          {!isSearchOpen ? (
            <Search
              className={getIconClass('Search')}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search input"
            />
          ) : (
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="p-1 border-b border-neutral-400 focus:border-neutral-900 outline-none bg-transparent text-sm"
                autoFocus
                onBlur={() => {
                  setTimeout(() => {
                    if (!searchTerm.trim()) {
                      setIsSearchOpen(false);
                    }
                  }, 100);
                }}
              />
              <X
                className="w-4 h-4 text-neutral-400 ml-2 cursor-pointer hover:text-neutral-700"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchTerm('');
                }}
                aria-label="Close search input"
              />
            </form>
          )}
        </div>

        {/* Center: Logo */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onMouseEnter={() => setHoverState('logoHovered')}
          onMouseLeave={() => setHoverState('default')}
        >
          <Link href="/" className={`text-4xl font-logo tracking-widest cursor-pointer ${logoTextColorClass} transition-colors duration-300`}>
            CHVIVAN
          </Link>
        </div>

        {/* Right Side: HeartPlus, Contact, Menu Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/categories" passHref>
            <HeartPlus
              className={getIconClass('HeartPlus')}
              aria-label="View categories"
            />
          </Link>

          <Link href="/contact" passHref>
            <Contact
              className={getIconClass('Contact')}
              aria-label="Contact us"
            />
          </Link>

          <Menu
            className={getIconClass('Menu')}
            onClick={() => setIsSidebarOpen(true)} // <--- TOGGLE SIDEBAR OPEN
            aria-label="Open navigation menu"
          />
        </div>
      </nav>

      {/* Render the Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> {/* <--- ADD THIS */}
    </header>
  );
}