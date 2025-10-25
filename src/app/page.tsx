'use client'
import { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUs'
import ServicesSection from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
import StatsCounter from '@/components/StatsCounter'
import WhyChooseUs from '@/components/WhyChooseUs'
import Gallery from '@/components/Gallery'
import OurApproach from '@/components/OurApproach'
export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'auto' })

    // Initialize AOS
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   offset: 100,
    // })
  }, [])
  return (
    <>
      <Navbar />
      <Header id="home" />
      <AboutUsSection id="about" /> 
      <ServicesSection id="services" />
      <Testimonial id="testimonial" />
      <StatsCounter id="stats" />
      <OurApproach id = "ourapproach"/>
      <Gallery id="gallery" />
      <Footer id="footer" />
    </>
  )
}
