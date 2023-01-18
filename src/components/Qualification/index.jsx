import React, { useState } from 'react'
import "./index.css"
const Qualification = () => {
  const [toggole, setToggole] = useState(true)
  return (
    <section className='section qualification'>
      <div className='qualification_inside'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>
      </span>
        <div className='qualification__container container'>
          <div className='qualification__tabs'> 
              <div className={toggole?
                "qualification__button qualification__active button--flex"
                :"qualification__button button--flex"}
                onClick ={()=> setToggole(true)}
                >
              <i className='uil uil-graduation-cap
              qualification__icon'></i>{" "}
               Experience
              </div>
              <div className={toggole?'qualification__button button--flex':
              "qualification__button qualification__active button--flex"}
              onClick={()=> setToggole(false)}
              >
              <i className='uil uil-briefcase-alt
              qualification__icon'></i>{" "}
                Education
              </div>
          </div>

          <div className='qualification__sections'>
              <div className={toggole?'qualification__content qualification__content-active'
              :'qualification__content'}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Junior Full stack developer</h3>
                        <span className='qualification__subtitle'>
                           Sazep pty Ltd
                        </span>
                        <div className='qualification__calendar'>
                           <i className='uil uil-calendar-alt'></i> Sep 2021 - Aug 2022
                         </div>
                    </div>
                    <div>
                      <span className='qualification__rounder'></span>
                      <span className='qualification__line'></span>
                    </div>
                </div>
                <div className='qualification__data'>
                  <div>
                  </div>
                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                    <span className='qualification__line'></span>
                    <span className='qualification__line'></span>
                    <span className='qualification__line'></span>
                    <span className='qualification__line'></span>
                  </div>   
                </div>
              </div>
              <div className={toggole?'qualification__content':'qualification__content qualification__content-active'}>
                <div className='qualification__data'>
                 <div>
                <h3 className='qualification__title'>B.Sc. in Computer Science & Engineering</h3>
                <span className='qualification__subtitle'>
                  - Bangabandhu Sheikh Mujibur Rahman Science & Technology University
                </span>
                <div className='qualification__calendar'>
                 </div>
                 </div>
                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>
                <div className='qualification__data'>
                <div>
                </div>
                <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
                </div>   
                <div>
                  <h3 className='qualification__title'>Higher Secondary Certificate (HSC)</h3>
                  <span className='qualification__subtitle'>
                      - Banophool Adibashi Green Heart College
                  </span>
                  <div className='qualification__calendar'>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>  
    </section> 
  )
}


export default Qualification


// <i className='uil uil-calendar-alt'></i> 2017 - 2022
// <i className='uil uil-calendar-alt'></i> 2013- 2015