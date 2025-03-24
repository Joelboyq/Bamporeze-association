'use client'
import { usePathname } from "next/navigation";
import CareersBackground from "../../../../assets/images/careers-page-background.png";
import { Locale } from "../../../../i18n.config";
import PageHead, { IPageHeadProps } from "../../../components/units/pageTitle";
import { getDictionary } from "../../../utils/dictionary";



export default function CareersLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
    const pathname = usePathname();
    const dictionary = getDictionary(params.lang)
    const pageMeta: IPageHeadProps = {
        title: dictionary.pages.careers.page_title,
        subtitle: dictionary.pages.careers.subtitle,
        suptitle: dictionary.pages.careers.suptitle,
        backgroundImage: CareersBackground.src,
        padBottom: pathname.split('/').pop() != 'careers'

    }
    return (
        <>
            <PageHead {...pageMeta} />
            {children}
        </>
    )
}