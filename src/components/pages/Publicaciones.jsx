import React from 'react'
const  publications= [
    {
      name: 'Reseña del libro de Tulio Rosembuj, Impuesto, Democracia, Coerción y Estado',
      source: 'Fuente, donde está la sentencia o referencia',
      date: '2023',
      link: 'www.elfisco.com',
    },
    {
      name: 'Secreto fiscal y derecho de acceso a la información pública: dos legislaciones que aun falta compatibilizar',
      source: 'Fuente, donde está la sentencia o referencia',
      date: '2022',
      link: 'www.ciat.org/blogciat',
    },
    {
      name: 'Nombre sentencia importante a la cual amos a hacer referencia',
      source: 'Fuente, donde está la sentencia o referencia',
      date: '2011',
      link: 'https://www.google.com/search?q=google&oq=google&aqs=chrome.0.69i59l2j69i60l5.547j0j7&sourceid=chrome&ie=UTF-8',
    },
  ]
  
  function Publicaciones() {
    return (
      <div className="md:block pt-40">
        <h1 className="mx-10 mb-10 max-w-[370px] border-blue-gray-50">
          <a
            href="javascript:void(0)"
            className="justify-items-start lg:justify-items-center text-dark mb-3 inline-block text-4xl font-bold sm:text-5xl lg:text-5xl xl:text-5xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Publicaciones
          </a>
        </h1>
        <h1 className="mx-10 mb-10 max-w-[370px] border-blue-gray-50">
          <a
            className="justify-items-start lg:justify-items-center text-dark mt-1 inline-block text-3xl font-bold sm:text-3xl lg:text-3xl xl:text-3xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Libros
          </a>
        </h1>
        <li className="flex mx-10 flex-col sm:flex-row my-6 justify-between gap-x-4 py-5 px-4 divide-gray-100 border-t border-gray-300">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-lg  font-semibold leading-6 text-gray-900">"Acceso a la información pública y secreto fiscal, ¿es posible un secreto fiscal más democrático?"</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">Editorial Ediar, Bs.As., 2022 </p>
                  <div className="flex items-center hover:underline mt-4">
              <a
                    href="https://www.ediar.com.ar/prod.php?col=612&sec="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                <p className="text-body-color text-base mr-2">VER</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
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
              </div>
            </li>
            <h1 className="mx-10 mb-10 max-w-[370px] border-blue-gray-50">
          <a
            className="justify-items-start lg:justify-items-center text-dark mb-1 inline-block text-3xl font-bold sm:text-3xl lg:text-3xl xl:text-3xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
           Artículos de doctrina
          </a>
        </h1>
        <ul role="list" className="">
          {publications.map((post) => (
            <li className="flex mx-10 flex-col sm:flex-row my-6 justify-between gap-x-4 py-5 px-4 divide-gray-100 border-t border-gray-300">
              <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                {post.date}
              </h3>
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{post.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{post.source}</p>
                </div>
              </div>
              <div className="flex items-center hover:underline mt-4">
              <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                <p className="text-body-color text-base mr-2">VER</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default Publicaciones