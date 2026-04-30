import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://alixandraacker.com';
const defaultDescription =
  'Alixandra Acker researches AI governance, AI safety, technology policy, and global development, with writing and research on responsible frontier AI.';
const defaultImage = '/writing-images/ai-safety-distribution.jpg';

const toAbsoluteUrl = (value) => {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`;
};

const SEO = ({
  title = 'Alixandra Acker - AI Strategy & Safety',
  description,
  path = '/',
  type = 'website',
  image = defaultImage,
  structuredData,
}) => {
  const canonical = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const pageDescription = description || defaultDescription;
  const absoluteImage = toAbsoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Alixandra Acker" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Alixandra Acker" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}

      <meta name="twitter:card" content={absoluteImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export { siteUrl };
export default SEO;
