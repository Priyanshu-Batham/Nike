import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${isOpen?'fixed bg-white':'absolute'} w-full top-0 left-0 z-50`}>
      <header className="padding-x py-8 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16  max-lg:hidden">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.label}>
                  <a
                    href={navLink.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray "
                  >
                    {navLink.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden max-lg:block" onClick={()=>setIsOpen((prev)=>prev=!prev)}>
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
      <ul className={`hidden max-lg:flex bg-white w-full h-lvh flex-col items-center gap-5 pt-[300px] transition-transform ${isOpen?'translate-x-0':'translate-x-[-100%]'}`}>
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.label} className="bg-coral-red px-3 py-1 rounded-full">
              <a
                onClick={()=>setIsOpen(false)}
                href={navLink.href}
                className="font-montserrat leading-normal text-lg text-white font-semibold"
              >
                {navLink.label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Nav;
