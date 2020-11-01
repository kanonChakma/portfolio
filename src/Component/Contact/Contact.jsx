import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
    
    }; 
    return (
      <section className="form-bg">
         <h1>CONTACT ME</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="name"  ref={register} />
        <label>Mail</label>
        <input
          name="mail"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <label className="mt-3">Message</label>
        <div  className="mt-1">
             <textarea ref={register} cols={41} style={{border: '2px solid',padding: '10px'}} rows={4}/>
        </div>
        <div className="d-flex justify-content-center">
            <input type="submit" value="SEND" className="d-flex justify-content-center" />
        </div>
       
      </form> 
      </section>
    );
};

export default Contact;