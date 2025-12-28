/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Critical
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_NAME: string
  
  // Important
  readonly VITE_SITE_DESCRIPTION: string
  readonly VITE_SITE_KEYWORDS: string
  readonly VITE_ADDRESS_COUNTRY: string
  
  // Optional - Social Media & Images
  readonly VITE_OG_IMAGE: string
  readonly VITE_OG_IMAGE_ALT: string
  readonly VITE_TWITTER_HANDLE?: string
  
  // Optional - Contact
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_PHONE?: string
  readonly VITE_ADDRESS_STREET?: string
  readonly VITE_ADDRESS_CITY?: string
  readonly VITE_ADDRESS_STATE?: string
  readonly VITE_ADDRESS_ZIP?: string
  
  // Optional - Analytics
  readonly VITE_GOOGLE_ANALYTICS_ID?: string
  readonly VITE_GOOGLE_TAG_MANAGER_ID?: string
  readonly VITE_FACEBOOK_PIXEL_ID?: string
  
  // Optional - Social Links
  readonly VITE_SOCIAL_LINKEDIN?: string
  readonly VITE_SOCIAL_TWITTER?: string
  readonly VITE_SOCIAL_FACEBOOK?: string
  readonly VITE_SOCIAL_INSTAGRAM?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
