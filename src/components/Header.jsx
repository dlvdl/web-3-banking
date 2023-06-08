import { React, useState } from 'react'
import { navLinks } from '../constants/index'
import { logo, menu, close } from '../assets/index'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="w-full flex justify-between items-center py-6">
      <img className="w-[124px] h-[32px]" src={logo} alt="" />

      <ul className="text-dimWhite gap-10 list-none items-center justify-end sm:flex hidden">
        {navLinks.map((link, i) => (
          <li className="font-poppins" key={link.id}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={!showMenu ? menu : close}
          alt="#"
          onClick={(e) => setShowMenu(!showMenu)}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
      </div>

      {showMenu && (
        <div className="absolute top-20 right-0 bg-black-gradient p-6 rounded-xl sidebar mx-3 my-2 min-w-[140px]">
          <ul className="text-dimWhite flex flex-col">
            {navLinks.map((link, i) => (
              <li className="font-poppins" key={link.id}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
