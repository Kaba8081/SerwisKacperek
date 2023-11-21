import React, {useState} from 'react';
import {close, menu} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* <img src={logo} alt="Serwis Kacperek" className='w-[170px] h-[32px]'/> */}
      <h6 className='font-poppins text-text_color sm:text-[18px]'>Serwis <span className='font-semibold text-gradient'>Kacperek</span></h6>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'> {/*big navbar*/}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} ${active === nav.id ? "text-text_color" : "text-dimWhite"} `}
            onClick = {() => setActive(nav.id)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'> {/*mobile navbar*/}
          <img 
          src={toggle ? close : menu} 
          alt='menu' 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'} ${active === nav.id ? "text-text_color" : "text-dimWhite"} `}
                  onClick = {() => setActive(nav.id)}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
)};


export default Navbar