import {NavLink} from "react-router-dom"

import { useState } from "react"

const NavBar = () => {

  const [menu , setMenu] = useState(false)

  const openMenu = () => {
    setMenu(!menu)
  }
    return(
<nav className="text-balance  text-white  z-50">
  {/* Hamburger Menu Button */}
  <button
    onClick={openMenu}
    className="md:hidden sm:block"
    aria-label="Toggle Menu"
    aria-expanded={menu}
  >
    <div className="w-8 h-1 bg-white mb-1"></div>
    <div className="w-8 h-1 bg-white mb-1"></div>
    <div className="w-8 h-1 bg-white"></div>
  </button>

  {/* Navigation Links */}
  <div
    className={`${menu ? "flex" : "hidden"} flex-col items-center absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-800 text-center rounded-md shadow-lg  md:relative md:top-0 md:left-0 md:transform-none md:flex md:flex-row md:items-center md:space-y-0 md:space-x-4 md:bg-transparent md:w-auto`}
  >
    <NavLink to="/" className="block p-4 hover:text-blue-400">
      Home
    </NavLink>
    <NavLink to="/skills" className="block p-4 hover:text-blue-400">
      My Skills
    </NavLink>
    <NavLink to="/projects" className="block p-4 hover:text-blue-400">
      My Projects
    </NavLink>
    <NavLink
      to="/contact"
      className="block p-4 sm:mb-2 sm:hover:text-blue-400 md:bg-blue-600 md:hover:bg-blue-700 hover:scale-105 text-white rounded-md"
    >
      Contact Me
    </NavLink>
  </div>
</nav>





        
    )
}

export default NavBar

