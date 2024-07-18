import React from 'react';
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, facere inventore voluptatibus eos deleniti cumque sit praesentium quis a? Mollitia.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, maiores?</p>
      </div>
      
    </div>
  )
}

export default About
