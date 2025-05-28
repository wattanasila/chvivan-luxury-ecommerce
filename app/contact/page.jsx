// app/contact/page.tsx
import React from 'react';


export const metadata = {
  title: 'Kontakt - Galerie',
  description: 'Kontaktieren Sie uns für Fragen oder Anliegen.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 font-outfit">Kontakt</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Wir sind hier, um Ihnen zu helfen! Wenn Sie Fragen zu unseren Produkten, Ihrer Bestellung oder anderen Anliegen haben, zögern Sie bitte nicht, uns zu kontaktieren.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-xl font-semibold text-gray-800 mb-4">So erreichen Sie uns:</p>
          <ul className="text-gray-700 text-left space-y-4">
            <li>
              <strong>E-Mail:</strong> <a href="mailto:info@galerie.de" className="text-blue-600 hover:underline">info@galerie.de</a>
            </li>
            <li>
              <strong>Telefon:</strong> <a href="tel:+49123456789" className="text-blue-600 hover:underline">+49 123 456789</a>
            </li>
            <li>
              <strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt, Deutschland
            </li>
          </ul>
        </div>

        <p className="text-gray-600">
          Unser Kundenservice ist Montag bis Freitag von 9:00 bis 17:00 Uhr erreichbar.
        </p>
      </div>
    </div>
  );
}