// components/Navbar.jsx
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Search Icon */}
        <div className="w-6 h-6">
          <img src="/icons/search.svg" alt="Search" />
        </div>

        {/* Center: Logo */}
        <div className={`text-2xl font-serif tracking-wider transition duration-300 ${scrolled ? 'text-white brightness-125' : 'text-white'}`}>
          CHVIVAN
        </div>

        {/* Right: Icons */}
        <div className="flex space-x-4">
          <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
          <img src="/icons/bag.svg" alt="Bag" className="w-6 h-6" />
          <img src="/icons/menu.svg" alt="Menu" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}