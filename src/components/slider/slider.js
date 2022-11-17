import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import placeholder from '../../Assets/images/placeholder.png'
// Import Swiper styles
import 'swiper/css';
import { MultiImagesUpload } from '../imgUpandShow/multiImages';

  


export default function MySliderSWP() {

 

  return (
    <>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      
    >
      <SwiperSlide> 
          <MultiImagesUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder}  
            // onSelectImagesGallery={(e)=>onSelectImagesGallery(e)}
          /> 
      </SwiperSlide>
      <SwiperSlide> 
          <MultiImagesUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder}  
            // onSelectImagesGallery={(e)=>onSelectImagesGallery(e)} 
          /> 
      </SwiperSlide>
      <SwiperSlide> 
           <MultiImagesUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder}  
            // onSelectImagesGallery={(e)=>onSelectImagesGallery(e)}
           /> 
      </SwiperSlide>
      <SwiperSlide>
          <MultiImagesUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder}  
            // onSelectImagesGallery={(e)=>onSelectImagesGallery(e)} 
          /> 
      </SwiperSlide>
      
    </Swiper>
    
    </>
  );
};