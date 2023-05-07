import React from 'react'
import "./destination.css"
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae consectetur assumenda!</p>

        <DestinationData
        classname="first-des"
        heading="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione fugit eveniet eaque porro labore eligendi aspernatur, laborum, consectetur inventore minima accusantium quis, rem omnis necessitatibus eius dolores suscipit doloremque dicta placeat. Vitae iste temporibus tempore in soluta debitis non, quisquam architecto sint error libero consequuntur! Magni quas quasi nulla!"
        img1={image1}
        img2={image2}
        />
        <DestinationData
        classname="first-des-reverse"
        heading="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione fugit eveniet eaque porro labore eligendi aspernatur, laborum, consectetur inventore minima accusantium quis, rem omnis necessitatibus eius dolores suscipit doloremque dicta placeat. Vitae iste temporibus tempore in soluta debitis non, quisquam architecto sint error libero consequuntur! Magni quas quasi nulla!"
        img1={image3}
        img2={image4}
        />
        
    </div>
  )
}

export default Destination
