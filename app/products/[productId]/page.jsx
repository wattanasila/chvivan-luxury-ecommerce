import { notFound } from 'next/navigation';
// Removed 'Product' from import, as it's a TypeScript type.
import { products, getProductById } from '../../../lib/data'; // Adjust path as necessary
import ProductClientPage from './ProductClientPage'; // Import the new client component

// This function runs on the server at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

// Removed interface ProductPageProps as it's TypeScript specific.
// The 'params' object will still be available via destructuring in JavaScript.
// This is a Server Component responsible for fetching data and passing it to the client component
export default function ProductServerPage({ params }) { // Removed type annotation for params
  const { productId } = params;
  // Removed type annotation for product.
  const product = getProductById(productId); // Fetch data on the server

  if (!product) {
    notFound(); // Display 404 if product is not found
  }

  // Pass the product data as props to the Client Component
  return <ProductClientPage product={product} />;
}