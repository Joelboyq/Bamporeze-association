import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import localFont from "next/font/local";
import { Locale } from '../../../i18n.config';
import BaseLayout from '../../components/layouts/baseLayout';
import './globals.css';

const font = localFont({ src: "../../../assets/font/Gilroy-Medium.ttf" })

// Static metadata
export const metadata: Metadata = {
  title: 'Bamporeze Association',
  description: 'Empowering Communities in Rwanda',
  openGraph: {
    title: 'Bamporeze Association',
    description: 'Empowering Communities in Rwanda',
    url: process.env.NEXT_PUBLIC_SITE_URL,
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

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}): JSX.Element {
  return (
    <html lang={params.lang} className='w-screen overflow-x-hidden' style={font.style}>
      <body className='text-[14px] bg-brand-darkblue-5'>
        <BaseLayout locale={params.lang}>
          {children}
        </BaseLayout>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}



