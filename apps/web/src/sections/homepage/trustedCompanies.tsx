import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import { getPartnerCompanies } from "../../utils/api";
import { Dictionary, getDictionary } from "../../utils/dictionary";

export default async function TrustedCompanies({ locale }: WithLocaleProp) {
  const partnerCompanies = await getPartnerCompanies()
  const dictionary = getDictionary(locale) as any

  return (
    <WebSection className="py-16" about="Trusted Companies">
      {/* Simple title at top */}
      <div className="text-center text-brand-darkblue mb-12">
        <h2 className="text-3xl font-bold">
          {dictionary.pages.home.trusted_companies.title}
        </h2>
        <p className="text-lg text-brand-darkblue">
          {dictionary.pages.home.trusted_companies.subtitle}
        </p>
      </div>
      
      {/* Company logos at bottom */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partnerCompanies.slice(0, 3).map((company, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src={company.company_logo}
              alt={company.company_name}
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </WebSection>
  );
}