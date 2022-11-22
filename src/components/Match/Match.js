import React from "react";
import MatchItem from "./MatchItem/MatchItem";
import styles from "./Match.module.scss"

const Match = (props) => (
   
   <div className={styles.wrapper}>
      {
         props.data.map(item => (
            <MatchItem  {...item} />
         ))
      }
   </div>
)

export default Match