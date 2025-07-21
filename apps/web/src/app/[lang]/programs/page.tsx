import { Metadata } from "next";
import { Locale } from "../../../../i18n.config";
import PageHead from "../../../components/units/pageTitle";
import ServicesSection from "../../../sections/services/services";
import { getDictionary } from "../../../utils/dictionary";
import ProductsList from "../../../sections/homepage/productsList";

export const metadata: Metadata = {
  title: "Our Services | COMIDU",
  description: "Discover COMIDU's comprehensive range of professional services designed to meet your business needs and exceed your expectations.",
  keywords: "services, COMIDU, business solutions, professional services",
  icons: ['/favicon.ico']
}

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
  const dictionary = getDictionary(params.lang)
  
  return (
    <>
     
      <ProductsList locale={params.lang}/>
    </>
  )
}