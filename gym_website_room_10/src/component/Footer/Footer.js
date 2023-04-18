import React from 'react'
import Styles from './footer.module.css'
import logo from "../images/logo.png";
import {
    TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialTwitter,TiSocialInstagram
} from 'react-icons/ti'
import {RiSendPlaneFill} from 'react-icons/ri'
export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer_box}>
       <div className={Styles.footer_box_social}>
        <img className  ={Styles.logo}src ={logo} alt ="logo" height ={100} width={100}/> 
      
        <div className={Styles.footer_social}>
            <li>
                <TiSocialFacebook/>
            </li>
            <li>
                <TiSocialLinkedin/>
            </li>
            <li>
                <TiSocialTwitter/>
            </li>
            <li>
                <TiSocialYoutube/>
            </li>
            <li>
                <TiSocialInstagram/>
            </li>
        </div>
       </div>
       <div className={Styles.footer_box_discover}>
        <h1>Fitness Information</h1>
       <h4> about our shop</h4>
       <h4>top Sellers</h4>
       <h4>our blog</h4>
       <h4>New Product</h4>
       <h4>Secure Shopping</h4>
       </div>
       <div className={Styles.footer_box_helpCenter}>
        <h1>Help Center</h1>
        <h4>my account</h4>
        <h4>discount</h4>
        <h4>personal information</h4>
        <h4>my address</h4>
        <h4>order history</h4>
        
        
       </div>
       
      </div>
    </div>
  )
}
