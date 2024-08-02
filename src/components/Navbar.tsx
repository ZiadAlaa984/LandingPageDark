'use client'
import { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logosaas.png';

export const Navbar = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <>


    <div className='bg-black  w-full'>
      <div className="px-4 bg-black relative">
        <div className='py-4 flex justify-between items-center'>
          <div className='relative flex items-center'>
            <div
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))'
              }}
              className='absolute bottom-0 top-2 left-0 right-0 -z-10' // Cover the full width and position behind
            ></div>
            <Image src={logo} alt='logo' className='w-12 h-12' />
          </div>
          {/* Toggle Button for Mobile Menu */}
          <div className='text-white flex sm:hidden border border-white border-opacity-30 justify-center h-10 w-10 items-center rounded-lg cursor-pointer' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </div>
          {/* Desktop Navigation Menu */}
          <nav className='gap-6 hidden sm:flex items-center'>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>About</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Features</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Updates</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Help</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Customers</a>
            <button className='bg-white py-2 px-4 font-medium rounded-lg'>Get For Free</button>
          </nav>
          {/* Mobile Navigation Menu */}
          <div className={`fixed inset-0 overflow-hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50  py-4 bg-black text-white px-4 transition-transform duration-300 ease-in-out transform sm:hidden`}>
            <nav className='flex flex-col  justify-between gap-6'>
<div
  className='text-white self-end  flex sm:hidden justify-center h-10 w-10 items-center rounded-lg cursor-pointer'
  onClick={toggleMenu}
>
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"  // Ensure stroke is white
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
      stroke="#ffffff" // Ensure stroke is white
    />
  </svg>
</div>

              <a href="#" className=' text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>About</a>
              <a href="#" className=' text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Features</a>
              <a href="#" className=' text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Updates</a>
              <a href="#" className=' text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Help</a>
              <a href="#" className=' text-opacity-60 text-white hover:text-opacity-100 transition-colors duration-300'>Customers</a>
              <button className='bg-white text-black py-2 px-4 font-medium rounded-lg'>Get For Free</button>
            </nav>
          </div>
        </div>
      </div>
      </div>
          
    
    </>
  );
};
