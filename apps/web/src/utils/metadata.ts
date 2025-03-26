import { Metadata } from 'next';

export function getBaseMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    icons: ['/favicon.ico'],
    openGraph: {
      type: 'website',
      title: title,
      description: description,
      siteName: 'Bamporeze Association',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Bamporeze Association',
        },
      ],
    },
  };
} 