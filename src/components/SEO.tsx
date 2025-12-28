import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, any>;
}

// Environment variables with fallbacks
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://punith-mithra.github.io';
const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'Punith Mithra';
const SITE_DESCRIPTION = import.meta.env.VITE_SITE_DESCRIPTION || 'Professional Architecture & Planning Services';
const SITE_KEYWORDS = import.meta.env.VITE_SITE_KEYWORDS || 'architecture, planning, design, construction, civil engineering';
const OG_IMAGE_DEFAULT = import.meta.env.VITE_OG_IMAGE || '/og-image.jpg';
const OG_IMAGE_ALT_DEFAULT = import.meta.env.VITE_OG_IMAGE_ALT || `${SITE_NAME} - Architecture & Planning Services`;
const ADDRESS_COUNTRY = import.meta.env.VITE_ADDRESS_COUNTRY || 'IN';
const TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = SITE_KEYWORDS,
  canonical,
  ogType = 'website',
  ogImage = OG_IMAGE_DEFAULT,
  ogImageAlt = OG_IMAGE_ALT_DEFAULT,
  twitterCard = 'summary_large_image',
  author = SITE_NAME,
  publishedTime,
  modifiedTime,
  schema,
}) => {
  const siteUrl = SITE_URL;
  const siteName = SITE_NAME;
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = canonical || `${siteUrl}${window.location.pathname}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Build social media links array from environment
  const socialLinks = [
    import.meta.env.VITE_SOCIAL_LINKEDIN,
    import.meta.env.VITE_SOCIAL_TWITTER,
    import.meta.env.VITE_SOCIAL_FACEBOOK,
    import.meta.env.VITE_SOCIAL_INSTAGRAM,
  ].filter(Boolean); // Remove undefined values

  // Default Organization Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    ...(socialLinks.length > 0 && { sameAs: socialLinks }),
  };

  const schemaData = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="Punith Mithra" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      {/* Add your Twitter handle: <meta name="twitter:creator" content="@yourhandle" /> */}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};
