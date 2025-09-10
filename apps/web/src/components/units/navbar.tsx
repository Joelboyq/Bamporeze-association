'use client'
import { Button, Logo, Text } from '@repo/ui/units'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Select, { StylesConfig } from 'react-select'
import { Locale } from '../../../i18n.config'
import { getNavlinks } from '../../constants/contactLinks'
import { getDictionary } from '../../utils/dictionary'
import WebSection from '../layouts/websection'
import { remoteAxios } from '../../utils/axios.config'
import axios from 'axios'
import DonateModal from './DonateModal'
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa'
import SocialMediaBar from './socialMediaBar';

const locales = [
  {
    label: <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#eee" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4" /><path fill="#ce1124" d="M21 5h-6v10H0v6h15v10h6V21h15v-6H21z" /></svg><span className='text-brand-blackblue'>En</span>
    </div>,

    value: 'en'
  },
  {
    label: <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#ed2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z" /><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z" /><path fill="#eee" d="M12 5h12v26H12z" /></svg>
      <span className='text-brand-blackblue'>Fr</span>
    </div>,
    value: 'fr'
  },

]

const customStyles: StylesConfig = {
  control: (provided: any) => ({ // class attribute : class=" css-i32vvf-control"
    // ...provided,
    background: 'white',
    display: 'flex',
    flexWrap: 'nowrap',
    borderColor: 'transparent',
  }),
  menu: (provided: any) => ({ // 'menu' is from the div class too.
    ...provided,
    background: 'white',
    width: '100%'
  }),
};
export interface WithLocaleProp {
  locale: Locale
}

export default function Navbar(props: WithLocaleProp) {
  const pathname = usePathname()
  const router = useRouter()
  const [hidenav, setHideNav] = useState(false)
  const navLinks = getNavlinks(props.locale)
  const dictionary = getDictionary(props.locale)
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      axios.post('http://65.181.118.17:5234/api/v1/visits/create', {
        location: `${position.coords.latitude},${position.coords.longitude}`
      })
    })
  }, [])

  useEffect(() => {
    setHideNav(false)
  }, [pathname])

  function handleChangeLocale(locale: 'en' | 'fr') {
    let path = pathname.split('/')
    path.shift()
    path.shift()
    const newPath = `/${locale}/${path.join('/')}`
    router.push(newPath)
  }

  return (
    <header className='sticky top-0 w-full z-50 bg-white shadow-lg'>
      <SocialMediaBar />
      
      {/* Desktop Navigation */}
      <nav className='hidden md:block mt-2' style={{ minHeight: '80px' }}>
        <WebSection about='BAMPOREZE.' className="flex items-center justify-between py-4 px-4 lg:px-8" animate={false}>
          {/* Logo */}
          <Link href={`/${props.locale}`} className="flex-shrink-0 transition-transform hover:scale-105">
            <div className="  h-20 ">
              <Logo variant="light" className="h-full" />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isHome = link.href === '/';
              const isActive = isHome 
                ? pathname === `/${props.locale}` || pathname === `/${props.locale}/`
                : pathname.startsWith(`/${props.locale}${link.href}`);
              
              return (
                <Link 
                  key={index} 
                  href={`/${props.locale}${link.href}`}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-300
                    text-lg font-semibold
                    ${isActive 
                      ? 'bg-brand-darkblue text-white transform scale-105 shadow-md' 
                      : 'text-gray-700 hover:bg-brand-lightblue/10'}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-lightblue rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            
            
            {/* Contact Button */}
            <Link 
              href={`/${props.locale}/contact`}
              className="bg-green-600 hover:bg-green-700 px-6 py-2.5 rounded-lg 
                        text-white font-semibold transition-colors duration-300
                        shadow-md hover:shadow-lg"
            >
              {dictionary.global_layout.navigation.buttons.contact}
            </Link>

            {/* Donate Button */}
            <button
              onClick={() => setDonateOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2.5 rounded-lg
                        text-brand-darkblue font-semibold transition-all duration-300
                        shadow-md hover:shadow-lg flex items-center gap-2"
              aria-label="Donate"
            >
              <FaHeart className="text-red-500" />
              <span>Donate</span>
            </button>
          </div>
        </WebSection>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <WebSection about='BAMPOREZE.' className="relative" animate={false}>
          <div className="flex items-center justify-between py-3 px-4">
            <Link href={`/${props.locale}`} className="flex-shrink-0">
              <div className="h-14">
                <Logo variant="light" className="h-full" />
              </div>
            </Link>

            <button 
              onClick={() => setHideNav(!hidenav)}
              className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-brand-darkblue hover:bg-gray-100 transition-all"
              aria-label={hidenav ? "Close menu" : "Open menu"}
            >
              {hidenav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`
              fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out
              ${hidenav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
            `}
            style={{ top: '88px' }} // Height of header + social bar
          >
            <div className="h-full overflow-y-auto">
              <div className="py-6 px-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isHome = link.href === '/';
                    const isActive = isHome 
                      ? pathname === `/${props.locale}` || pathname === `/${props.locale}/`
                      : pathname.startsWith(`/${props.locale}${link.href}`);
                    
                    return (
                      <Link
                        key={index}
                        href={`/${props.locale}${link.href}`}
                        className={`
                          block py-3 px-4 rounded-lg text-lg font-semibold transition-all
                          ${isActive 
                            ? 'bg-brand-darkblue text-white' 
                            : 'text-gray-700 hover:bg-gray-50'}
                        `}
                        onClick={() => setHideNav(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <hr className="border-gray-200" />

                {/* Language Selector */}
                <div className="px-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Language
                  </label>
                  <Select
                    options={locales}
                    value={locales.find(l => l.value === props.locale)}
                    onChange={(option: any) => handleChangeLocale(option.value)}
                    styles={customStyles}
                    isSearchable={false}
                    className="w-full"
                  />
                </div>

                {/* Actions */}
                <div className="space-y-3 px-4">
                  <Link
                    href={`/${props.locale}/contact`}
                    className="block w-full py-3 text-center bg-green-600 hover:bg-green-700 
                             text-white rounded-lg font-semibold transition-colors"
                    onClick={() => setHideNav(false)}
                  >
                    {dictionary.global_layout.navigation.buttons.contact}
                  </Link>

                  <button
                    onClick={() => {
                      setDonateOpen(true);
                      setHideNav(false);
                    }}
                    className="w-full py-3 text-center bg-yellow-400 hover:bg-yellow-500 
                             text-brand-darkblue rounded-lg font-semibold 
                             flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaHeart className="text-red-500" />
                    <span>Donate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </WebSection>
      </nav>

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  )
}