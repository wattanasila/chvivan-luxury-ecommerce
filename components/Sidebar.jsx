// components/Sidebar.jsx
"use client";

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const [isXClicked, setIsXClicked] = useState(false); // New state for X icon click animation

  // If the sidebar is not open, don't render it
  if (!isOpen) return null;

  const handleCloseClick = () => {
    setIsXClicked(true); // Trigger rotation
    // After a short delay, call onClose to allow animation to play
    setTimeout(() => {
      onClose();
      setIsXClicked(false); // Reset state for next open
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <>
      {/* Overlay for background blur/darken and closing on click outside */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleCloseClick} // Call handleCloseClick on overlay click too
      ></div>

      {/* Sidebar content */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white text-neutral-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="p-6">
          {/* Close button for sidebar */}
          <button
            onClick={handleCloseClick} // Use the new handler
            className="absolute top-4 right-4 text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="Close menu"
          >
            <X
              size={20}
              className={`transition-transform duration-300 ${isXClicked ? 'rotate-90' : 'rotate-0'}`} // Apply rotation here
            />
          </button>

          {/* Sidebar Menu Links */}
          <nav className="mt-12 flex flex-col space-y-6">
            <Link href="/online" onClick={handleCloseClick} className="hover:text-neutral-700 transition-colors">
              Online
            </Link>
            <Link href="/new" onClick={handleCloseClick} className="hover:text-neutral-700 transition-colors">
              New
            </Link>
            <Link href="/chvivan-view" onClick={handleCloseClick} className="hover:text-neutral-700 transition-colors">
              View of CHVIVAN
            </Link>
          </nav>

          {/* Sidebar Footer with Instagram Link */}
          <div className="absolute bottom-6 left-0 w-full text-center px-6">
            <Link
              href="https://www.instagram.com/chvivanofficial"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseClick}
              className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Instagram size={20} className="mr-2" />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}