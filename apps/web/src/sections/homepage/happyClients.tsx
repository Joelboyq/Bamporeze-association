
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import HappyClientsMarquee from "../../components/units/partnersMarquee";
import SectionTitle from "../../components/units/sectionTitle";
import { getPartnerCompanies } from "../../utils/api";
import { getDictionary } from "../../utils/dictionary";

export default async function OurHappyClients({ locale }: WithLocaleProp) {
    const happyClients = await getPartnerCompanies()
    const dictionary = getDictionary(locale)
    return (
        <>
            <WebSection about="Our happy clients" className="px-0" animate={false}>
                <SectionTitle
                    direction="vertical"
                    title={dictionary.pages.home.happy_clients.title}
                    subtitle={dictionary.pages.home.happy_clients.subtitle}
                    suptitle={dictionary.pages.home.happy_clients.suptitle} />
            </WebSection >
            <div className="py-10">
                <HappyClientsMarquee companies={happyClients} />
            </div>
        </>
    )
}