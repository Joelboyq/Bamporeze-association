import { Text } from "@repo/ui/units";
import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import SectionTitle from "../../components/units/sectionTitle";
import { getBoardMembers } from "../../utils/api";
import { Dictionary, getDictionary } from "../../utils/dictionary";



export default async function BoardOfDirectors({ locale }: WithLocaleProp) {
    const boardMembers = await getBoardMembers()
    const directors = boardMembers.filter((member) => member.classification == 'BOARD_MEMBER')
    const managers = boardMembers.filter((member) => member.classification == 'MANAGER')


    const dictionary: Dictionary = getDictionary(locale)

    return (
        <>
            <WebSection about="Board of directors" className="py-16 flex flex-col gap-10">
                <div className="flex ">
                    <SectionTitle
                        direction="horizontal"
                        title={dictionary.pages.about.board_of_directors.title}
                        subtitle={dictionary.pages.about.board_of_directors.subtitle}
                    />
                </div>
                <div className="grid md:grid-cols-4 msm:grid-cols-1 gap-4">
                    {directors.map((member, i) => (

                        <div className="p-4 rounded-xl  bg-white flex flex-col items-center text-center gap-3 border border-r-brand-darkblue-10" key={i}>

                            <Image src={member.profile_picture} alt="Board of directors" className="rounded-full object-cover max-w-[160px] min-w-[160px] max-h-[160px] min-h-[160px] overflow-hidden" width={352} height={400} />
                            <div className="flex flex-col gap-2 items-center text-center">
                                <Text variant="heading3">{
                                    member.full_name}</Text>
                                <Text>{member.role} </Text>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </WebSection>
            <WebSection about="The management team" className="py-16 flex flex-col gap-10 bg-white">
                <div>
                    <SectionTitle
                        direction="horizontal"
                        title={dictionary.pages.about.management_team.title}
                        subtitle={dictionary.pages.about.management_team.subtitle}
                    />
                </div>
                <div className="grid md:grid-cols-5 msm:grid-cols-2 gap-4">
                    {managers.map((member, i) => (

                        <div className="p-4 rounded-xl  bg-white flex flex-col items-center text-center gap-3 border border-brand-darkblue-10 " key={i}>

                            <Image src={member.profile_picture} alt="Board of directors" className="rounded-full w-[100px] h-[100px] object-cover" width={100} height={100} />
                            <div className="flex flex-col items-center text-center gap-2">
                                <Text variant="heading3">{
                                    member.full_name}</Text>
                                <Text>{member.role} </Text>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </WebSection>

        </>
    )
}