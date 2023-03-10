import React, { useState } from "react"
import Slider from "react-slick"
import { FcGoogle } from 'react-icons/fc';
import "slick-carousel/slick/slick.css";
import ReactFlagsSelect from "react-flags-select"; 


export default function HeroSection() {


  const [selected, setSelected] = useState("TR");
  
  const phones ={
    US:'+1',
    DE:'+49',
    FR:'+33',
    IT:'+39',
    ES:'+34',
    TR:'+90'
  }
  
  
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
      <React.Fragment>
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
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/4/1366/300" alt="" /> 
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://picsum.photos/id/5/1366/500?grayscale" alt="" /> 
          </div>
        </Slider>
          <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
              <div>
                <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' alt='' />
                  <h3 className='text-4xl mt-8 font-semibold text-white'>
                    Dakikalar i??inde <br/> Kap??n??zda
                  </h3>
              </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                  <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giri?? yap veya Kay??t ol</h4>
                  <div className="grid gap-y-3">
                  <div className="flex gap-x-2">
                    <ReactFlagsSelect
                      countries={Object.keys(phones)} 
                      customLabels={phones}
                      placeholder=""
                      onSelect={code => setSelected(code)}
                      selected={"TR"}
                      className="flag-select "
                    />
                    <label className="flex-1 relative group block cursor-pointer">
                      <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"/>
                      <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numaras??</span>
                    </label>
                  </div>
                  <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow a h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                      Telefon numaras?? ile devam et
                  </button>
                    <hr className="h-[1px] bg-gray-300 my-2" />
                    <button className="bg-white drop-shadow-md text-blue-700 text-opacity-80  transition-colors hover:bg-google-blue hover:text-white a h-12 flex items-center justify-between pl-1 w-full text-sm font-semibold">
                      <div className="bg-white flex p-3">
                      <FcGoogle size={20}/>
                     </div>
                     <div>
                     Google ile kaydol
                     </div>
                     <div>
                     {/* Bo??luk */}
                     </div>
                  </button>
                  </div>
                </div>  
            </div>
        </div>  
      </React.Fragment> 
        ) 
  }

