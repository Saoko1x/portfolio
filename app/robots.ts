export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://saoko.dev/sitemap.xml',
    host: 'https://saoko.dev',
  };
}
