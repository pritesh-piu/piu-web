import React from 'react';
import './About.css'; // Import the CSS file for styling
import about_img from '../../assets/img-11.jpg'; // Import the about image
import play_icon from '../../assets/play-icon.png'; // Import the play icon image

const About = () => {
  return (
    <div className='about'>
      {/* Left section of the about component */}
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" /> {/* Display the about image */}
        <img src={play_icon} alt="" className="play-icon" /> {/* Display the play icon */}
      </div>

      {/* Right section of the about component */}
      <div className="about-right"> 
        <h3> ABOUT US </h3> {/* Section title */}
        <h2> Revolutionize Your Products with Prakash Innovative Universe </h2> {/* Section heading */}
      
        <p>
          At Prakash Innovative Universe, our experienced team of product developers combines 
          deep industry expertise with a passion for creativity, transforming your ideas 
          into market-ready solutions.
        </p>

        <p>
          Whether you're a startup with a disruptive concept or an 
          established enterprise seeking to revamp your product line, 
          we are committed to bringing your vision to life.
        </p>

        <p>
          We cover the entire spectrum of product development, 
          from market research and ideation to prototyping and iteration, 
          ensuring your product not only meets but exceeds customer expectations.
        </p>

        <p>
          Our focus on user-centric design, cutting-edge technology, 
          and agile methodologies empowers businesses to stay ahead in today's dynamic marketplace. 
          Partner with Prakash Innovative Universe to unlock the full potential of your product ideas.
        </p>
      </div>
    </div>
  );
}

export default About;
