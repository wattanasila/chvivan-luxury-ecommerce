// app/page.jsx

// You don't need to import Navbar and Footer here, as they are handled by layout.jsx
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import Hero from "../components/Hero"; // Import your Hero component
import Showcase from "../components/Showcase"; // Import your Showcase component

export default function Home() {
  return (
    <>
      <Hero />      {/* Render the Hero component */}
      <Showcase />  {/* Render the Showcase component */}
      {/* Any other homepage specific content goes here */}
    </>
  );
}