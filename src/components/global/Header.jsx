import React from 'react'
import Button from '../parts/Button'
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";


const Header = ({setActive}) => {
  return (
    <header class="flex flex-col sm:flex-row sm:justify-between items-center py-6 bg-black-gradient">
    {/* LOGO */}
    <div class="flex justify-center items-center text-white font-bold p-4">
      <a class="border-4 p-2 border-yellow-500 text-lg sm:text-xl" href="">Artikel Finder</a>
    </div>
    {/* Navabar */}
    <nav class="w-full sm:w-auto flex justify-center sm:justify-end">
      <ul class="flex flex-row justify-center items-center text-white font-medium sm:font-bold space-x-3 sm:space-x-4 p-3 sm:p-4">
        <li>
        <NavLink className={({isActive})=>(`border-4 p-1 sm:p-2 hover:border-red-500 ${isActive ? 'border-green-500':'border-yellow-500'} text-base sm:text-lg`)} to="/">
          <Button >HOME</Button>
        </NavLink> 
        </li>
        <li>
        <NavLink  onClick={setActive}  className={({isActive})=>(`border-4 p-1 sm:p-2 hover:border-red-500 ${isActive ? 'border-green-500':'border-yellow-500'} text-base sm:text-lg`)} to="/about">
          <Button >ABOUT</Button>
        </NavLink> 
        </li>
        <li>
        <NavLink  onClick={setActive}  className={({isActive})=>(`border-4 p-1 sm:p-2 hover:border-red-500 ${isActive ? 'border-green-500':'border-yellow-500'} text-base sm:text-lg`)} to="/about">
          <Button >TEST</Button>
        </NavLink> 
        </li>
        <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ucefdev/"  className="border-4 p-1 sm:p-2 hover:border-red-500 border-yellow-500 text-base sm:text-lg" >
          <Button >AUTHOR</Button>
        </a> 
      
        </li>
        <li>
        <a href=''><FaGithub size={25} /></a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header