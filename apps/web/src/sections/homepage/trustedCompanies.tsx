import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import { getPartnerCompanies } from "../../utils/api";
import { Dictionary, getDictionary } from "../../utils/dictionary";

export default async function TrustedCompanies({ locale }: WithLocaleProp) {
  const partnerCompanies = await getPartnerCompanies()
  const dictionary = getDictionary(locale) as any

  return (
    <WebSection className="py-8 sm:py-12 lg:py-16" about="Trusted Companies">
      {/* Simple title at top */}
      <div className="text-center text-brand-darkblue mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          {dictionary.pages.home.trusted_companies.title}
        </h2>
        <p className="text-base sm:text-lg text-brand-darkblue/80 max-w-2xl mx-auto px-4">
          {dictionary.pages.home.trusted_companies.subtitle}
        </p>
      </div>
      
      {/* Company logos at bottom */}
      {partnerCompanies && partnerCompanies.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4">
          {partnerCompanies.slice(0, 3).map((company, i) => (
            <div 
              key={company.id || i} 
              className="w-1/2 sm:w-1/3 md:w-auto flex items-center justify-center p-4 sm:p-6"
            >
              <Image
                src={company.company_logo}
                alt={company.company_name || 'Partner company'}
                width={120}
                height={60}
                className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] h-auto 
                           opacity-70 hover:opacity-100 transition-all duration-300 
                           filter grayscale hover:grayscale-0"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">Partner companies will be displayed here</p>
        </div>
      )}
    </WebSection>
  );
}