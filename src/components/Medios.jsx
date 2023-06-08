import React from 'react'
const people = [
    {
      name: 'Nombre sentencia importante a la cual amos a hacer referencia',
      email: 'Fuente, donde está la sentencia o referencia',
      role: '2011',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Sentencia2',
      name: 'Nombre sentencia importante a la cual amos a hacer referencia',
      email: 'Fuente, donde está la sentencia o referencia',
      role: '2011',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Nombre sentencia importante a la cual amos a hacer referencia',
        email: 'Fuente, donde está la sentencia o referencia',
        role: '2011',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
  ]
  
function Medios() {
    return (
 <div >
       <h1 className="mx-auto mb-10 max-w-[370px]">
                <a
                  href="javascript:void(0)"
                  className="text-dark mb-6 inline-block text-4xl font-semibold sm:text-2xl lg:text-2xl xl:text-2xl"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
               Sentencias
                </a>
              </h1>
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li className="flex my-6 justify-between gap-x-4 py-5 px-4">
               <div className="sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            </div>
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            </div>
            <div className="flex items-center hover:underline">
                    <p className="text-body-color text-base mr-2 ">PDF</p>
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
            </div>
          </li>
        ))}
      </ul>
      </div>
    )
  }
  

export default Medios