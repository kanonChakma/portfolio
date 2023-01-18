import React, { useState } from 'react';
import Link from 'react-scroll/modules/components/Link';
import "./index.css";


const Header = ({navHeader}) => {
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
        
          <div className={toggole?"nav__menu show-menu":"nav__menu"}>
            <ul className='nav__list grid'>
                <li className='nav__item'>
                   <Link activeClass={activeNave} className={activeNave === "#home"?'nav__link active-link':'nav__link'}  to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={()=> setActiveNave("#home")}>
                     <i className='uil uil-estate nav__icon'></i>Home
                   </Link>
                </li>

                <li className='nav__item'>
                    <Link activeClass={activeNave} className={activeNave === "#skills"?'nav__link active-link':'nav__link'} to="skills" spy={true} smooth={true} offset={-30} duration={500} onClick={()=>setActiveNave("#skills")}>
                        <i className='uil uil-file-alt nav__icon'></i>Skills
                    </Link>
                </li>

                <li className='nav__item'>
                   <Link activeClass={activeNave} className={activeNave === "#qualification"?'nav__link active-link':'nav__link'} to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setActiveNave("#services")}>
                        <i className='uil uil-briefcase-alt nav__icon'></i>Qualification
                   </Link>
                </li>

                <li className='nav__item'>
                   <Link activeClass={activeNave} className={activeNave === "#portfolio"?'nav__link active-link':'nav__link'} to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setActiveNave("#portfolio")}>
                       <i className='uil uil-scenery nav__icon'></i>Projects
                   </Link>
                </li>

                <li className='nav__item'>
                   <Link activeClass={activeNave} className={activeNave === "#contact"?'nav__link active-link':'nav__link'} to="contact" spy={true} smooth={true} offset={-10} duration={500} onClick={()=>setActiveNave("#contact")}>
                       <i className='uil uil-message nav__icon'></i>Contact
                  </Link>
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

 /*
  <Link to='home' href='index.html' className='nav__logo'>
           Kanon
          </Link>
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
 */