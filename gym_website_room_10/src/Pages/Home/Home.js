import React from 'react'
import Conslutant from './consultant/Conslutant'
import Background from '../../component/backround/Background'
import back from "../../component/images/back.jpg";
import BMI from './bmi/BMI';
import Expert from './expert/Expert';
import Price from './price/Price';
import Clientstories from './client stories/Clientstories';

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
      <Expert/>
      <Price/>
      <Clientstories/>
    </div>
  )
}
