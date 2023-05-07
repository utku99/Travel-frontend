import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import image from "../assets/2.jpg"
import Footer from '../components/footer/Footer'
import ContactFrom from '../components/contact/ContactFrom'

const Contact = () => {
  return (
    <>
      <Header/>
      <Hero
      cName="hero-about"
      heroImg={image}
      title="Contact"
      btnClass="hide"
      />
      <ContactFrom/>
      <Footer/>
    </>
  )
}

export default Contact
