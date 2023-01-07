import React, { useState } from 'react';
import "./index.css";

const Header = () => {
  const [toggole, setToggole] = useState(false)
  const[activeNave,setActiveNave] = useState("#home")
  
  window.addEventListener("scroll", function() {
   const header = document.querySelector(".header")
   if(this.scrollY >= 80) header.classList.add("scroll-header");
   else header.classList.remove("scroll-header")
  });
  
  return (
    <header className='header'>
        <nav className='nav container'>
          <a href='index.html' className='nav__logo'>
           Smith
          </a>
          <div className={toggole?"nav__menu show-menu":"nav__menu"}>
            <ul className='nav__list grid'>
                <li className='nav__item'>
                    <a 
                    href="#home" 
                    onClick={()=> setActiveNave("#home")}
                    className={activeNave === "#home"?'nav__link active-link':'nav__link'}>
                    <i className='uil uil-estate nav__icon'></i>Home
                    </a>
                </li>

                <li className='nav__item'>
                    <a 
                    href="#about"
                    onClick={()=> setActiveNave("#about")}
                    className={activeNave === "#about"?'nav__link active-link':'nav__link'}
                    >
                    <i className='uil uil-user nav__icon'></i>About
                    </a>
                </li>

                <li className='nav__item'>
                    <a href="#skills" 
                     onClick={()=> setActiveNave("#skills")}
                     className={activeNave === "#skills"?'nav__link active-link':'nav__link'}
                    >
                    <i className='uil uil-file-alt nav__icon'></i>Skills
                    </a>
                </li>

                <li className='nav__item'>
                    <a 
                    href="#services" 
                    onClick={()=> setActiveNave("#services")}
                    className={activeNave === "#services"?'nav__link active-link':'nav__link'}
                    >
                    <i className='uil uil-briefcase-alt nav__icon'></i>Services
                    </a>
                </li>

                <li className='nav__item'>
                    <a 
                    href="#portfolio" 
                    onClick={()=> setActiveNave("#portfolio")}
                    className={activeNave === "#portfolio"?'nav__link active-link':'nav__link'}
                    >
                    <i className='uil uil-scenery nav__icon'></i>Porfolio
                    </a>
                </li>

                <li className='nav__item'>
                <a 
                href="#contact" 
                onClick={()=> setActiveNave("#contact")}
                className={activeNave === "#contact"?'nav__link active-link':'nav__link'}
                >
                <i className='uil uil-message nav__icon'></i>Contact
                </a>
               </li>
             </ul>
             <i className='uil uil-times nav__close' onClick={() => setToggole(!toggole)}></i>
          </div>
          <div className='nav__toggle' onClick={() => setToggole(!toggole)}>
           <i class="uil uil-apps"></i>
          </div>
        </nav> 
     </header>
  )
}

export default Header