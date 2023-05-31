import {useState} from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex py-6  justify-between items-center bg-white z-[9999] navbar ">
    <h1 className="w-[124px] h-[32px]">Agustina Oddonell</h1>

    <ul className="list-none sm:flex invisible sm:visible justify-end items-center flex-1">
{navLinks.map ((nav, index) => (
  <li 
  key={nav.id}
  className={`font-poppins
  font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
  >
  <a href={`#${nav.id}`}>
    {nav.title}
  </a>
  </li>
))}
    </ul>
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={toggle ? close : menu} alt="" 
      alt="menu"
      className="w-[28px] h-[28px] object-contain"
      onClick={() => setToggle(!toggle)}
      />
    </div>

    <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-[9999] p-6 bg-black absolute top-0 right-0 mx-auto my-40 min-w-[400px] h-200 sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

    </nav>
  )
}

export default Navbar