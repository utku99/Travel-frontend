import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import image from "../assets/night.jpg"
import Footer from '../components/footer/Footer'
import Trip from "../components/trip/Trip"

const Service = () => {
  return (
    <>
      <Header/>
      <Hero
      cName="hero-about"
      heroImg={image}
      title="About"
      btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service
