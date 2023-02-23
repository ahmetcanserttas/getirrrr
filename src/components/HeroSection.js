import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";


export default function HeroSection() {
  
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className=''>
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/13/1366/500" alt=''/>
          </div> 
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/14/1366/500"alt=''/> 
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/15/1366/500" alt=''/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/16/1366/500"alt=''/>
          </div>
        </Slider>
    </div>  
    )
  }

