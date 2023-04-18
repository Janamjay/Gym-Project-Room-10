import React from "react";
import Styles from "./Card.module.css";
import { FiPlay } from "react-icons/fi";
export default function Card() {
  const Data = [
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      src: "./images/img1.jpg",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
  ];
  return (
    <div className={Styles.main}>
      <h1>REAL PEOPLE .REAL SUCCESS STORY</h1>
      <hr></hr>
      <p className={Styles.para}>
        Powered by a transformative bussiness model,propretary technology,tried
        and tested methodology,and tested methodology ,and some of the best
        fitness industry brains in the world .we,ve rewritten the rules and
        changed the game
      </p>
      <div className={Styles.mainBody}>
        {Data.map((item) => {
          return (
            <div className={Styles.container}>
              <div className={Styles.image}>
                <img src={item.src} />
                <div className={Styles.button}>
                  <div className={Styles.before}>{item.before}</div>
                  <div className={Styles.after}>{item.after}</div>
                </div>
                <div className={Styles.card_title}>
                  <h3>{item.name}</h3>
                  <div className={Styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
                <button className={Styles.story}>
                  {item.story} <FiPlay />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
