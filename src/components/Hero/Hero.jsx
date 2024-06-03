import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'; // Import Link component for smooth scrolling

const Hero = () => {
  return (
    <div className='hero container'>
          <div className="hero-text">
          <h1> Innovate.Illuminate.Inspire. </h1> 
          <p> Prakash Innovative Universe is where creativity meets technology. 
            Our mission is to innovate with passion, illuminate with purpose, 
            and inspire change across industries. We strive to deliver solutions 
            that not only meet the demands of today but also anticipate the needs 
            of tomorrow, fostering a culture of inspiration and excellence.</p>
            
            
            <Link to="programs" smooth={true} offset={-190} duration={500}>
            <button className="btn">
        Explore more <img src={dark_arrow} alt="" />
             </button>
</Link>

            </div>
    </div>
  )
}

export default Hero