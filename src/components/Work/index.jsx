import React from 'react'
import Works from '../Works'
import "./index.css"

const Work = () => {
  return (
    <section className='section work' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span  className='section__subtitle'>
         Most Recent Work
      </span>
      <Works/>
    </section>
  )
}

export default Work