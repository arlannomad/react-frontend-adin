import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Describe your ideas and then watch them transform from text to images. 
          Whether you want to create ai generated art for your next presentation or poster, 
          or generate the perfect photo, Image Creator in Microsoft Designer can effortlessly 
          handle any style or format.</p>
          <p>Describe your ideas and then watch them transform from text to images. 
          Whether you want to create ai generated art for your next presentation or poster, 
          or generate the perfect photo, Image Creator in Microsoft Designer can effortlessly 
          handle any style or format.</p>
          <p>Describe your ideas and then watch them transform from text to images. 
          Whether you want to create ai generated art for your next presentation or poster, 
          or generate the perfect photo, Image Creator in Microsoft Designer can effortlessly 
          handle any style or format.</p>
      </div>
    </div>
  )
}

export default About
