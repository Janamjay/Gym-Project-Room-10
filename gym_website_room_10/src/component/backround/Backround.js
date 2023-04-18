import React from 'react'
import back from "../images/back.jpg";
import bg from './back.module.css'
import CustomButton from "../atom/customButtons/CustomButton";

export default function Backround() {
  return (
    <div>
      <div className={bg.background}>
        <img src={back} alt="bgimage" />
      </div>
      <div className={bg.content}>
        <h1>Online Personal Training</h1>
        <p>Maximum Results in Minimum Time, no matter your location</p>
        <p>
          <CustomButton btntxt="Select Your Plan" style={bg.btnselect} />
        </p>
      </div>
    </div>
  )
}
