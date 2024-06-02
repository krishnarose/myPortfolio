import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">MyLogo</a>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full">
          <ul className="lg:flex lg:justify-between text-white lg:space-x-4">
            <li><a href="/" className="block lg:inline-block py-2 px-4">Home</a></li>
            <li><a href="/about" className="block lg:inline-block py-2 px-4">About</a></li>
            <li><a href="/services" className="block lg:inline-block py-2 px-4">Services</a></li>
            <li><a href="/contact" className="block lg:inline-block py-2 px-4">Contact</a></li>
          </ul>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed right-0 top-0 w-40  bg-gray-800 shadow-lg p-4 z-50">
          <button onClick={toggleMenu} className="text-white mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="text-white">
            <li><a href="/" className="block py-2 px-4">Home</a></li>
            <li><a href="/about" className="block py-2 px-4">About</a></li>
            <li><a href="/services" className="block py-2 px-4">Services</a></li>
            <li><a href="/contact" className="block py-2 px-4">Contact</a></li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
