import React from 'react'
import bg from './back.module.css'
import CustomButton from "../atom/customButtons/CustomButton";
import {Link} from 'react-router-dom'


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
        <Link to ='/'><CustomButton btntxt="Select Your Plan"style={bg.btnselect} /></Link> 
        </p>
      </div>
    </div>
  )
}
