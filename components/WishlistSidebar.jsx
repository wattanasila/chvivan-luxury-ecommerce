// components/WishlistSidebar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Mail } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistSidebar() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // New state for client-side rendering

  useEffect(() => {
    setHasMounted(true); // Set to true once component mounts on client
    // Optional: Open sidebar briefly when an item is added
    if (wishlistItems.length > 0 && !isOpen) {
      // setIsOpen(true); // Uncomment if you want it to pop open when items are added
    }
  }, [wishlistItems.length, isOpen]);

  const handleSendInquiry = () => {
    if (wishlistItems.length === 0) {
      alert("Ihre Merkliste ist leer. Bitte fügen Sie Produkte hinzu, bevor Sie eine Anfrage senden.");
      return;
    }

    const recipientEmail = "anfrage@galerie.de";
    const subject = encodeURIComponent("Produktanfrage von Ihrer Merkliste");
    const body = encodeURIComponent(
      `Hallo Galerie Team,\n\nich interessiere mich für die folgenden Produkte von Ihrer Website:\n\n` +
      wishlistItems.map((item) => `- ${item.name} (ID: ${item.id}, Kategorie: ${item.category}, Preis: ${item.price})`).join('\n') +
      `\n\nBitte senden Sie mir weitere Informationen zu diesen Artikeln oder kontaktieren Sie mich, um meine Anfrage zu besprechen.\n\n` +
      `Vielen Dank,\n[Ihr Name]\n[Ihre Kontaktdaten]`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    clearWishlist();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button to open sidebar (e.g., shopping cart icon) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-colors duration-300 z-40 flex items-center justify-center space-x-2"
        aria-label="Merkliste öffnen"
      >
        <Mail className="w-6 h-6" />
        {/* Render the counter span ONLY if the component has mounted on the client */}
        {hasMounted && wishlistItems.length > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1">
            {wishlistItems.length}
          </span>
        )}
      </button>


      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-outfit font-bold text-gray-900">Ihre Merkliste</h2>
            <button onClick={() => setIsOpen(false)} aria-label="Merkliste schließen" className="text-gray-600 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          {wishlistItems.length === 0 ? (
            <p className="text-gray-600 text-center mt-8">Ihre Merkliste ist leer.</p>
          ) : (
            <>
              <ul className="flex-grow overflow-y-auto space-y-4 pr-2">
                {wishlistItems.map((item) => (
                  <li key={item.id} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                    <div className="relative w-16 h-16 flex-shrink-0 mr-4 rounded-md overflow-hidden">
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-grow">
                      <Link href={`/products/${item.id}`} onClick={() => setIsOpen(false)} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600">ID: {item.id}</p>
                      <p className="text-sm text-gray-600">Kategorie: {item.category}</p>
                      <p className="text-md font-bold text-gray-700 mt-1">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="ml-4 p-2 text-red-600 hover:text-red-800 transition-colors"
                      aria-label={`Produkt ${item.name} von Merkliste entfernen`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  onClick={handleSendInquiry}
                  className="bg-gray-900 text-white py-2 rounded-lg font-medium text-lg hover:bg-gray-700 transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send request ({wishlistItems.length})</span>
                </button>
                <button
                  onClick={clearWishlist}
                  className="bg-red-500 text-white py-2 rounded-lg font-medium text-md hover:bg-red-600 transition-colors duration-300"
                >
                  Clear watchlist
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}