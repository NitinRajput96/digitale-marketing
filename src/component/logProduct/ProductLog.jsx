import React from 'react'
import './Log.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import ObjectD from '../object/ObjectD.json'

export const ProductLog = () => {
  return (
    <>
    <div className="conatiner">
    <div className="getDeatils">
          <div>  <h2>Want to increase height?</h2>
           <h4>Enter your Name & Contact Below and click The</h4>
           <h4><span className='hed-11'>Submit Button...</span></h4></div>
           <div className="div-icon"> <FaLongArrowAltDown/></div>
    </div>
          <form action="" className="forminput">
                <h4 className='heading'>High Up से अपनी लम्बाई बढ़ाने के लिए अपना नाम और नंबर यहाँ लिखिए
</h4>
                <div className="int-box">
                  <label htmlFor="">Enter your Name</label>
                  <input type="text" placeholder='Name' className='input12'/>
                </div>
                <div className="int-box">
                  <label htmlFor="">Enter your Contact Number</label>
                  <input type="text" placeholder='Contact Number' className='input12'/>
                </div>
                <div className="int-box">
                  <label htmlFor="">Select your City</label>
                  <select name="" id="" className='input12'>
                {
                  ObjectD.city.map((item,i)=>
                    
                    <option value={item.place}>{item.place}.</option>
                  )
                }
                </select>
                </div>



                <div className="int-box">
                     <button>Submit</button>
                </div>
          </form>
          <div className="rate-view ">
             फ़ायदा ना होने पर पुरे पैसे वापस राइट
             <div className="imgdiv">
                  <h5>Review 4.5⭐</h5>
             </div>
          </div>
    </div>
  </>
  )
}
