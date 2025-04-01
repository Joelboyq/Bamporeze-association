import { Button, Text } from "@repo/ui/units"
import Image from "next/image"
import WebSection from "../../components/layouts/websection"
import { WithLocaleProp } from "../../components/units/navbar"
import SectionTitle from "../../components/units/sectionTitle"
import { getDictionary } from "../../utils/dictionary"

export default function AboutSectionTwo({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any
    return (
        <WebSection about="Our impact" className="flex items-start justify-between justify-items-end msm:flex-col-reverse md:flex-row md:gap-[120px] msm:gap-10 py-20">
            <div className="flex flex-col gap-6 md:w-7/12">
                <SectionTitle
                    direction="horizontal"
                    title={dictionary.pages.home.about_section_two.title}
                    suptitle={dictionary.pages.home.about_section_two.suptitle}
                    subtitle={dictionary.pages.home.about_section_two.subtitle} />

                <Text variant="paragraph" className="text-lg leading-relaxed">
                    {dictionary.pages.home.about_section_two.content}
                </Text>
                <Button variant="secondary" className="md:w-fit msm:w-full flex items-center justify-center mt-4">
                    <div className="flex items-center gap-2">
                        {dictionary.common.ctas.read_more}
                    </div>
                </Button>
            </div>
            <div className="md:w-5/12">
                <Image 
                    src="/images/about_pic_2.jpg" 
                    width={600} 
                    height={600} 
                    loading="lazy" 
                    alt="Our impact descriptive image" 
                    className="rounded-lg w-full h-auto shadow-md"
                />
            </div>
        </WebSection>
    )
}
