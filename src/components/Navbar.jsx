'use client'
import React, { useState, useEffect } from 'react'
import { assets } from "../../assets/assets";
import Image from 'next/image'
import Link from 'next/link' // ✅ Added Link for navigation

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About Us', href: 'about' },
  { name: 'Treatments', href: 'services' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact Us', href: '/contact' }, // ✅ now this links to page
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // ✅ Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      navItems.forEach((item) => {
        const section = document.getElementById(item.href)
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.href)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <>
      {/* Background Shape */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] h-screen'>
        <Image src={assets.HeaderBgColour} alt='' className='w-full' />
      </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 bg-gray-50 shadow-2xl'>
        {/* ✅ Logo */}
        <Link href='/'>
          <Image src={assets.Logo} className='w-24 cursor-pointer mr-14' alt='logo' />
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          {navItems.map((item, i) => (
            <li key={i}>
              {item.name === 'Contact Us' ? (
                <Link
                  href={item.href}
                  className={`font-Ovo text-base md:text-lg transition-all duration-300
                    ${active === item.href ? 'text-green-600 font-bold' : 'text-gray-800'}
                    hover:scale-110 hover:text-green-500 hover:text-xl`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`font-Ovo text-base md:text-lg transition-all duration-300
                    ${active === item.href ? 'text-green-600 font-bold' : 'text-gray-800'}
                    hover:scale-110 hover:text-green-500 hover:text-xl`}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* ✅ Right Buttons */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.MoonIcon} alt='' className='w-6' />
          </button>

          {/* ✅ Book Appointment redirects to contact page */}
          <Link
            href="/contact"
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
              transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:text-white'
          >
            Book Appointment
          </Link>

          {/* ✅ Mobile Menu Button */}
          <button
            className='block md:hidden ml-3 transition-transform duration-300 hover:scale-110'
            onClick={() => setOpen(true)}
          >
            <Image src={assets.MenuBlack} alt='' className='w-6' />
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
         bg-rose-50 transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='absolute right-6 top-6' onClick={() => setOpen(false)}>
            <Image src={assets.CloseBlack} alt='' className='w-5 cursor-pointer' />
          </div>

          {navItems.map((item, i) => (
            <li key={i}>
              {item.name === 'Contact Us' ? (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-Ovo text-base transition-all duration-300 
                    ${active === item.href ? 'text-green-600 font-bold' : 'text-gray-800'}
                    hover:scale-110 hover:text-green-500 hover:text-lg`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`font-Ovo text-base transition-all duration-300 
                    ${active === item.href ? 'text-green-600 font-bold' : 'text-gray-800'}
                    hover:scale-110 hover:text-green-500 hover:text-lg`}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
