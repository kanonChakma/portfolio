import React from 'react';
import Card from '../Card/Card';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
    return (
        <>
        <div className="my-5">
         <h1 className="text-center all-h1">All Project</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                   <div className="row">
                      {
                          ServiceInfo.map(info=><Card key={info.id} detail={info} ></Card>)
                      }
                   </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Service;