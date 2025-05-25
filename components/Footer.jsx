"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Explore Section */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-neutral-700 transition">Our services</Link></li>
            <li><Link href="/orders" className="hover:text-neutral-700 transition">My Orders</Link></li>
            <li><Link href="/contact" className="hover:text-neutral-700 transition">Contact</Link></li>
            <li><Link href="/about" className="hover:text-neutral-700 transition">About CHVIVAN</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-cookies" className="hover:text-neutral-700 transition">Privacy & Cookies</Link></li>
            <li><Link href="/terms" className="hover:text-neutral-700 transition">Terms of Use</Link></li>
            <li><Link href="/imprint" className="hover:text-neutral-700 transition">Imprint</Link></li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h4 className="font-semibold mb-2">Languages</h4>
          <ul className="space-y-2 text-sm">
            <li><button className="hover:text-neutral-700 transition">English (EN)</button></li>
            <li><button className="hover:text-neutral-700 transition">Deutsch (DE)</button></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition">Pinterest</a></li>
            <li><Link href="/newsletter" className="hover:text-neutral-700 transition">Newsletter</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 ml-6 text-justify text-sm text-neutral-300">
        © {new Date().getFullYear()} CHVIVAN. All rights reserved.
      </div>
    </footer>
  );
}
