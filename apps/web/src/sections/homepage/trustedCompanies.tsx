import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import SectionTitle from "../../components/units/sectionTitle";
import { getPartnerCompanies } from "../../utils/api";
import { Dictionary, getDictionary } from "../../utils/dictionary";

export default async function TrustedCompanies({ locale }: WithLocaleProp) {
    const partnerCompanies = await getPartnerCompanies()

    const dictionary: Dictionary = getDictionary(locale)
    return (
        <WebSection about="Companies licencing us" className="py-10 flex items-center msm:flex-col md:flex-row justify-between bg-brand-darkblue-5">
            <SectionTitle direction="horizontal" title={dictionary.pages.home.trusted_companies.title} subtitle={dictionary.pages.home.trusted_companies.subtitle} />
            <div className="flex items-center justify-between gap-6">
                {
                    partnerCompanies.slice(0, 3).map((company, i) => (
                        <a key={i} href={company.company_website} target="_blank" >
                            <Image key={i} src={company.company_logo} alt={company.company_name} width={100} height={100} blurDataURL={company.company_logo} className="rounded-lg border border-brand-darkblue-10 object-contain msm:w-[60px] msm:h-[60px]  md:w-[100px] md:h-[100px]" />
                        </a>
                    ))
                }
            </div>
        </WebSection>
    )
}