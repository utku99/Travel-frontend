import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import image from "../assets/night.jpg"
import Footer from '../components/footer/Footer'
import AboutContext from '../components/about/AboutContext'

const About = () => {
  return (
    <>
      <Header/>
      <Hero
      cName="hero-about"
      heroImg={image}
      title="About"
      btnClass="hide"
      />
      <AboutContext/>
      <Footer/>
    </>
  )
}

export default About
