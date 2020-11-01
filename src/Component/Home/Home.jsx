import React from 'react';
import img from '../../Image/Rectangle1.png'
import Common from '../Common/Common';
import Particle from '../Particle/Particle';
const Home = () => {
    return(
      <section className="bg-color">
         <Common 
            name="Grow your buisness with"
            img={img}
            visit="/service"
            btnname="Get Started"
            > </Common>
     </section>
    );
};
export default Home;