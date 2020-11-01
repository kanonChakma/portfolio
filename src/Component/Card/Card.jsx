import React from 'react';
const Card = (props) => {
    const{name,github,desc,live,img}=props.detail;
    return (
        <>
         <div className="col-md-4 col-10 mx-auto">
             <div className="card">
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                   <div className="d-flex  justify-content-between">
                       <a target='_blank' href={github} className="card-btn">github</a>
                       <a target='_blank' href={live} className="card-btn">live</a>
                   </div>
                </div>
            </div>                     
         </div>
         </>
    );
};

export default Card;