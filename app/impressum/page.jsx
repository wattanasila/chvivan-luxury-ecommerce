// app/impressum/page.jsx  <-- Changed from .tsx to .jsx
import React from 'react';

export const metadata = {
  title: 'Impressum - Galerie',
  description: 'Rechtliche Hinweise und Anbieterinformationen der Galerie.',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 font-outfit">Impressum</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Angaben gemäß § 5 TMG:</h2>
        <p className="text-gray-700 mb-2">
          Galerie GmbH
        </p>
        <p className="text-gray-700 mb-2">
          Musterstraße 123
        </p>
        <p className="text-gray-700 mb-4">
          12345 Musterstadt
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Vertreten durch:</h2>
        <p className="text-gray-700 mb-4">
          Geschäftsführer: Max Mustermann
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Kontakt:</h2>
        <p className="text-gray-700 mb-2">
          Telefon: <a href="tel:+49123456789" className="text-blue-600 hover:underline">+49 123 456 789</a>
        </p>
        <p className="text-gray-700 mb-2">
          Telefax: +49 123 456 780
        </p>
        <p className="text-gray-700 mb-4">
          E-Mail: <a href="mailto:info@galerie.de" className="text-blue-600 hover:underline">info@galerie.de</a>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Registereintrag:</h2>
        <p className="text-gray-700 mb-2">
          Eintragung im Handelsregister.
        </p>
        <p className="text-gray-700 mb-4">
          Registergericht: Amtsgericht Musterstadt
        </p>
        <p className="text-gray-700 mb-4">
          Registernummer: HRB 12345
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Umsatzsteuer-ID:</h2>
        <p className="text-gray-700 mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Streitschlichtung:</h2>
        <p className="text-gray-700 mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbebeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br/> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p className="text-gray-700">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        {/* Disclaimer: You should fill this with real legal information relevant to your company */}
      </div>
    </div>
  );
}