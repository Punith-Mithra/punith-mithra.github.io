/**
 * Utility function to create page URLs
 * In a real application, this would integrate with routing
 */
export function createPageUrl(pageName: string): string {
  // Convert page name to URL path
  const pathMap: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Services': '/services',
    'Projects': '/projects',
    'Products': '/products',
    'Contact': '/contact',
  };
  
  return pathMap[pageName] || `/${pageName.toLowerCase()}`;
}

/**
 * Utility function to merge class names
 */
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ');
}
