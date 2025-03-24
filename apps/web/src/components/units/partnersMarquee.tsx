'use client'
import { IPartnerCompany } from "@repo/ui/types";
import Image from "next/image";
import Marquee from "react-simple-marquee";
const HappyClientsMarquee = ({ companies }: { companies: IPartnerCompany[] }) => {
    return (
        <>
            <Marquee>{companies.map((company, i) => (
                <Image src={company.company_logo} alt="Balfour" loading="lazy" width={200} height={200} blurDataURL={company.company_logo} className="marquee-content md:max-w-[140px] md:min-w-[140px] md:max-h-[140px] msm:max-w-[8  0px] msm:min-w-[80px] msm:max-h-[80px] object-contain bg-white rounded-lg border border-brand-darkblue-10 md:min-h-[140px] msm:min-h-[80px] mx-10 " />
            ))}
            </Marquee>
        </>
    );
};

export default HappyClientsMarquee;