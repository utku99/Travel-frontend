import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SignUp from '../components/signup/SignUp'
import Hero from '../components/hero/Hero'
import image from "../assets/10.jpg"



const Signup = () => {
  return (
    <>
      <Header/>
      <Hero
      cName="hero-about"
      heroImg={image}
      title="Sign Up"
      btnClass="hide"
      />
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Signup
