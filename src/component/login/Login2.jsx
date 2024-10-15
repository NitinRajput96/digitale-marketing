import React, { useEffect, useRef } from "react";
import "./Login2.css";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { GiCancel } from "react-icons/gi";
import useLoginPopup from "../../context/logincotext/loginPopup";

import Aos from "aos";
import "aos/dist/aos.css";

export const Login2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wbodw5v", "template_cbauoan", form.current, {
        publicKey: "Hm0Fg1ykZBC0JsoDu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    toast.success("Submit Successfully");
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  const { setLoginToggle, loginToggle } = useLoginPopup();

  return (
    <>
      <div className=" w-full   flex justify-center items-center  absolute  max-[600px]:top-[10%] sm:top-[15%] lg:top-[16%] z-50 text-center " data-aos="fade-up">
        <Toaster />
        <form  
          ref={form}
          className="frominputt bg-black/40 backdrop-blur-md px-8 py-16 text-center  max-[600px]:w-11/12 sm:w-[70%] lg:w-[50%]"
          onSubmit={sendEmail}
        >
          <div
            className="float-right text-white text-2xl relative -top-6 cursor-pointer "
            onClick={() => {
              setLoginToggle(!loginToggle);
            }}
          >
            <GiCancel />
          </div>

          <div className="head-box">
            <ul>
              {" "}
              <h1>Get Quote</h1>
            </ul>
            <p>
              Please fil these form if you have any question or query. Our team
              will get back to help you.
            </p>
            <h3>Pricing Starts From 10,000₹</h3>
          </div>

          <div className="flex justify-center gap-2 mt-14 flex-col items-center">
            <div className="box w-full ">
              <label className="L-label">First name</label>
              <input
                type="text"
                name="user_name"
                className="in-put"
                placeholder="Enter Name"
              />
            </div>
            <div className="box w-full ">
              <label className="L-label">Contact</label>
              <input
                type="text"
                placeholder="Enter your number "
                name="mobile"
                className="in-put"
              />
            </div>
            <div className="box w-full ">
              <label className="L-label">Email</label>
              <input
                type="email"
                name="user_email"
                className="in-put"
                placeholder="Enter your Email "
              />
            </div>
            <div className="box w-full ">
              <label className="L-label">Service</label>
              <select name="message" className="in-put">
                <option>Select</option>
                <option>Logo Development</option>
                <option>Lavel Design</option>
                <option>Digital Marketing</option>
                <option>Website Development</option>
                <option>Legal Service</option>
                <option>SEO</option>
              </select>
            </div>
          </div>
          <button className="btn-btn-submit" type="submit">
            Submit
          </button>
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
  );
};
