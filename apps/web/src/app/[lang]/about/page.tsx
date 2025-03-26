import { Metadata } from "next";
import AboutBackground from "../../../../assets/images/about-page-background.png";
import { Locale } from "../../../../i18n.config";
import PageHead from "../../../components/units/pageTitle";
import AboutAimCards from "../../../sections/about/aimCards";
import BoardOfDirectors from "../../../sections/about/board";
import AboutSectionOne from "../../../sections/homepage/aboutSectionOne";
import AboutSectionTwo from "../../../sections/homepage/aboutSectionTwo";
import { getDictionary } from "../../../utils/dictionary";


export const metadata: Metadata = {
    title: "About us",
    description: "Learn more about COMIDU, our team, our corporate strategy and much more",
    icons: ['/favicon.ico']
}


export default function AboutPage({ params }: {
    params: {
        lang: Locale
    }
}) {

    const dictionary = getDictionary(params.lang)
    const aboutContent = {
        mission: "Bamporeze is dedicated to improving the lives of vulnerable communities in Rwanda through sustainable development initiatives, education, and economic empowerment programs.",
        vision: "We envision a Rwanda where all communities thrive with equal access to education, healthcare, and economic opportunities.",
        history: "Founded in 2008, Bamporeze began as a small community initiative and has grown into a recognized non-profit organization serving thousands of beneficiaries across Rwanda.",
        values: [
            {
                title: "Integrity",
                description: "We uphold the highest ethical standards in all our operations."
            },
            {
                title: "Community-Centered",
                description: "Our programs are designed with and for the communities we serve."
            },
            {
                title: "Sustainability",
                description: "We develop solutions that create lasting positive change."
            },
            {
                title: "Collaboration",
                description: "We partner with local and international organizations to maximize impact."
            }
        ]
    }
    return (
        <>
            <PageHead
                title={dictionary.pages.about.page_title}
                suptitle={dictionary.pages.about.suptitle}
                subtitle={dictionary.pages.about.subtitle}
                backgroundImage="/images/about-page-background.png"
                padBottom={true}
            />
            <AboutAimCards locale={params.lang} />
            <AboutSectionOne expanded={true} locale={params.lang} />
            <AboutSectionTwo locale={params.lang} />
            <BoardOfDirectors locale={params.lang} />
        </>
    )
}