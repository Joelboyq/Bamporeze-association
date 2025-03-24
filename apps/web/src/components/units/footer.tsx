import { FacebookIcon, InstaIcon, LinkedIcon, Logo, Text } from "@repo/ui/units";
import { contactLinks, getNavlinks } from "../../constants/contactLinks";
import { getDictionary } from "../../utils/dictionary";
import WebSection from "../layouts/websection";
import FooterTopButton from "./footer-topbutton";
import { WithLocaleProp } from "./navbar";

export default function Footer(props: WithLocaleProp) {
    const navLinks = getNavlinks(props.locale)
    const dictionary = getDictionary(props.locale)


    return (
        <footer>
            <WebSection about="Footer" className="bg-brand-blackblue py-16 flex flex-col gap-4 " animate={false}>
                <div className="grid md:grid-cols-4 msm:grid-cols-2 md:gap-6 msm:gap-14">
                    <div className="flex  flex-col msm:col-span-2 md:col-span-1 gap-3">
                        <div className="w-28">
                            <Logo variant="dark" />
                        </div>
                        <Text variant="paragraph" className="text-brand-lightblack/60">
                            {dictionary.common.footer.slogan}
                        </Text>
                        <div className="flex items-center gap-4">
                            <a href="#">
                                <InstaIcon />
                            </a>
                            <a href="#">
                                <LinkedIcon />
                            </a>
                            <a href="#">
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-3">
                        <Text variant="subtitle" className="text-white">{dictionary.common.footer.contact_links.title}</Text>
                        <div className="pl-2 flex flex-col  gap-2">
                            {
                                navLinks.map((link, index) => (
                                    <a key={index} href={link.href}>
                                        <Text variant="paragraph" className="hover:text-brand-lightblue">
                                            {link.name}
                                        </Text>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col  gap-3">
                        <Text variant="subtitle" className="text-white">{dictionary.common.footer.contact_us.title}</Text>
                        <div className="pl-2 flex flex-col  gap-2">
                            {
                                contactLinks.map((link, index) => (
                                    <a key={index} className="flex items-center gap-2" href={link.href}>
                                        <link.icon />
                                        <Text variant="paragraph" className="hover:text-brand-lightblue">
                                            {link.text}
                                        </Text>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-end justify-end msm:hidden md:block">
                        <FooterTopButton />
                    </div>
                </div>

                <hr className="border border-brand-white-10" />
                <Text className="text-center w-full">
                    © 2021 BAMPOREZE. All rights reserved
                </Text>
                <Text variant='label' className="text-center w-full opacity-60">
                    Website developed by <a href="https://scriptylabs.com" className="hover:underline"> Scriptylabs  Inc.</a>
                </Text>
            </WebSection>
        </footer>
    )
}