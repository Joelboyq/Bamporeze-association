import { Metadata } from "next"

import { Locale } from "../../../../i18n.config"
import PageHead, { IPageHeadProps } from "../../../components/units/pageTitle"
import { getDictionary } from "../../../utils/dictionary"

export const metadata: Metadata = {
    title: "Contact us",
    description: "Get in touch with Comidu, ask more, send feedback and more",
    icons: ['/favicon.ico']
}


export default function Layout({ children, params }: { children: any, params: { lang: Locale } }) {
    const dictionary = getDictionary(params.lang)
    const pageMeta: IPageHeadProps = {
        title: dictionary.pages.contact_page.form.title,
        suptitle: dictionary.pages.contact_page.form.suptitle,
        subtitle: dictionary.pages.contact_page.form.subtitle,
        backgroundImage: "/images/contact-us-page-background.png",
    }


    return (
        <div>
            <PageHead {...pageMeta} />
            {children}
        </div>
    )
}