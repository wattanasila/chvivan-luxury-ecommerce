import "../styles/globals.css";
import Navbar from "../components/Navbar";

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
      </body>
    </html>
  );
}