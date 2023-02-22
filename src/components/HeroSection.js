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
    <div className="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://fastly.picsum.photos/id/112/1366/500.jpg?hmac=1xbGCSoe9lXk_DCi2QCrb_MyAK_2l0Q8_DrZGGqtWSo" alt=""/>
          </div> 
          <div>
            <img className="w-full h-[500px] object-cover" src="https://fastly.picsum.photos/id/292/1366/500.jpg?hmac=8_V7Y1qVghKhOaHiJrTwfR4O1W9aRgnBAfOzTpSpLls" alt=""/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt=""/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt=""/>
          </div>
        </Slider>
    </div>  
    )
  }

