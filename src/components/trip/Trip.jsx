import React from 'react'
import "./trip.css"
import TripData from './TripData'
import image1 from "../../assets/5.jpg"
import image2 from "../../assets/8.jpg"
import image3 from "../../assets/6.jpg"

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="tripcard">
            <TripData
            image={image1}
            heading="Trip in Indonesia"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident alias atque consectetur cumque sed unde reprehenderit ipsam sunt dolorum delectus recusandae iusto temporibus eum!"
            />
            <TripData
            image={image2}
            heading="Trip in Malaysia"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident alias atque consectetur cumque sed unde reprehenderit ipsam sunt dolorum delectus recusandae iusto temporibus eum!"
            />
            <TripData
            image={image3}
            heading="Trip in France"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident alias atque consectetur cumque sed unde reprehenderit ipsam sunt dolorum delectus recusandae iusto temporibus eum!"
            />
        </div>
    </div>
  )
}

export default Trip
