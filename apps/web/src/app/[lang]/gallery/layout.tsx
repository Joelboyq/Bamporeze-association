import { Metadata } from "next";
import CareersBackground from "../../../../assets/images/careers-page-background.png";
import { Locale } from "../../../../i18n.config";
import PageHead, { IPageHeadProps } from "../../../components/units/pageTitle";
import { getDictionary } from "../../../utils/dictionary";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Visit COMIDU's gallery",
    icons: ['/favicon.ico']
}



export default function GalleryLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
    const dictionary = getDictionary(params.lang)
    const pageMeta: IPageHeadProps = {
        suptitle: dictionary.pages.gallery.suptitle,
        subtitle: dictionary.pages.gallery.subtitle,
        title: dictionary.pages.gallery.title,
        backgroundImage: CareersBackground.src,

    }

    return (
        <div className="relative">
            <PageHead {...pageMeta} />
            {children}
        </div>
    )
}