'use client'
import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
    <>
    <div className=' fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.HeaderBgColour} alt='' className='w-full'/>
    </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <a className=''>
            <Image src={assets.Logo} className='w-24 cursor-pointer mr-14 ' alt='logo'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#top'>About Us</a></li>
            <li><a className='font-Ovo' href='#top'>Services</a></li>
            <li><a className='font-Ovo' href='#top'>Gallery</a></li>
            <li><a className='font-Ovo' href='#top'>Contact Us</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.MoonIcon} alt='' className='w-6'/>
          </button>

          <a href='' className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
            '>Book Appointment
          </a>

          <button className='block md:hidden ml-3' onClick={()=> setOpen(true)}>
            <Image src={assets.MenuBlack} alt='' className='w-6'/>
          </button>
        </div>

        {/* -----mobile view -----*/}
        <ul  className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
         bg-rose-50 transition duration-500  ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='absolute right-6 top-6' onClick={()=> setOpen(false)}>
              <Image src={assets.CloseBlack} alt='' className='w-5 cursor-pointer'/>
            </div>
            
            <li><a className='font-Ovo' href='#top' onClick={()=> setOpen(false)}>Home</a></li>
            <li><a className='font-Ovo' href='#top' onClick={()=> setOpen(false)}>About Us</a></li>
            <li><a className='font-Ovo' href='#top' onClick={()=> setOpen(false)}>Services</a></li>
            <li><a className='font-Ovo' href='#top' onClick={()=> setOpen(false)}>Gallery</a></li>
            <li><a className='font-Ovo' href='#top' onClick={()=> setOpen(false)}>Contact Us</a></li>
        </ul>


    </nav>
    </>
  )
}

export default Navbar
