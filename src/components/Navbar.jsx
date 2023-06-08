import {useState} from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="">
    <nav className="w-full flex py-4 px-6 fixed  justify-between items-center bg-white z-[9999] navbar ">
    <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-secondary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
             Agustina O´Donnell
                </a>

    <ul className="list-none sm:flex invisible sm:visible justify-end items-center flex-1">
{navLinks.map ((nav, index) => (
  <li 
  key={nav.id}
  className={`font-poppins
  font-normal cursor-pointer text-[16px]  ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
  >
  <a href={`#${nav.id}`}  style={{ fontFamily: 'Raleway, sans-serif' }}>
    {nav.title}
  </a>
  </li>
))}
    </ul>
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={toggle ? close : menu} alt="" 
      alt="menu"
      className="w-[28px] h-[28px] object-contain "
      onClick={() => setToggle(!toggle)}
      />
    </div>

    <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-[9999] p-6 bg-white absolute top-0 right-0 mx-auto mt-20 h-200  w-full`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                  active === nav.title ? "text-black underline" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a className='border-blue-gray-50'href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

    </nav>
    </div>
  )
}

export default Navbar