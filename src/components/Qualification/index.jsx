import React, { useState } from 'react'
import "./index.css"
const Qualification = () => {
  const [toggole, setToggole] = useState(true)
  return (
    <section className='section qualification'>  
       <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>
          My Personal Journey
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
            Education
            </div>
            <div className={toggole?'qualification__button button--flex':
            "qualification__button qualification__active button--flex"}
            onClick={()=> setToggole(false)}
            >
            <i className='uil uil-briefcase-alt
            qualification__icon'></i>{" "}
            Experience
            </div>
         </div>

         <div className='qualification__sections'>
            <div className={toggole?'qualification__content qualification__content-active'
            :'qualification__content'}>
              <div className='qualification__data'>
                  <div>
                      <h3 className='qualification__title'>Web design</h3>
                      <span className='qualification__subtitle'>
                      Spain - Institute
                      </span>
                      <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> 2021 - Present
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
                  <h3 className='qualification__title'>Art Director</h3>
                  <span className='qualification__subtitle'>
                      Spain - Institute
                  </span>
                  <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - Present
                  </div>
                  </div>
              </div>
              <div className='qualification__data'>
              <div>
                  <h3 className='qualification__title'>Web development</h3>
                  <span className='qualification__subtitle'>
                  Spain - Institute
                  </span>
                  <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - Present
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
              <h3 className='qualification__title'>UX expart</h3>
              <span className='qualification__subtitle'>
                  Spain - Institute
              </span>
              <div className='qualification__calendar'>
              <i className='uil uil-calendar-alt'></i> 2021 - Present
              </div>
              </div>
            </div>
            </div>
            <div className={toggole?'qualification__content':'qualification__content qualification__content-active'}>
              <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Web design</h3>
                    <span className='qualification__subtitle'>
                    Spain - Institute
                    </span>
                    <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2021 - Present
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
                <h3 className='qualification__title'>Art Director</h3>
                <span className='qualification__subtitle'>
                    Spain - Institute
                </span>
                <div className='qualification__calendar'>
                <i className='uil uil-calendar-alt'></i> 2021 - Present
                </div>
                </div>
              </div>
              <div className='qualification__data'>
            <div>
                <h3 className='qualification__title'>Web development1</h3>
                <span className='qualification__subtitle'>
                Spain - Institute
                </span>
                <div className='qualification__calendar'>
                <i className='uil uil-calendar-alt'></i> 2021 - Present
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
            <h3 className='qualification__title'>UX1 expart</h3>
            <span className='qualification__subtitle'>
                Spain - Institute
            </span>
            <div className='qualification__calendar'>
            <i className='uil uil-calendar-alt'></i> 2021 - Present
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