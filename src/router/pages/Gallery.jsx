import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Gallery = () => {

  const images = [
    '/gallery/g1.jpg',
    '/gallery/g2.jpg',
    '/gallery/g3.jpg',
    '/gallery/g4.jpg',
    '/gallery/g5.jpg',
    '/gallery/g6.jpg',
    '/gallery/g7.jpg',
    '/gallery/g8.jpg',
    '/gallery/g9.jpg',
    '/gallery/g10.jpg',
  ]


  return (
    <>

      <h1 className="justify-center text-center mt-6  text-xsx font-permanentMarker">  MY Gallery </h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className=" mt-9   border-4 border-dotted border-orange-500 h-auto overflow-hidden bg-black drop-shadow-[0_0_10px_white]  sm:w-1/2  sm:h-1/2cd" >

        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-80 h-80  mt-5 mb-6 ml-8 object-cover drop-shadow-[0_0_10px_orange] sm:w-screen sm:ml-0" />
            </SwiperSlide>
          ))
        }

      </Swiper>

      <h2 className="text-center justify-center font-bold sm:text-xsx">DURING SESSION IMAGES </h2>
      <hr className="text-red-500" />

    </>
  )
}

export default Gallery
