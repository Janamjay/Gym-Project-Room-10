import React from "react";
import Background from "../../component/backround/Background";
import cls from "../../component/images/class.jpg";
import styles from "./Classes.module.css";
import {CgProfile} from 'react-icons/cg'
import {BiTimeFive} from 'react-icons/bi'
export default function Classes() {
  const data = [
    {
      id: "1",
      title: "Power Lifting",
      name: "Yarian Yate",
      time: "Friday 10:00 AM",
    },
    {
      id: "2",
      title: "Power Lifting",
      name: "pranav",
      time: "Friday 10:00 AM",
    },
    {
      id: "3",
      title: "Power Lifting",
      name: "karan",
      time: "Friday 10:00 AM",
    },
  ];
  return (
    <div>
      <Background
        url={cls}
        heading="Classes"
        desc="Join Our Classes to be Fit "
      />
      <div className={styles.class}>
        <h1>Class Timing & Programms</h1>
        <hr></hr>
        <p>Find the class timetable for your local club or find out when and where you can do a specific class.</p>
        </div>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div key={item} className={styles.card}>
              <div className={styles.card_title}></div>
              <div className={styles.card_body}>
                <h4>{item.title}</h4>
                <div className={styles.content}>
                  <h5><CgProfile/>{item.name}</h5>
                  <h5><BiTimeFive/>{item.time}</h5>
                </div>
                <button id={styles.btn1}>Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
