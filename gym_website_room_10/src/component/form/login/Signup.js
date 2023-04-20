import React, { useEffect, useState } from "react";
import CustomInput from "../../atom/customInputs/CustomInput";
import CustomButton from "../../atom/customButtons/CustomButton";
import style from "./Login.module.css";
import { Link , useNavigate } from "react-router-dom";
import Background from "../../backround/Background";
import signup from "../../images/signup.jpg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [userDatas, setUserDatas] = useState([]);

  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setLocalStorageData(JSON.parse(data));
    }
  }, []);

  function handleSignUp() {

    console.log("clicked")
    const userInfo = {
      email: email,
      password: password,
      userName: userName,
    };

    // validation
    if (email.includes("@") && password.length >= 4 && password.length <= 8) {
      setLocalStorageData((prevData) => [...prevData, userInfo]);
      console.log(localStorageData)
      localStorage.setItem(
        "userData",
        JSON.stringify([...localStorageData, userInfo])
      );
      alert("Succesfully Registered!!");
      navigate("/login");
    }
     else {
      alert("Please enter valid details");
    }

    setEmail("");
    setPassword("");
    setUserName("");
  }
 

  return (
    <>
      <Background
        url={signup}
        heading="SIGNUP PAGE"
        desc="SIGNUP WITH US CONNECT TO US"
      <div className={style.wrap}>
        <h3>Signup Page</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          style={style.button}
          onClick={handleSignUp}
          btntxt="SignUp"
        />
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
        <CustomButton style={style.button} onClick={handleSignUp} btntxt="SignUp" />
        <p>Already registered? <Link to="/login"> Login</Link></p>
      </div>
    </>
  );
}
