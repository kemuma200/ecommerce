import React, { Component } from 'react'
import "../css/mealbox.css"

import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../images/DSC_0008.JPG'
import image2 from '../images/DSC_0010.JPG'
import image3 from '../images/DSC_0011.JPG'
import image4 from '../images/DSC_0156.JPG'



export default class SlideshowText extends Component {
  render () {
    return (
      <div className="slideshow-section">
        <BackgroundSlideshow images={[ image1, image2, image3, image4 ]} />
      </div>
    )
  }
}