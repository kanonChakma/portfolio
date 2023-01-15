import React from 'react'
import Data from '../Data'
import ScrollDown from '../ScrollDown/ScrollDown'
import Social from '../Social'
import "./index.css"

const Home = () => {
  return (
    <section className='home section' id='home'>
       <div className='inside'>
         <div className='home__container container grid'>
         <div className='home__content grid'>
          <Social/>
          <div className='home__img'></div>
          <Data/>
         </div>
         <ScrollDown/>
         </div> 
      </div>
    </section>
  )
}

export default Home