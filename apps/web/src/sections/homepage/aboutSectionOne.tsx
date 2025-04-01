import React from "react"
import { Button, Text } from "@repo/ui/units"
import Image from "next/image"

import { Locale } from "../../../i18n.config"
import WebSection from "../../components/layouts/websection"
import SectionTitle from "../../components/units/sectionTitle"
import { getDictionary } from "../../utils/dictionary"

export default function useAboutSectionOne({ expanded, locale }: { expanded: boolean, locale: Locale }) {
    const dictionary = getDictionary(locale) as any
    return (
        <WebSection about="Our corporate Strategy" className="flex items-start justify-between justify-items-end msm:flex-col md:flex-row md:gap-[120px] msm:gap-10 py-20">
            <div className="md:w-5/12">
                <Image 
                    src={'/images/about_pic_1.jpg'} 
                    width={600}
                    height={600} 
                    loading="lazy" 
                    alt="Our corporate strategy descriptive image" 
                    className="rounded-lg w-full h-auto shadow-md" 
                />
            </div>
            <div className="flex flex-col gap-6 md:w-7/12">
                <SectionTitle
                    direction="horizontal"
                    title={dictionary.pages.home.about_section_one.title}
                    suptitle={dictionary.pages.home.about_section_one.suptitle}
                    subtitle={dictionary.pages.home.about_section_one.subtitle} />

                <Text variant="paragraph" className="text-lg leading-relaxed">
                    {expanded 
                        ? dictionary.pages.home.about_section_one.content
                        : dictionary.pages.home.about_section_one.content.slice(0, 200) + "..."}
                </Text>
                <Button 
                    variant="secondary" 
                    className="md:w-fit msm:w-full flex items-center justify-center mt-4"
                >
                    <div className="flex items-center gap-2">
                        {dictionary.common.ctas.read_more}
                    </div>
                </Button>
            </div>
        </WebSection>
    )
}
