import React from "react";
import RightArrow from './right.png'

function Nav() {
    return(
        <div>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
  
  <div className="flex justify-center items-center space-x-1">
  <img className='size-5 mt-[1px]  rotate-180' src={RightArrow} alt='>' />
    <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="http://localhost:3001" aria-label="Brand">Emoji.io</a>
    </div>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-medium text-blue-500 focus:outline-none" href="http://localhost:3001" aria-current="page">Home</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="/categories">Categories</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="/about">About-us</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="/contact">Contact-us</a>
    </div>
  </nav>
</header>

        </div>
    );
}
export default Nav