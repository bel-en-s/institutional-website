import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

 
function Hero() {
  const slides = [
    {
      url: 'https://unsplash.com/es/fotos/jzz_3jWMzHA'
    },
    {
      url: 'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
  ];

  return (
    <div className='max-w[1400px] h-[500px] w-full m-auto py-0 px-0 relative'>
      <div style={{backgroundImage: `url(${slides[2].url})` }}className='w-full h-full rounded-2xl bg-center bg-cover duration'></div>
    </div>
  );
}

export default Hero;
