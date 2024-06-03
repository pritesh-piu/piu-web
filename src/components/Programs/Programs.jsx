import React from 'react';
import './Programs.css';
import program_1 from '../../assets/p-1.jpg';
import program_2 from '../../assets/p-4.jpg';
import program_3 from '../../assets/p-5.jpg';
import program_4 from '../../assets/p-6.jpg';
import program_5 from '../../assets/p-3.jpg';
import program_6 from '../../assets/p-7.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

// Programs component to display various services offered
const Programs = () => {
  return (
    <div className='programs'>
      {/* Program 1: Digital Marketing Services */}
      <div className="program">
        <img src={program_1} alt="Digital Marketing Services"/>
        <div className="caption">
          <img src={program_icon_1} alt="Digital Marketing Icon" />
          <h3>Digital Marketing Services</h3>
          <ul>
            <li>Influencer Marketing</li>
            <li>Meta Marketing</li>
            <li>Content Marketing</li>
            <li>Youtube Marketing</li>
            <li>Affiliate Marketing</li>
          </ul>
        </div>
      </div>

      {/* Program 2: Website Development Services */}
      <div className="program">
        <img src={program_2} alt="Website Development Services"/>
        <div className="caption">
          <img src={program_icon_2} alt="Website Development Icon" />
          <h3>Website Development Services</h3>
          <ul>
            <li>Business Websites</li>
            <li>E-Commerce Websites</li>
            <li>Social Media Websites</li>
            <li>Personal Portfolio Websites</li>
          </ul>
        </div>
      </div>

      {/* Program 3: Graphics Designing Services */}
      <div className="program">
        <img src={program_3} alt="Graphics Designing Services"/>
        <div className="caption">
          <img src={program_icon_3} alt="Graphics Designing Icon" />
          <h3>Graphics Designing Services</h3>
          <ul>
            <li>UI/UX Design for Websites</li>
            <li>UI/UX Design for Mobile Websites</li>
            <li>Logo Design for Startups</li>
            <li>Poster/Flyers Design</li>
          </ul>
        </div>
      </div>

      {/* Program 4: App Development Services */}
      <div className="program">
        <img src={program_4} alt="App Development Services"/>
        <div className="caption">
          <img src={program_icon_1} alt="App Development Icon" />
          <h3>App Development Services</h3>
          <ul>
            <li>E-Commerce Mobile app</li>
            <li>Social Media Mobile app</li>
            <li>Video Calling Mobile app</li>
            <li>2D Gaming Mobile app</li>
          </ul>
        </div>
      </div>

      {/* Program 5: Embedded Systems Design */}
      <div className="program">
        <img src={program_5} alt="Embedded Systems Design"/>
        <div className="caption">
          <img src={program_icon_2} alt="Embedded Systems Icon" />
          <h3>Embedded Systems Design</h3>
          <ul>
            <li> IoT (Internet of Things) Development </li>
            <li>PCB (Printed Circuit Board) Design</li>
            <li>Firmware Development</li>
            <li>Embedded Software Testing and Validation</li>
          </ul>
        </div>
      </div>

      {/* Program 6: Event Management Services */}
      <div className="program">
        <img src={program_6} alt="Event Management Services"/>
        <div className="caption">
          <img src={program_icon_3} alt="Event Management Icon" />
          <h3>Event Management Services</h3>
          <ul>
            <li>Event Planning and Coordination </li>
            <li>Venue Decoration and Setup </li>
            <li>Entertainment and Activities</li>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Programs;
