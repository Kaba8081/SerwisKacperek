import React, {useState} from 'react';
import {close, menu} from '../assets';
import {navLinks} from '../constants';
import styles from '../style';

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex w-full justify-between items-center navbar px-[32px] md:px-[11.25%] pt-14 py-[16px]'>
      <div>
        {/* <img src={logo} alt="SerwisKacperekLogo" className='w-[170px] h-[32px]'/> */}
        <h6 className='font-poppins text-text_color sm:text-[18px]'>Serwis <span className='font-semibold text-gradient'>Kacperek</span></h6>
      </div>

      <ul className='sm:flex hidden items-start gap-x-8 justify-items-center self-center text-text-light'> {/*big navbar*/}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${styles.SemiBoldHeader4} transition duration-250 hover:opacity-75`}
            onClick = {() => setActive(nav.id)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end items-center align-middle'> {/*mobile navbar*/}
          <img 
          src={toggle ? close : menu} 
          alt='menuIcon' 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col flex-1 gap-y-2 justify-end items-start cursor-pointer'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${styles.BaseText} cursor-pointer text-text-light`}
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