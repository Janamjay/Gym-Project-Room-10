import React from "react";
import styles from "./MiddleSection.module.css";
import image1 from "../../images/image-1.png";

export default function MiddleSection() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_section}>
        <div className={styles.left_section}>
          <h1>Facts</h1>
          <h2>141'702 lbs</h2>
          <h3>Fitness Club Client's Fat Lost to Date</h3>

          <h1>Facts</h1>
          <h3>Fitness Club Client's Muscle Gained to Date</h3>

          <h1>Facts</h1>
          <h3>Fitness Club Client's Muscle  to contract or shorten to Date</h3>

          <h1>Facts</h1>
          <h3>Fitness Club Client's Muscle stretch to Date</h3>

          <h1>Facts</h1>
          <h3>Fitness Club Client's Muscle return to original length after streching to Date</h3>
        </div>
        <div className={styles.image}>
          <img src={image1} alt="displaying"></img>
        </div>
      </div>
     </div>
  );
}
