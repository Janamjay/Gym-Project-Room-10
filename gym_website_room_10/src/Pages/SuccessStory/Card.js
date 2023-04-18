import React from 'react'
import Styles from './Card.module.css';
import mary from '../../images/img1.jpg'
import { FiPlay } from "react-icons/fi";
export default function Card() {
  return (
    <div className={Styles.main}>
      <h1>REAL PEOPLE .REAL SUCCESS STORY</h1>
      <hr></hr>
      <p className={Styles.para}>
        Powered by a transformative bussiness model,propretary technology,tried and tested methodology,and tested methodology
        ,and some of the best fitness industry brains in the world .we,ve rewritten the rules and changed the game
      </p>
      <div className={Styles.container}>
        <div className={Styles.image}>
          <img src={mary} alt='mary' />
          <div className={Styles.button}>
            <button className={Styles.btn}>Before</button>
            <button className={Styles.btn}>After</button>
          </div>
          <div className={Styles.card_title}>
            <h3>Marry</h3>
            <div className={Styles.description}>
              <p>lost 31 lbs.* & 55 lbs.*</p>
            </div>
          </div>
        </div>

      </div>
      <button className={Styles.story}>Marry's Story <FiPlay /></button>
    </div>
  )
}
