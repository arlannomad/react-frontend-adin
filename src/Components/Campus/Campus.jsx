import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
// import brothers from '../../assets/brothers.jpg'
import gazoblok_almaty from '../../assets/gazoblok-almaty-foto.jpg'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
      </div>
      {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}
    </div>
  )
}

export default Campus
