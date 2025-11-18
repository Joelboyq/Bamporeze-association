import AboutSectionOne from '../../sections/homepage/aboutSectionOne'
import AboutSectionTwo from '../../sections/homepage/aboutSectionTwo'
import BlogHighlight from '../../sections/homepage/blogHighlight'
import OurHappyClients from '../../sections/homepage/happyClients'
import Hero from '../../sections/homepage/hero'
import ImpactStats from '../../sections/homepage/impactStats'
import ProductsList from '../../sections/homepage/productsList'
import Reviews from '../../sections/homepage/reviews'
import TrustedCompanies from '../../sections/homepage/trustedCompanies'
import ImpactStories from '../../sections/homepage/impactStories'
import Transparency from '../../sections/homepage/transparency'
import DonationCTA from '../../sections/homepage/donationCTA'
import type { Metadata } from 'next'

// Static metadata
export const metadata: Metadata = {
  title: 'Bamporeze Association - Empowering women. Protecting children. Transforming communities.',
  description: 'Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, committed to supporting vulnerable children, youth, women, and families through transformative approaches to alleviating poverty and building resiliency.',
  keywords: 'NGO, Rwanda, children, education, healthcare, community development, charity, donation, vulnerable children, Africa, women empowerment, child protection, environmental protection',
  openGraph: {
    title: 'Bamporeze Association - Empowering women. Protecting children. Transforming communities.',
    description: 'Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, committed to supporting vulnerable children, youth, women, and families.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Page({ params: { lang } }: { params: { lang: 'en' | 'fr' } }) {
  return (
    <main>
      {/* 1. Hero Section - "Empowering women. Protecting children. Transforming communities." */}
      <Hero locale={lang} />
      
      {/* 2. Numbers (Infographics) - "In the green" section with 12 key statistics */}
      <ImpactStats locale={lang} />
      
      {/* 3. Who we are - Intro, Our Story, Mission & Vision */}
      <AboutSectionOne locale={lang} />
      
      {/* 4. Our Impact - Tagline intro and achievements */}
      <AboutSectionTwo locale={lang} />
      
      {/* 5. Our Programs - Education Support, Healthcare Access, Community Development, Child Protection, Environmental Protection */}
      <ProductsList locale={lang} /> 
      
      {/* 6. Latest Stories & Updates - Success stories (Ishimwe and Tuzamurane SHG) */}
      <BlogHighlight locale={lang} />

      {/* 7. Reviews/Testimonials - Social proof */}
      <Reviews locale={lang} />
      
      {/* 8. Partner Companies - Credibility */}
      <TrustedCompanies locale={lang} />
    </main>
  )
}
