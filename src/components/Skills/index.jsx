import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import "./index.css"

const Skills = ({ref}) => {
  return (
    <section ref={ref} className='skills section' id='skills'>
     <div className='skill_inside'>
     <h2 className='section__title'>Skills</h2>
     <span className='section__subtitle'>
        My technical level
      </span>
      <div className='skills__container container grid'>
        <Frontend/>
        <Backend/>
      </div>
     </div>
    </section>
  )
}

export default Skills