import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WishlistSidebar from '../components/WishlistSidebar';
import { WishlistProvider } from '../context/WishlistContext';

export const metadata = {
  title: "CHVIVAN",
  description: "Luxury e-commerce for modern minimalism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />{/* Remove the extra newline here */}
      <body className="bg-white text-neutral-900 font-sans flex flex-col min-h-screen">
        <WishlistProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <WishlistSidebar />
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}