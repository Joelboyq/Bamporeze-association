import AboutSectionOne from '../../sections/homepage/aboutSectionOne'
import AboutSectionTwo from '../../sections/homepage/aboutSectionTwo'
import BlogHighlight from '../../sections/homepage/blogHighlight'
import OurHappyClients from '../../sections/homepage/happyClients'
import Hero from '../../sections/homepage/hero'
import ProductsList from '../../sections/homepage/productsList'
import Reviews from '../../sections/homepage/reviews'
import TrustedCompanies from '../../sections/homepage/trustedCompanies'
import type { Metadata } from 'next'

// Define the missing interface
interface ISlide {
  id: number;
  title: string;
  description: string;
  background_image: string;
  cta: string;
}

// Static metadata
export const metadata: Metadata = {
  title: 'Home',
  description: 'Empowering Communities in Rwanda',
};

export default function Page({ params: { lang } }: { params: { lang: 'en' | 'fr' } }) {
  // Replace slide content with actual Bamporeze information
  // @ts-ignore - Ignore the missing interface error
  const slides: ISlide[] = [
    {
      id: 1,
      title: "Empowering Communities in Rwanda",
      description: "Supporting vulnerable communities through sustainable development initiatives and education programs",
      background_image: "/path/to/your/image1.jpg", // You'll update this path
      cta: "/about"
    },
    {
      id: 2,
      title: "Our Education Programs",
      description: "Providing quality education and skills development to underserved communities",
      background_image: "/path/to/your/image2.jpg", // You'll update this path
      cta: "/programs"
    },
    {
      id: 3,
      title: "Community Development",
      description: "Building stronger communities through local initiatives and partnerships",
      background_image: "/path/to/your/image3.jpg", // You'll update this path
      cta: "/impact"
    }
  ]

  return (
    <div className=''>
      <Hero locale={lang} />
      <TrustedCompanies locale={lang} />
      <AboutSectionOne expanded={false} locale={lang} />
      <AboutSectionTwo locale={lang} />
      <ProductsList locale={lang} />
      <BlogHighlight />
      <Reviews locale={lang} />
      <OurHappyClients locale={lang} />
    </div>
  )
}
