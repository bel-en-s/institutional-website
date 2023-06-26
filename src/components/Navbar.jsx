import {useState} from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from "react-router-dom"


function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="">
    <nav className="w-full flex py-4 px-6 fixed  justify-between items-center bg-white z-[9999] navbar ">
    <Link
    to = "/"
    onClick={() => {
      setToggle(false); // Close sidebar on link click
    }}
    className="text-dark hover:text-secondary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
    >
    Agustina O´Donnell
   </Link>
   <ul className="list-none sm:flex invisible sm:visible justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins pl-4 font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-black underline" : "text-black"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
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
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-black underline" : "text-black"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false); // Close sidebar on link click
                      }}
                    >
                 <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

    </nav>
    </div>
  )
}

export default Navbar