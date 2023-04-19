import React from 'react'
import Conslutant from './consultant/Conslutant'
import Background from '../../component/backround/Background'
import back from "../../component/images/back.jpg";
import BMI from './bmi/BMI';

export default function Home() {
  return (
    <div>
      <Background  
      url={back}
      heading="Online Personal Training"
      desc="Maximum Results in Minimum Time, no matter your location"
      />
      <Conslutant/>
      <BMI/>
    </div>
  )
}
