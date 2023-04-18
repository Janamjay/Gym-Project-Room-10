import React, { useState } from "react";
import { Link } from "react-router-dom";
import nav from "./Navbar.module.css";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../images/logo.png";
import back from "../images/back.jpg";
import CustomButton from "../atom/customButtons/CustomButton";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className={nav.main_nav}>
      <nav className={nav.main}>
        <div className={nav.left}>
          <div className={nav.logogym}>
            <img className={nav.logo} src={logo} alt="logo" />
          </div>
        </div>
        <div className={`${show ? nav.Active_Links : nav.right} `}>
          <li className={nav.common}>
            <Link to="/"> Home</Link>
          </li>
          <li className={nav.common}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={nav.common}>
            <Link to="/classes">Classes</Link>
          </li>
          <li className={nav.common}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={nav.common}>
            <Link to="/contact">Contact</Link>
          </li>
          <CustomButton btntxt="Log In" style={nav.btnlog} />
        </div>

        <div className={nav.mobile_navbar_btn}>
          <div>
            {show ? (
              <span className={nav.close} onClick={() => setShow(false)}>
                <CgClose />
              </span>
            ) : (
              <span className={nav.menu} onClick={() => setShow(true)}>
                <CgMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
      <div className={nav.background}>
        <img src={back} alt="bgimage" />
      </div>
      <div className={nav.content}>
        <h1>Online Personal Training</h1>
        <p>Maximum Results in Minimum Time, no matter your location</p>
        <p>
          <CustomButton btntxt="Select Your Plan" style={nav.btnselect} />
        </p>
      </div>
    </div>
  );
}
