import { EmailIcon, LocationIcon, PhoneIcon, WhatsappIcon } from "@repo/ui/units";
import { Locale } from "../../i18n.config";
import { getDictionary } from "../utils/dictionary";


interface IContactInfo {
  icon: React.FC
  text: string
  href: string
}


export const contactLinks: IContactInfo[] = [
  {
    icon: PhoneIcon,
    text: '+250 788 888 888',
    href: 'tel:+250788888888'
  },
  {
    icon: LocationIcon,
    text: 'Kigali, Rwanda',
    href: 'https://www.google.com/maps/d/viewer?mid=1s1yc_gbRmShBhwg2XYxQlDaj_UA&hl=en_GB&ll=-1.90202881197327%2C30.03657130183293&z=14'
  },
  {
    icon: EmailIcon,
    text: 'info@bamporeze.com',
    href: 'mailto:info@bamporeze.com'
  },
  {
    icon: WhatsappIcon,
    text: '+250 788 888 888',
    href: "https://wa.me/+250788888888"
  }

]

export interface INavLink {
  name: string
  href: string
  active: boolean
}


export const getNavlinks = (locale: Locale): INavLink[] => {
  const navLinks = getDictionary(locale).global_layout.navigation.links
  return [
    {
      name: navLinks.home,
      href: '/',
      active: true,
    },
    {
      name: navLinks.about,
      href: '/about',
      active: false,
    },
    {
      name: navLinks.services,
      href: '/services',
      active: false,
    },
    {
      name: navLinks.careers,
      href: '/careers',
      active: false,
    },
    {
      name: navLinks.blog,
      href: '/blog',
      active: false,
    },
    {
      name: navLinks.gallery,
      href: '/gallery',
      active: false,
    },
    {
      name: navLinks.contact,
      href: '/contact',
      active: false,
    },
  ]

}