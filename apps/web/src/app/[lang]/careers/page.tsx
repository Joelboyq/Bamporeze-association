import { Metadata } from "next";
import { Locale } from "../../../../i18n.config";
import HiringProcess from "../../../sections/careers/hiringProcess";
import OpenPositions from "../../../sections/careers/openPositions";
import ValuesSection from "../../../sections/careers/values";

export const metadata: Metadata = {
    title: "Careers",
    description: "About careers and open positions",
    icons: ['/favicon.ico']
}


export default function Page({ params }: { params: { lang: Locale } }) {
    return (
        <>
            <ValuesSection locale={params.lang} />
            <OpenPositions locale={params.lang} />
            <HiringProcess locale={params.lang} />
        </>
    )
}