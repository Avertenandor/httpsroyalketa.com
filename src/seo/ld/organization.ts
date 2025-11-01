export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Royal Keta',
  url: 'https://royalketa.com',
  logo: 'https://royalketa.com/logo.png',
  description: 'Premium salmon hatchery and caviar production on Sakhalin Island',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nevelsky District',
    addressRegion: 'Sakhalin Oblast',
    addressCountry: 'RU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-999-999-99-99',
    contactType: 'customer service',
    email: 'hello@royalketa.com',
  },
  sameAs: [
    'https://t.me/royalketa',
  ],
};
