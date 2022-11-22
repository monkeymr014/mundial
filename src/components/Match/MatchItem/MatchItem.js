import React from "react";
import styles from "./MatchItems.module.scss"

const MatchItems = ({ away_team_en, home_team_en, home_score, away_score, time_elapsed, away_flag, home_flag }) => {


   return (
      <div className={styles.wrapper}>
         
         <div 
          className={time_elapsed == "finished" ? styles.wrapper_match_finish : time_elapsed === "notstarted" ? styles.wrapper_match_notstarted : styles.wrapper_match_h } >
            <div className={styles.wrapper_flag}>
               <img src={away_flag} /> <img src={home_flag} />
            </div>
            <div className={styles.countres}>
               {away_team_en} - {home_team_en}
            </div>
            <div className={styles.result}>
               {away_score} : {home_score}
            </div>
            <span></span>
         </div>
      </div>
   )
}

export default MatchItems