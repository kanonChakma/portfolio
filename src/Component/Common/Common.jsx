import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedIn } from '@fortawesome/free-solid-svg-icons'
const Common = ({name,btnname,visit,img}) => {
    return (
      <section id="header">
        <div  className="container-fluid d-flex align-items-center">
            <div className="row mt-5">
              <div className="col-10 mx-auto">
                <div className="row">
                <Fade left>
                <div className="col-md-6 flex-column d-flex justify-content-center pt-5 pt-lg-0 order-2 order-lg-1 ">
                      <h4 className="head-h4">Hi!I am <br/> <span className="header-brand">Kanon Chakma</span></h4>
                        <h2 className="head-h2">Web Developer</h2>
                        <p className="head-p">I am passionate about web technology.I am working with reactJs and Node.js.My goal is to become a fullstack web developer</p>
                     <div className="my-3">
                        <NavLink className="get-started" to='/contact'>Contact</NavLink>
                     </div>
                 </div>
                </Fade>
                <Fade right>
                 <div className="col-md-6 order-lg-2 order-1 header-img">
                    <img src={img} className="img-fluid animated" alt=""/>
                 </div>
                 </Fade>
                </div>
              </div>
            </div>
         </div>
     </section>
    );
};
export default Common;