import React from 'react'
import "../assets/Rische-Light.ttf"

function Information() {
  const titleStyle = {
    fontFamily: 'Rische',
    fontWeight: 300,
    fontStyle: 'normal',
  };

  return (
  <section className="pt-20 pb-10 flex lg:pt-[12px] mx-10 lg:pb-30">
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className="w-1/2 pr-5">
              <h2>
                <a
                  className="text-dark mb-4 inline-block text-4xl font-semibold sm:text-4xl lg:text-4xl xl:text-2xl"
                  style={titleStyle}
                >
                Contacto
                </a>
              </h2>
     <div className="flex items-center pt-5 hover:underline">
              <a
              href="https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              >
              <p className="text-body-color text-base mr-2 ">TWITTER</p>      
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
              href='https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar'
              >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
              </svg>
              </a>
       </div>
       <div className="flex items-center pt-5 hover:underline">
              <a
              href="https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              >
              <p className="text-body-color text-base mr-2 ">LINKEDIN</p>      
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
              href='https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar'
              >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
              </svg>
              </a>
       </div>
       <div className="flex items-center pt-5 hover:underline">
              <a
              href="https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              >
              <p className="text-body-color text-base mr-2 ">CURRICULUM</p>      
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
              href='https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar'
              >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
              </svg>
              </a>
       </div>
       <div className="flex items-center pt-5 hover:underline">
              <a
              href="https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              >
              <p className="text-body-color text-base mr-2 ">MAIL</p>      
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
              href='https://www.linkedin.com/in/agustina-o-donnell-958b16244/?originalSubdomain=ar'
              >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
              </svg>
              </a>
       </div>
   </div>
   <div className="w-full lg:w-2/3 lg:pl-5 mt-8 lg:mt-0">
   <h2>
                <a
                  className="text-dark mb-4 inline-block text-4xl font-semibold sm:text-4xl lg:text-4xl xl:text-2xl"
                  style={titleStyle}
                >
               Info
                </a>
              </h2>
              <p className="text-body-color text-base">
              DESCRIPCION Jueza del Tribunal Fiscal de la Nación y docente en UCES, quien disertó sobre "Transparencia y perspectiva de género en el régimen fiscal", un tema que tiene que ver con el uso de la información como generador de políticas públicas, que está pasando mucho en el mundo y en nuestro país también.
              </p>
   </div>
   </div>
   
  </section>
  
  )
}

export default Information