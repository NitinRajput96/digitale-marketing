import React, { useRef } from 'react'
import './Login.css'
import toast, { Toaster } from "react-hot-toast"
import emailjs from '@emailjs/browser';



export const Login = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wbodw5v', 'template_cbauoan', form.current, {
        publicKey: 'Hm0Fg1ykZBC0JsoDu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      toast.success("Submit Successfully");
  };
  return (
   <>
   
     <div className='Container-Log'>
     <Toaster/>
             <form  ref={form} className="frominput" onSubmit={sendEmail}>
                     <div className="head-box">
                       <ul> <h1>Get Quote</h1></ul>
                          <p>Please fil these form if you have any question or query. Our team will get back to help you.</p>
                            <h3>Pricing Starts From 10,000₹</h3>
                     </div>
                     <div className="box">
                        <label className='L-label'>First name</label>
                        <input type="text" name="user_name"  className='in-put' placeholder='Enter Name'/>
                     </div>
                     <div className="box">
                        <label className='L-label'>Contact</label>
                        <input type="text" placeholder='Enter your number '  name='mobile' className='in-put' />
                     </div>
                     <div className="box">
                        <label className='L-label'>Email</label>
                        <input type="email" name="user_email" className='in-put' placeholder='Enter your Email ' />
                     </div>
                     <div className="box">
                        <label className='L-label'>Service</label>
                         <select name="message" className='in-put'>
                            <option>Select</option>
                            <option>Logo Development</option>
                            <option>Lavel Design</option>
                            <option>Digital Marketing</option>
                            <option>Website Development</option>
                            <option>Legal Service</option>
                            <option>SEO</option>
                         </select>
                     </div>
                     <button className='btn-btn-submit' type='submit'>Submit</button>
             </form>

             {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              
              <label>Email</label>
              
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
            </div>
   </>
  )
}
