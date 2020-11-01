import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Image/circle-cropped.png'
const About = () => {
    return (
        <section id="header">
        <div  className="container-fluid d-flex align-items-center">
            <div className="row mt-5">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 flex-column d-flex justify-content-center p-5 pt-lg-0 order-2 order-lg-1 ">
                        <img src={img} className=" about-img" alt=""/>
                        <p className="about-text">Hello,i am kanon chakma. <br/>I am passionate about web technology.My goal is to become a fullstack developer</p>
                        <div className="skill d-flex">
                           <NavLink to="/contact"><p>Contact</p></NavLink>
                           <NavLink to="/"><p>Git hub</p></NavLink>
                      </div>
                 </div>
               <div className="col-md-6 order-lg-2 order-1">
                 <h1 className="text-center mb-5">TECHNICAL SKILLS</h1>
                  <h3 className="skill-h3">Web Technologies</h3>
                  <div className="skill d-flex">
                      <p>React.js</p>
                      <p>Node.js</p>
                      <p>Bootstrap</p>
                      <p>HTML</p>
                      <p>CSS3</p>
                      <p> MaterialUI</p>
                      <p>SASS</p>
                  </div>
                <h3  className="skill-h3">Programming Language</h3>
       	     <div className="skill d-flex">
                  <p>C</p>
                 <p>C++</p>
                 <p>Javascript</p>
                 <p>PHP</p>
               </div>
               <h3>Database</h3>
       	     <div className="skill d-flex">
                 <p>MongoDB</p>
                 <p>SQL</p>
               </div>
               <h3  className="skill-h3">IDEs</h3>
      	     <div className="skill d-flex">
                  <p>VScode</p>
                  <p>CodeBlocks</p>
                  <p>Sublime</p>
               </div>
               <h3  className="skill-h3">Tools</h3>
               <div className="skill d-flex">
                      <p>Git</p>
                      <p>Dev Tools</p>
                      <p>Bootstrap</p>
                      <p>Heroku</p>
                      <p>Netlify</p>
                      <p> Photoshop</p>
                  </div>
                 </div>
                </div>
              </div>
            </div>
         </div>
     </section>
    );
};

export default About;