import React from 'react'
import bg from './back.module.css'
import CustomButton from "../atom/customButtons/CustomButton";


export default function Background(props) {
  return (
    <div>
      <div className={bg.background}>
        <img src={props.url} alt="bgimage" />
      </div>
      <div className={bg.content}>
        <h1>{props.heading}</h1>
        <p>{props.desc}</p>
        <p>
          <CustomButton btntxt="Select Your Plan" style={bg.btnselect} />
        </p>
      </div>
    </div>
  )
}
