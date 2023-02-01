import React from 'react'
import "./ScrollUp.css"
import Link from 'react-scroll/modules/components/Link';

const ScrollUP = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup")
    if(this.scrollY >= 800) scrollup.classList.add("show-scroll")
    else scrollup.classList.remove("show-scroll")
  })

  return (
    <>
       <Link  className='scrollup' to="home" spy={true} smooth={true} offset={-30} duration={500}>
        <i className='uil uil-arrow-up scrollup__icon'>
        </i>
        </Link>
    </>
  )
}

export default ScrollUP