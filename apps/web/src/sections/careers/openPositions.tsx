import { Button, Text } from "@repo/ui/units";
import Link from "next/link";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import SectionTitle from "../../components/units/sectionTitle";
import { getJobPositions } from "../../utils/api";
import { getDictionary } from "../../utils/dictionary";

export default async function OpenPositions({ locale }: WithLocaleProp) {
    const openPositions = await getJobPositions()
    const dictionary = getDictionary(locale)
    return (
        <>
            <WebSection about="Open positions" className="py-16 flex flex-col gap-10 bg-brand-darkblue-10">
                <SectionTitle
                    direction="horizontal"
                    title={dictionary.pages.careers.open_positions.title}
                    subtitle={dictionary.pages.careers.open_positions.subtitle}
                />

                <div className="flex flex-col gap-4">
                    {
                        openPositions.map((position, index) => (
                            <div className="flex items-start bg-white justify-between p-6 rounded-md" key={index}>
                                <div className="flex flex-col gap-2 max-w-[600px]" >
                                    <Text variant="heading3">
                                        {position.title}
                                    </Text>
                                    <Text variant="paragraph" className="flex items-center gap-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 21H20.25M4.5 3H19.5M5.25 3V21M18.75 3V21M9 6.75H10.5M9 9.75H10.5M9 12.75H10.5M13.5 6.75H15M13.5 9.75H15M13.5 12.75H15M9 21V17.625C9 17.004 9.504 16.5 10.125 16.5H13.875C14.496 16.5 15 17.004 15 17.625V21" stroke="#0A142F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        {position.location}
                                    </Text>
                                </div>
                                <Link href={`/careers/${position.id}`}>
                                    <Button variant={"secondary"}>
                                        Volunteer Now
                                    </Button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </WebSection>
        </>
    )
}