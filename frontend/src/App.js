import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Header, Skills,Testimonial} from './container'
import "./App.scss"

const App = () => {
  return (
    <div  className="app">
       <Navbar/>
       <Header/>
       <Skills/>
       <Testimonial/>
    </div>
  )
}

export default App