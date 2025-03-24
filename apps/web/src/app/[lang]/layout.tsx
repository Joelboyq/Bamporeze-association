import '@repo/ui/styles.css';
import { ISeoKeyword } from '@repo/ui/types';
import type { Metadata } from 'next';
import localFont from "next/font/local";
import { cache } from 'react';
import { Locale } from '../../../i18n.config';
import BaseLayout from '../../components/layouts/baseLayout';
import { fetcher } from '../../utils/api';
import './globals.css';

const font = localFont({ src: "../../../assets/font/Gilroy-Medium.ttf" })

export async function generateMetadata(): Promise<Metadata> {

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
  const getKeywords = cache(async (): Promise<ISeoKeyword[]> => {
    const slides = await fetcher('/seo-keywords')
    return slides['data'] as ISeoKeyword[]
  })

  return {
    title: 'BAMPOREZE',
    description: 'Mining and exportation company in Rwanda',
    keywords: (await getKeywords()).map(keyword => keyword.word),
    classification: 'Mining company',
    icons: ['/favicon.ico'],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: '/',
      languages: {
        'en': siteUrl + '/en',
        'fr': siteUrl + '/fr'
      },
    },
    openGraph: {
      title: 'BAMPOREZE.',
      description: "Mining and exportation company in Rwanda",
    }
  }
}


export const revalidate = 60 

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {
    lang: Locale
  }
}): JSX.Element {
  return (
    <html lang="en" className='w-screen overflow-x-hidden' style={font.style}>
      <body className='text-[14px]  bg-brand-darkblue-5'>
        <BaseLayout locale={params.lang}>
          {children}
        </BaseLayout>
      </body>
    </html>
  )
}


export async function generateStaticParams() {
  return [
    {
      lang: 'en'
    },
    {
      lang: 'fr'
    },
  ]
}



