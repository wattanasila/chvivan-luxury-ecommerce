<<<<<<< HEAD
// components/Navbar.jsx
"use client";

import { useEffect, useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // State to manage the overall hover effect:
  // 'default': Navbar is white, icons are neutral-400
  // 'logoHovered': Navbar is black, logo/icons are white
  // 'iconHovered': Navbar is white, specific icon is neutral-700
  const [hoverState, setHoverState] = useState('default');

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

  // Base color for icons when not specifically hovered
  const iconBaseColorClass = hoverState === 'logoHovered' ? 'text-white' : 'text-neutral-400';

  // Function to get the class for an individual icon
  // This logic is slightly more complex as it depends on whether THIS icon is hovered AND the general state
  const getIconClass = (iconName) => {
    // If the overall state is 'logoHovered', icons are white by default, and we don't apply individual hover.
    // However, if an icon *itself* is hovered (which will set hoverState to 'iconHovered'),
    // then that specific icon needs to turn neutral-700.
    // This is handled by React's re-render on hoverState change.
    
    // Default color based on current overall state
    let baseClass = iconBaseColorClass;

    // We don't apply direct Tailwind hover classes here,
    // as we're managing the hover state with JS
    return `${baseClass} w-4 h-4 cursor-pointer`;
  };

  return (
    <header className={`w-full ${navbarBgClass} transition-colors duration-300`}>
      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Search Icon */}
        <div className="flex items-center">
          <Search
            className={getIconClass('Search')}
            // On mouse enter an icon, if logo was hovered, revert navbar to default and show icon hover color
            onMouseEnter={() => setHoverState('iconHovered')}
            onMouseLeave={() => setHoverState('default')}
            style={hoverState === 'iconHovered' ? { color: 'rgb(82 82 82)' } : {}} // Apply neutral-700 if iconHovered
          />
        </div>

        {/* Center: Logo */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onMouseEnter={() => setHoverState('logoHovered')}
          onMouseLeave={() => {
            // Only revert to default if no icon is currently hovered
            if (hoverState === 'logoHovered') {
              setHoverState('default');
            }
          }}
        >
          <h1 className={`text-2xl font-logo tracking-widest cursor-pointer ${logoTextColorClass} transition-colors duration-300`}>
            CHVIVAN
          </h1>
        </div>

        {/* Right Side: ShoppingBag, User, Menu Icons */}
        <div className="flex items-center space-x-4">
          <ShoppingBag
            className={getIconClass('ShoppingBag')}
            onMouseEnter={() => setHoverState('iconHovered')}
            onMouseLeave={() => setHoverState('default')}
            style={hoverState === 'iconHovered' ? { color: 'rgb(82 82 82)' } : {}}
          />
          <User
            className={getIconClass('User')}
            onMouseEnter={() => setHoverState('iconHovered')}
            onMouseLeave={() => setHoverState('default')}
            style={hoverState === 'iconHovered' ? { color: 'rgb(82 82 82)' } : {}}
          />
          <Menu
            className={getIconClass('Menu')}
            onMouseEnter={() => setHoverState('iconHovered')}
            onMouseLeave={() => setHoverState('default')}
            style={hoverState === 'iconHovered' ? { color: 'rgb(82 82 82)' } : {}}
          />
        </div>
      </nav>
    </header>
  );
=======
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
>>>>>>> df442b3cd1a1dd989facdff7038f804362296ddb
}