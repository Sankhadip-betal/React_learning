import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import '../index.css';

export default function Header() {
  return (
    <>
    <header className="border-b border-gray-300 sticky top-0 z-30 bg-gray-100">
      <div className="flex justify-between text-center max-w-[1125px] px-3 py-4">
       <a href="/" className="text-center text-lg font-primary font-semibold text-purple-800 py-2">
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold ">Eazy Stickers</span>
        </a>
      
        <nav className='flex items-center py-2 z-10'>
          <ul className='flex space-x-6'>
            <li>
              <a href="/Home" className="text-center text-lg font-primary font-semibold text-purple-800 py-2">
                Home
              </a>
            </li>
         
           <li>
              <a href="/About" className="text-center text-lg font-primary font-semibold text-purple-800 py-2">
                About
              </a>
            </li>
          
            <li>
              <a href="/Contact" className="text-center text-lg font-primary font-semibold text-purple-800 py-2">
                Contact
              </a>
            </li>
          
            <li>
              <a href="/Login" className="text-center text-lg font-primary font-semibold text-purple-800 py-2">
                  
          <span className="font-semibold ">login</span>
           <FontAwesomeIcon icon={faShoppingBasket} className="h-8 w-8" />
          
              </a>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
    </>
  )
}




