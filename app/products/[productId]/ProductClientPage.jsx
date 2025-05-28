// app/products/[productId]/ProductClientPage.jsx
"use client"; // This component needs to be client-side

// Removed 'Product' type import, as it's a TypeScript construct.
import { useWishlist } from '../../../context/WishlistContext';
import { useState, useMemo } from 'react'; // Import useMemo

// Import react-image-gallery and its CSS
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Don't forget to import the styles!

// Removed interface ProductClientPageProps as it's TypeScript specific.
export default function ProductClientPage({ product }) { // Removed type annotation for product
  const { addToWishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Prepare images for react-image-gallery
  // It expects an array of objects with 'original' and 'thumbnail' properties
  const galleryImages = useMemo(() => {
    if (!product.images || product.images.length === 0) {
      return [];
    }
    return product.images.map(imageName => ({
      original: `/images/${imageName}`, // Full size image
      thumbnail: `/images/${imageName}`, // Thumbnail (can be a smaller version if you have them)
      originalAlt: product.name,
      thumbnailAlt: product.name,
      // Optional: Add other properties like 'description' if needed
      // description: 'Description for this image',
    }));
  }, [product.images, product.name]); // Re-memoize if images or name changes

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0 relative w-full md:w-1/2"> {/* Removed fixed height and md:h-auto for gallery */}
          {galleryImages.length > 0 ? (
            <ImageGallery
              items={galleryImages}
              showPlayButton={false} // Hide autoplay button
              showFullscreenButton={true} // Show fullscreen button (important for zoom)
              showNav={true} // Show next/prev navigation arrows
              showBullets={false} // Hide pagination dots
              showThumbnails={true} // Show image thumbnails below
              // You can add more props for customization:
              // thumbnailPosition="bottom" // or 'left', 'right'
              // lazyLoad={true} // Enable lazy loading for images
              // useBrowserFullscreen={true} // Use browser's native fullscreen
              // enableZoom={true} // This prop typically enables internal zoom on hover/pinch in fullscreen
            />
          ) : (
            <div className="flex items-center justify-center w-full h-80 bg-gray-200 text-gray-500">
              <p>No images available</p>
            </div>
          )}
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-outfit font-bold text-gray-900 mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Product ID: <span className="font-outfit">{product.id}</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          {/* Remove mt-auto from this div */}
          <div className=""> {/* Changed from className="mt-auto" to className="" or just remove it */}
            <p className="text-gray-600 text-sm mb-2">Category: <span className="font-medium">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></p>

            <button
              onClick={handleAddToWishlist}
              className="bg-gray-900 text-white px-6 py-3 font-medium text-lg tracking-wide hover:bg-gray-700 transition-colors duration-300 shadow-md"
            >
              Add to watchlist
            </button>

            {isAdded && (
              <p className="text-green-600 text-sm mt-2 animate-fadeIn">
                Product added to wishlist!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}