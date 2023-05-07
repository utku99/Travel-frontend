import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import image from "../assets/12.jpg"
import Destination from '../components/destination/Destination'
import Trip from '../components/trip/Trip'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero
      cName="hero"
      heroImg={image}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}

export default Home
