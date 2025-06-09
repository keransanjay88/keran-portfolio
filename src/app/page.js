'use client'

import React, { useState, useEffect } from 'react'
import LoadingScreen from '../app/components/LoadingScreen'
import Navigation from '../app/components/Navigation'
import BackgroundElements from '../app/components/BackgroundElements'
import HomeSection from '../app/components/HomeSection'
import WorkSection from '../app/components/WorkSection'
import AboutSection from '../app/components/AboutSection'
import ContactSection from '../app/components/ContactSection'
import Footer from '../app/components/Footer'

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth),
        y: (e.clientY / window.innerHeight)
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 text-gray-900 overflow-x-hidden">
      <BackgroundElements />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <div className="pt-28">
        {currentSection === 'home' && <HomeSection setCurrentSection={setCurrentSection} mousePosition={mousePosition} />}
        {currentSection === 'work' && <WorkSection scrollY={scrollY} mousePosition={mousePosition} />}
        {currentSection === 'about' && <AboutSection />}
        {currentSection === 'contact' && <ContactSection scrollY={scrollY} />}
      </div>

      <Footer />
    </div>
  )
}