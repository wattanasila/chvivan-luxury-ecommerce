// app/contact/page.jsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Kontakt - Galerie', // Changed title
  description: 'Kontaktieren Sie uns für Fragen und Support bei Galerie.', // Changed description
};

export default function ContactPage() { // Changed function name to ContactPage
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 font-outfit">Kontaktieren Sie Uns</h1> {/* Changed heading */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Wir sind hier, um Ihnen zu helfen! Wenn Sie Fragen zu unseren Produkten, Ihrer Bestellung oder irgendetwas anderem haben, zögern Sie bitte nicht, uns zu kontaktieren.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Sie können uns direkt per E-Mail erreichen oder uns anrufen. Wir bemühen uns, alle Anfragen so schnell wie möglich zu beantworten.
        </p>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-800 mb-4">E-Mail:</p>
          <a href="mailto:info@galerie.de" className="text-blue-600 hover:underline text-lg">info@galerie.de</a>
          <p className="text-xl font-semibold text-gray-800 mt-6 mb-4">Telefon:</p>
          <a href="tel:+49123456789" className="text-blue-600 hover:underline text-lg">+49 123 456789</a>
          <p className="text-gray-600 mt-8">
            Möchten Sie mehr über uns erfahren? Besuchen Sie unsere <Link href="/about" className="text-blue-600 hover:underline">Über Uns Seite</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}