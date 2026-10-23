import { ProductCategory, FeaturedProduct, RepairService, TrustPillar } from '../types';

import heroImg from '../assets/images/hero_smartphone_accessories_1792678939398.jpg';
import catSmartphonesImg from '../assets/images/cat_smartphones_1792678940316.jpg';
import catAccessoriesImg from '../assets/images/cat_mobile_accessories_1792678941652.jpg';
import catChargersImg from '../assets/images/cat_chargers_cables_1792678943095.jpg';
import catAudioImg from '../assets/images/cat_earphones_audio_1792678941453.jpg';
import prodPowerBankImg from '../assets/images/prod_power_bank_1792678963601.jpg';
import prodTemperedGlassImg from '../assets/images/prod_tempered_glass_1792678965972.jpg';
import prodBluetoothSpeakerImg from '../assets/images/prod_bluetooth_speaker_1792678965857.jpg';
import prodPhoneStandImg from '../assets/images/prod_phone_stand_1792678964916.jpg';

export const BUSINESS_INFO = {
  name: 'Junaid Telecom / Mobile',
  shortName: 'Junaid Telecom',
  tagline: 'Everything Your Smartphone Needs.',
  subtext: 'Discover mobile essentials, stylish accessories and helpful repair services — all in one place.',
  phone: '0345 7599995',
  phoneFormatted: '0345-7599995',
  phoneInternational: '+92 345 7599995',
  telUrl: 'tel:+923457599995',
  whatsappNumber: '923457599995',
  defaultWhatsappMsg: 'Hello Junaid Telecom, I would like to inquire about your products and services.',
  address: 'Madrasa Banat Road, Jhang–Chiniot Road, Chiniot, Pakistan',
  city: 'Chiniot',
  province: 'Punjab, Pakistan',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Junaid+Telecom+Mobile+Madrasa+Banat+Road+Jhang-Chiniot+Road+Chiniot+Pakistan',
  rating: {
    score: '5.0',
    totalReviews: 172,
    source: 'Google Reviews',
    note: 'Demo presentation verified score from public listing'
  },
  openingHours: 'Monday – Sunday: 10:00 AM – 10:00 PM',
  demoNotice: 'Illustrative presentation designed for store showcase. Final inventory and pricing to be verified with store management.'
};

export const HERO_IMAGE = heroImg;

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'smartphones',
    title: 'Smartphones',
    description: 'Latest new and pre-owned smartphones from leading global brands with device testing assistance.',
    image: catSmartphonesImg,
    badge: 'Mobile Showcase',
    itemCount: 'In-Store Models'
  },
  {
    id: 'accessories',
    title: 'Mobile Accessories',
    description: 'Precision-fit shockproof phone cases, camera lens covers, and ergonomic daily desk stands.',
    image: catAccessoriesImg,
    badge: 'Protection & Style',
    itemCount: 'Wide Selection'
  },
  {
    id: 'chargers',
    title: 'Chargers & Cables',
    description: 'High-speed GaN fast adapters, rugged braided Type-C & Lightning cables for fast power delivery.',
    image: catChargersImg,
    badge: 'Fast Power Delivery',
    itemCount: 'Universal Fit'
  },
  {
    id: 'audio',
    title: 'Earphones & Audio',
    description: 'True wireless Bluetooth earbuds with deep bass, high clarity microphones, and portable sound.',
    image: catAudioImg,
    badge: 'Wireless Sound',
    itemCount: 'High Fidelity'
  }
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'wireless-earbuds',
    name: 'Wireless Earbuds',
    category: 'Earphones & Audio',
    categoryFilter: 'audio',
    description: 'Ergonomic noise-isolating Bluetooth earbuds with high-clarity microphones and pocket charging case.',
    image: catAudioImg,
    highlight: 'Active ENC / Deep Bass',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about the Wireless Earbuds availability and price.'
  },
  {
    id: 'fast-charging-adapter',
    name: 'Fast Charging Adapter',
    category: 'Chargers & Cables',
    categoryFilter: 'chargers',
    description: 'Compact high-wattage GaN wall charger with dual output ports and intelligent temperature protection.',
    image: catChargersImg,
    highlight: '65W GaN Fast Charging',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about the Fast Charging Adapter availability and price.'
  },
  {
    id: 'usb-charging-cable',
    name: 'USB Charging Cable',
    category: 'Chargers & Cables',
    categoryFilter: 'chargers',
    description: 'Heavy-duty braided nylon USB-C to USB-C cable engineered for rapid power sync and long lifespan.',
    image: catChargersImg,
    highlight: 'Tangle-Free 100W PD Support',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about the USB Charging Cable options and price.'
  },
  {
    id: 'protective-phone-case',
    name: 'Protective Phone Case',
    category: 'Mobile Accessories',
    categoryFilter: 'cases',
    description: 'Matte silicone and hybrid armor cases with raised camera lip and shock-absorbing bumper edges.',
    image: catAccessoriesImg,
    highlight: 'Military Drop Tested Look',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about Protective Phone Cases for my phone model.'
  },
  {
    id: 'tempered-glass-protector',
    name: 'Tempered Glass Protector',
    category: 'Mobile Accessories',
    categoryFilter: 'accessories',
    description: 'Ultra-thin 9H hardness tempered glass with oleophobic anti-fingerprint coating and edge-to-edge guard.',
    image: prodTemperedGlassImg,
    highlight: '9H Scratch Resistance',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about Tempered Glass Protectors for my phone.'
  },
  {
    id: 'power-bank',
    name: 'Power Bank',
    category: 'Chargers & Power',
    categoryFilter: 'power',
    description: 'High-capacity 20000mAh slim portable power bank with digital LED battery percentage readout.',
    image: prodPowerBankImg,
    highlight: '20,000mAh Fast Dual Output',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about Power Bank models and prices.'
  },
  {
    id: 'bluetooth-speaker',
    name: 'Bluetooth Speaker',
    category: 'Earphones & Audio',
    categoryFilter: 'audio',
    description: 'Compact rugged outdoor wireless speaker with rich 360-degree sound and all-day playtime.',
    image: prodBluetoothSpeakerImg,
    highlight: 'Water-Resistant / Rich Bass',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about Bluetooth Speaker models and price.'
  },
  {
    id: 'mobile-phone-stand',
    name: 'Mobile Phone Stand',
    category: 'Mobile Accessories',
    categoryFilter: 'accessories',
    description: 'Full-aluminum multi-angle adjustable desk stand for video calls, desktop charging, and gaming.',
    image: prodPhoneStandImg,
    highlight: 'Solid Aluminum / Foldable',
    whatsappMessage: 'Hello Junaid Telecom, I would like to inquire about the Mobile Phone Stand price.'
  }
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'screen-display',
    title: 'Screen and Display Repair',
    description: 'Quality replacement services for cracked screens, bleeding LCD/OLED panels, and unresponsive touch digitizers.',
    turnaround: 'Same-day or next-day turnaround upon inspection',
    icon: 'Smartphone',
    features: [
      'Original & premium replacement screens',
      'Touch calibration and sensitivity check',
      'Clear display clarity restoration'
    ]
  },
  {
    id: 'charging-battery',
    title: 'Charging and Battery Issues',
    description: 'Remedy fast battery drain, unexpected phone shutdowns, loose charging connectors, and overheating problems.',
    turnaround: 'Rapid in-store diagnostic testing',
    icon: 'BatteryCharging',
    features: [
      'Battery health diagnostics',
      'Type-C & micro-USB charging port repair',
      'Safe voltage testing and component cleaning'
    ]
  },
  {
    id: 'software-troubleshoot',
    title: 'Software Troubleshooting',
    description: 'Professional assistance for boot loops, system slow-downs, data backup & transfer, and phone firmware restores.',
    turnaround: 'Assistance by experienced technicians',
    icon: 'Cpu',
    features: [
      'Official firmware updates & restoration',
      'Safe phone-to-phone data transfer',
      'App crashing and storage cleanup assistance'
    ]
  }
];

export const WHY_CHOOSE_US: TrustPillar[] = [
  {
    title: 'Mobile Essentials in One Place',
    description: 'From the latest mobile devices to protective glass and everyday chargers, find what you need locally in Chiniot.',
    icon: 'Layers'
  },
  {
    title: 'Accessories for Everyday Use',
    description: 'Hand-picked durable cases, cables, adapters, and audio gear tested for everyday Pakistani usage.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Helpful Customer Service',
    description: 'Friendly, honest advice on phone issues, compatible accessories, and personalized repair assistance.',
    icon: 'Headphones'
  },
  {
    title: 'Convenient Local Contact',
    description: 'Centrally located on Madrasa Banat Road, Jhang–Chiniot Road, with immediate WhatsApp and phone access.',
    icon: 'MapPin'
  }
];

export function createWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || BUSINESS_INFO.defaultWhatsappMsg;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
