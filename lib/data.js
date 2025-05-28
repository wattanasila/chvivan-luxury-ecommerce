// lib/data.js
// In JavaScript, you define your data structure implicitly through the objects.
// The "Product" interface is a TypeScript concept and can be removed.

export const products = [
  // Bags
  {
    id: 'b001',
    name: 'Gemütliches Ecksofa',
    category: 'bag', // Keep categories as strings for filtering
    image: 'bag1.jpg',
    images: ['bag1.jpg', 'bag1_detail.jpg', 'bag1_side.jpg'], // Example additional images for b001
    price: '',
    description: 'Ein geräumiges Ecksofa für maximalen Komfort. Perfekt für Familienabende und Entspannung.',
  },
  { id: 'b002', name: 'Modernes 2-Sitzer Bag', category: 'bag', image: 'bag2.jpg', images: ['bag2.jpg'], price: '', description: 'Kompaktes Bag, ideal für kleine Wohnungen und stilvolle Akzente.' },
  { id: 'b003', name: 'Leder Chaiselongue', category: 'bag', image: 'bag3.jpg', images: ['bag3.jpg'], price: '', description: 'Elegante Chaiselongue aus hochwertigem Leder für luxuriöse Entspannung.' },
  { id: 'b004', name: 'Schlafsofa "Stadtwohnung"', category: 'bag', image: 'bag4.jpg', images: ['bag4.jpg'], price: '', description: 'Vielseitiges Schlafsofa für Gäste oder als flexible Lösung im Stadtraum.' },
  { id: 'b005', name: 'Samtsofa "Luxus"', category: 'bag', image: 'bag5.jpg', images: ['bag5.jpg'], price: '', description: 'Weiches Samtsofa mit glamourösem Touch, das jedem Raum Eleganz verleiht.' },
  { id: 'b006', name: 'Modular Bag System', category: 'bag', image: 'bag6.jpg', images: ['bag6.jpg'], price: '', description: 'Anpassbares Sofa-System für jede Raumgröße und individuelle Gestaltung.' },

  // Caps
  {
    id: 'c001',
    name: 'Stehlampe "Skandinavien"',
    category: 'cap',
    image: 'cap1.jpg',
    images: ['cap1.jpg', 'cap1_side.jpg', 'cap1_on.jpg'], // Example additional images for l001
    price: '',
    description: 'Minimalistische Stehlampe für warmes, diffuses Licht, ideal für eine gemütliche Atmosphäre.',
  },
  { id: 'c002', name: 'Deckenleuchte "Industrie"', category: 'cap', image: 'cap2.jpg', images: ['cap2.jpg'], price: '', description: 'Robuste Deckenleuchte im Industriestil, perfekt für Lofts und moderne Einrichtungen.' },
  { id: 'c003', name: 'Tischlampe "Vintage"', category: 'cap', image: 'cap3.jpg', images: ['cap3.jpg'], price: '', description: 'Kleine Tischlampe mit Retro-Charme, ein Blickfang auf jedem Schreibtisch.' },
  { id: 'c004', name: 'LED-Strip Lichtset', category: 'cap', image: 'cap4.jpg', images: ['cap4.jpg'], price: '', description: 'Flexible LED-Streifen für indirekte Beleuchtung und individuelle Akzente.' },
  { id: 'c005', name: 'Kronleuchter "Glamour"', category: 'cap', image: 'cap5.jpg', images: ['cap5.jpg'], price: '', description: 'Prächtiger Kronleuchter für elegante Räume und festliche Anlässe.' },
  { id: 'c006', name: 'Solar Gartenlampe', category: 'cap', image: 'cap6.jpg', images: ['cap6.jpg'], price: '', description: 'Umweltfreundliche Solarlampe für den Garten, sorgt abends für stimmungsvolle Beleuchtung.' },

  // T-shirts
  {
    id: 't001',
    name: 'Esstisch "Massivholz"',
    category: 't-shirts',
    image: 't-shirts1.jpg',
    images: ['t-shirts1.jpg', 't-shirts1_detail.jpg', 't-shirts1_room.jpg'], // Example additional images for t001
    price: '',
    description: 'Robuster Esstisch aus Eichenholz, der den Mittelpunkt jedes Essbereichs bildet.',
  },
  { id: 't002', name: 'Couchtisch "Glasplatte"', category: 't-shirts', image: 't-shirts2.jpg', images: ['t-shirts2.jpg'], price: '', description: 'Moderner Couchtisch mit eleganter Glasplatte, perfekt für das Wohnzimmer.' },
  { id: 't003', name: 'Schreibtisch "Homeoffice"', category: 't-shirts', image: 't-shirts3.jpg', images: ['t-shirts3.jpg'], price: '', description: 'Funktionaler Schreibtisch für produktives Arbeiten im Homeoffice.' },
  { id: 't004', name: 'Beistelltisch "Rund"', category: 't-shirts', image: 't-shirts4.jpg', images: ['t-shirts4.jpg'], price: '', description: 'Kleiner runder Beistelltisch für Getränke und Bücher, flexibel einsetzbar.' },
  { id: 't005', name: 'Ausziehtisch "Familie"', category: 't-shirts', image: 't-shirts5.jpg', images: ['t-shirts5.jpg'], price: '', description: 'Praktischer Tisch, der sich bei Bedarf vergrößern lässt, ideal für Familienfeste.' },
  { id: 't006', name: 'Terrassentisch "Alu"', category: 't-shirts', image: 't-shirts6.jpg', images: ['t-shirts6.jpg'], price: '', description: 'Wetterfester Tisch für den Außenbereich, robust und pflegeleicht.' },

  // Accessories
  {
    id: 'a001',
    name: 'Smart TV 65 Zoll 4K',
    category: 'accessory',
    image: 'accessory1.jpg',
    images: ['accessory1.jpg', 'accessory1_on.jpg', 'accessory1_side.jpg'], // Example additional images for f001
    price: '',
    description: 'Großer 4K Smart TV mit hervorragender Bildqualität und intelligenten Funktionen.',
  },
  { id: 'f002', name: 'OLED TV 55 Zoll', category: 'accessory', image: 'accessory2.jpg', images: ['accessory2.jpg'], price: '', description: 'Top-Qualität OLED TV mit tiefem Schwarz und lebendigen Farben für ein beeindruckendes Seherlebnis.' },
  { id: 'f003', name: 'Compact TV 32 Zoll', category: 'accessory', image: 'accessory3.jpg', images: ['accessory3.jpg'], price: '', description: 'Kleiner Fernseher für Schlafzimmer oder Küche, ideal für kompakte Räume.' },
  { id: 'f004', name: 'QLED TV 75 Zoll', category: 'accessory', image: 'accessory4.jpg', images: ['accessory4.jpg'], price: '', description: 'Riesiger QLED TV für das ultimative Heimkinoerlebnis mit brillanten Farben.' },
  { id: 'f005', name: 'Tragbarer Mini Beamer', category: 'accessory', image: 'accessory5.jpg', images: ['accessory5.jpg'], price: '', description: 'Kompakter Beamer für unterwegs, ideal für Filmabende im Freien oder Präsentationen.' },
  { id: 'f006', name: 'Soundbar mit Subwoofer', category: 'accessory', image: 'accessory6.jpg', images: ['accessory6.jpg'], price: '', description: 'Ergänzung für besseren TV-Sound, liefert satten Klang für Filme und Musik.' },
];

// Helper functions to get data
export const getProductsByCategory = (category) => { // Removed type annotation
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => { // Removed type annotation
  return products.find(product => product.id === id);
};

export const searchProducts = (query) => { // Removed type annotation
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.description.toLowerCase().includes(lowerCaseQuery) ||
    product.id.toLowerCase().includes(lowerCaseQuery)
  );
};