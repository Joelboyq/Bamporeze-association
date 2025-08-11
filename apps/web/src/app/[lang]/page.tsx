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
  title: 'Bamporeze Association - Empowering Vulnerable Children in Rwanda',
  description: 'Bamporeze Association is a registered NGO in Rwanda dedicated to empowering vulnerable children through education, healthcare, and community development programs. Join us in transforming lives.',
  keywords: 'NGO, Rwanda, children, education, healthcare, community development, charity, donation, vulnerable children, Africa',
  openGraph: {
    title: 'Bamporeze Association - Empowering Vulnerable Children in Rwanda',
    description: 'Supporting vulnerable children in Rwanda through education, healthcare, and community development programs.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Page({ params: { lang } }: { params: { lang: 'en' | 'fr' } }) {
  return (
    <>
      {/* Hero Section - First impression */}
      <Hero locale={lang} />
      
      {/* Impact Stats Section - Key statistics */}
      <ImpactStats locale={lang} />
      
      {/* About Section One - Mission & Vision */}
      <AboutSectionOne expanded={false} locale={lang} />
      
      {/* Impact Stories - Emotional connection */}
      {/* <ImpactStories locale={lang} /> */}
      

      
      {/* About Section Two - Impact metrics */}
      <AboutSectionTwo locale={lang} />
      
      {/* Donation CTA - Fundraising */}
      {/* <DonationCTA locale={lang} /> */}
      
      {/* Transparency & Accountability - Trust building */}
      {/* <Transparency locale={lang} /> */}

            {/* Programs/Services - What we do */}
      <ProductsList locale={lang} /> 
      
      {/* Reviews/Testimonials - Social proof */}
      
      
      {/* Blog Highlight - Latest news */}
      <BlogHighlight />

      <Reviews locale={lang} />
      
      {/* Partner Companies - Credibility */}
      <TrustedCompanies locale={lang} />
    </>
  )
}
