/**
 * Site Constants & Configuration
 * 
 * This file contains all the configurable constants for the website.
 * Update these values to change site-wide information.
 */

// ==========================================
// COMPANY INFORMATION
// ==========================================

export const COMPANY = {
  name: 'AL IMTIYAZ',
  tagline: 'PROFESSIONAL SOLUTIONS',
  fullName: 'Punith Mithra',
  description: 'Complete kitchen and laundry solutions for residential and commercial projects. We specialize in workflow design, layout planning, equipment supply, and after-sales service.',
  taglineShort: 'Professional Kitchen & Laundry Solutions',
  
  // Logo/Branding
  logoInitials: 'AI',
  logoText: 'AL IMTIYAZ',
} as const;

// ==========================================
// CONTACT INFORMATION
// ==========================================

export const CONTACT = {
  phone: {
    display: '+968 1234 5678',
    link: 'tel:+96812345678',
  },
  email: {
    display: 'info@alimtiyaz.com',
    link: 'mailto:info@alimtiyaz.com',
  },
  address: {
    full: 'Muscat, Sultanate of Oman',
    city: 'Muscat',
    country: 'Sultanate of Oman',
  },
  workingHours: {
    display: 'Sun - Thu: 8:00 AM - 6:00 PM',
    days: 'Sunday - Thursday',
    hours: '8:00 AM - 6:00 PM',
  },
} as const;

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

export const SOCIAL_MEDIA = {
  linkedin: {
    url: '#',
    label: 'Visit our LinkedIn page',
  },
  facebook: {
    url: '#',
    label: 'Visit our Facebook page',
  },
  instagram: {
    url: '#',
    label: 'Visit our Instagram page',
  },
  twitter: {
    url: '#',
    label: 'Visit our Twitter page',
  },
} as const;

// ==========================================
// WEBSITE URLS
// ==========================================

export const SITE = {
  url: 'https://punith-mithra.github.io',
  domain: 'punith-mithra.github.io',
  githubRepo: 'https://github.com/Punith-Mithra/punith-mithra.github.io',
} as const;

// ==========================================
// SEO & META INFORMATION
// ==========================================

export const SEO_DEFAULTS = {
  siteName: 'Punith Mithra - Kitchen & Laundry Solutions',
  defaultTitle: 'Punith Mithra | Professional Kitchen & Laundry Solutions',
  defaultDescription: 'Complete kitchen and laundry solutions for residential and commercial projects in Oman. Expert workflow design, layout planning, equipment supply, and after-sales service.',
  defaultKeywords: 'kitchen design, laundry planning, commercial kitchen, equipment supply, Oman, Muscat, kitchen layout, workflow design',
  author: 'Punith Mithra',
  twitterHandle: '@punithmithra',
} as const;

// ==========================================
// SERVICES LIST
// ==========================================

export const SERVICES = [
  'Kitchen Design & Layout',
  'Laundry Planning',
  'Equipment Supply',
  'Installation & Commissioning',
  'Maintenance & AMC',
] as const;

// ==========================================
// NAVIGATION LINKS
// ==========================================

export const NAV_LINKS = [
  { name: 'Home', path: 'Home' },
  { name: 'About Us', path: 'About' },
  { name: 'Services', path: 'Services' },
  { name: 'Projects', path: 'Projects' },
  { name: 'Products', path: 'Products' },
  { name: 'Contact', path: 'Contact' },
] as const;

// ==========================================
// CALL TO ACTION MESSAGES
// ==========================================

export const CTA = {
  primary: {
    title: 'Ready to Start Your Project?',
    subtitle: "Let's discuss your kitchen & laundry requirements.",
    buttonText: 'Get Free Consultation',
  },
  secondary: {
    title: 'Need Expert Advice?',
    subtitle: 'Our team is ready to help you design the perfect kitchen or laundry facility.',
    buttonText: 'Contact Us',
  },
} as const;

// ==========================================
// HERO SECTION CONTENT
// ==========================================

export const HERO = {
  home: {
    badge: 'Welcome',
    title: 'Professional Kitchen & Laundry Solutions',
    subtitle: 'Complete design, planning, and execution for your commercial kitchen and laundry facilities',
    primaryCTA: 'Get Started',
    secondaryCTA: 'Call Now',
  },
} as const;

// ==========================================
// FEATURE HIGHLIGHTS
// ==========================================

export const FEATURES = {
  experience: {
    value: '15+',
    label: 'Years Experience',
  },
  projects: {
    value: '500+',
    label: 'Projects Completed',
  },
  clients: {
    value: '200+',
    label: 'Happy Clients',
  },
  equipment: {
    value: '1000+',
    label: 'Equipment Types',
  },
} as const;

// ==========================================
// BUSINESS HOURS
// ==========================================

export const BUSINESS_HOURS = {
  weekdays: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    hours: '8:00 AM - 6:00 PM',
  },
  weekend: {
    days: ['Friday', 'Saturday'],
    hours: 'Closed',
  },
} as const;

// ==========================================
// API & EXTERNAL SERVICES
// ==========================================

export const API = {
  base44Endpoint: 'https://api.base44.com', // Update with actual endpoint
  googleMapsApiKey: '', // Add your Google Maps API key
  analyticsId: '', // Add your Google Analytics ID
} as const;

// ==========================================
// IMAGE PLACEHOLDERS & DEFAULTS
// ==========================================

export const IMAGES = {
  defaultHeroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  defaultThumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
  logoPath: '/images/logo.png', // Update when you add a logo file
  faviconPath: '/favicon.ico',
} as const;

// ==========================================
// ENQUIRY TYPES
// ==========================================

export const ENQUIRY_TYPES = [
  'General Inquiry',
  'Kitchen Design',
  'Laundry Planning',
  'Equipment Quote',
  'Maintenance Service',
  'Project Consultation',
  'Other',
] as const;

// ==========================================
// SCHEMA.ORG DATA
// ==========================================

export const SCHEMA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.fullName,
    url: SITE.url,
    logo: `${SITE.url}${IMAGES.logoPath}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone.display,
      contactType: 'Customer Service',
      email: CONTACT.email.display,
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.address.city,
      addressCountry: CONTACT.address.country,
    },
    sameAs: [
      SOCIAL_MEDIA.linkedin.url,
      SOCIAL_MEDIA.facebook.url,
      SOCIAL_MEDIA.instagram.url,
    ],
  },
} as const;

// ==========================================
// EXPORT ALL AS DEFAULT
// ==========================================

export default {
  COMPANY,
  CONTACT,
  SOCIAL_MEDIA,
  SITE,
  SEO_DEFAULTS,
  SERVICES,
  NAV_LINKS,
  CTA,
  HERO,
  FEATURES,
  BUSINESS_HOURS,
  API,
  IMAGES,
  ENQUIRY_TYPES,
  SCHEMA,
} as const;
