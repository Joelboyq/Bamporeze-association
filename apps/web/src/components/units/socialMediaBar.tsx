'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { socialMediaLinks } from '../../constants/socialMedia'

export default function SocialMediaBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide bar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
        isVisible ? 'h-12 opacity-100' : 'h-0 opacity-0'
      }`}
    >
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center py-3">
            <div className="flex items-center space-x-6">
              {socialMediaLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 transition-colors duration-200 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
