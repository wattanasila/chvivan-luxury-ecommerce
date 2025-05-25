import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CHVIVAN",
  description: "Luxury e-commerce for modern minimalism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head />
      <body className="bg-white text-neutral-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}