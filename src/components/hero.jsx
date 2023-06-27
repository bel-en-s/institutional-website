import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";
import landing from "../assets/agus-landing.jpg"
import { Information } from '.';import { CV } from '.';
import "../assets/Rische-Light.ttf"
import "../index.css"

 
function Hero() {
  const titleStyle = {
    fontFamily: 'Rische',
    fontWeight: 300,
    fontStyle: 'normal',
  };

  return (
    <div className='max-w-[1400px] pt-20 mb:block w-full m-auto flex flex-wrap justify-center'>
      <div className='w-full sm:w-[60%] mt-0 flex justify-left'>
        <img src={landing} className='h-200 sm:h-[700px]' style={{ objectFit: 'cover', objectPosition: 'center' }}></img>
      </div>
      <div className='w-full h-20 sm:w-[40%] sm:mt-80 text-center'>
        <h1 style={titleStyle} className='text-2xl sm:text-6xl'>AGUSTINA O'DONNELL</h1>
        <br />
        <h2 className='text-lg sm:text-xl'>FISCAL</h2>
        <h2>Jueza del Tribunal Fiscal de la Nación</h2>
        <h2>Docente en UCES</h2>
      </div>
      <Information/>
      <CV/>
     
    </div>

     

  );
}

export default Hero;
