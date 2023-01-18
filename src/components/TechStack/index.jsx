import React from 'react'
import css from "../../assets/css.png"
import git from "../../assets/git.png"
import html from "../../assets/html.png"
import js from "../../assets/js.png"
import mongo from "../../assets/mongo.jpg"
import mui from "../../assets/mui.png"
import node from "../../assets/nodejs.jpg"
import py from "../../assets/python.png"
import react from "../../assets/react.png"
import sql from "../../assets/sql.png"
import ts from "../../assets/ts.png"
import "./index.css"




const index = () => {
  return (
  <section className='section' id="skills">
  <div className='tech__inside'>
   <h2 className='section__title'>Skills</h2>
    <span className='section__subtitle'>
    </span>
    <div className='tech__container container grid'>
        <div className='tech__info'>
            <img className='tech-image' src={html} alt="tect-images"/>
            <span className='tech__title'> html</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={css} alt="tect-images"/>
        <span className='tech__title'> css</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={js} alt="tect-images"/>
        <span className='tech__title'> JavaScript</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={react} alt="tect-images"/>
        <span className='tech__title'> React.js </span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={node} alt="tect-images"/>
        <span className='tech__title'> Node.js</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={mongo} alt="tect-images"/>
        <span className='tech__title'> MongoDB</span>
        </div>
        <div className='tech__info'>
        <img className='tech-image' src={mui} alt="tect-images"/>
        <span className='tech__title'> Material-UI</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={git} alt="tect-images"/>
        <span className='tech__title'> Git</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={py} alt="tect-images"/>
        <span className='tech__title'> Python</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={ts} alt="tect-images"/>
        <span className='tech__title'> TypeScript</span>
        </div>
        <div  className='tech__info'>
        <img className='tech-image' src={sql} alt="tect-images"/>
        <span className='tech__title'> SQL</span>
        </div>
        </div>
    </div>
  </section>
  )
}

export default index