#!/usr/bin/env node

/**
 * Generate robots.txt with dynamic sitemap URL from environment
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || 'https://punith-mithra.github.io';

const robotsTxt = `# robots.txt for ${process.env.VITE_SITE_NAME || 'Website'}
# Allow all search engines to crawl the entire site

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional, adjust if needed)
# Crawl-delay: 1

# Disallow specific paths (if any)
# Example: Disallow: /private/
`;

// Write to dist directory (generated during build)
const distDir = path.join(__dirname, '../dist');
const robotsPath = path.join(distDir, 'robots.txt');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(robotsPath, robotsTxt, 'utf8');

console.log(`✅ Generated robots.txt in dist/ with sitemap URL: ${SITE_URL}/sitemap.xml`);
