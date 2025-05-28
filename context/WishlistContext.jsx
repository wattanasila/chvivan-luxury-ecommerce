// context/WishlistContext.jsx
"use client"; // This context provider needs to be client-side

import React, { createContext, useContext, useState, useEffect } from 'react';
// In JavaScript, you won't import types directly from your data file.
// The 'Product' type was a TypeScript construct.

// Create the context with a default value of undefined.
// In JavaScript, you don't provide a generic type to createContext.
const WishlistContext = createContext(undefined);

// No need for 'interface WishlistProviderProps' in JavaScript.
export function WishlistProvider({ children }) {
  // Initialize state with data from localStorage, or an empty array
  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window !== 'undefined') { // Ensure localStorage is available (browser environment)
      const savedWishlist = localStorage.getItem('galerieWishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  // Effect to save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('galerieWishlist', JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  // Removed the 'product: Product' type annotation
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Prevent adding duplicates
      if (!prevItems.some((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  // Removed the 'productId: string' type annotation
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to use the wishlist context
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}