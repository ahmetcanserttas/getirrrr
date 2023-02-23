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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
      <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/1/1366/500?grayscale" alt="" /> 
          </div>
          <div> 
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/2/1366/500" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/3/1366/500?grayscale" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/4/1366/500" alt="" /> 
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/5/1366/500?grayscale" alt="" /> 
          </div>
        </Slider>
          <div className='container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
              test
          </div>
    </div>  
        )
  }

