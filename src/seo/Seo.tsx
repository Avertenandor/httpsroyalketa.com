import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  path: string;
  type?: 'website' | 'article';
  jsonLd?: object;
}

export function Seo({
  title,
  description,
  ogImage = '/og/home.jpg',
  path,
  type = 'website',
  jsonLd,
}: SeoProps) {
  const siteUrl = 'https://royalketa.com';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | Royal Keta`;
  const ogImageUrl = `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="theme-color" content="#0B0F14" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Royal Keta" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
