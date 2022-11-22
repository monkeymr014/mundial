import React from "react";
import MatchItem from "./MatchItem/MatchItem";
import styles from "./Match.module.scss"

const Match = (props) => (
   
   <ul className={styles.wrapper}>
      {
         props.data.map(item => (
            <MatchItem  {...item} />
         ))
      }
   </ul>
)

export default Match