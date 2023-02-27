import React from 'react'
import Slider from 'react-slick'
import Banners from 'api/banners.json'

export default function Campaigns() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
};

  return (
    <div className='container mx-auto'>
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
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/4/1366/300" alt="" /> 
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/5/1366/500?grayscale" alt="" /> 
          </div>
        </Slider>
    </div>
  )
}