import React from "react";
import styles from "./StandingsItem.module.scss"
import TeamItem from "./TeamItem";

const StandingsItem = ({ group, teams }) => {

   const numAscending = teams?.sort((a, b) => b.pts - a.pts);

   return (
      <div className={styles.wrapper}>
         <p className={styles.group} >Grupa {group}</p>
         <div>
            {<div className={styles.wrapperItem}>
               {
                  numAscending?.map((item, i) => (
                     <TeamItem key={i} {...item} />
                  ))
               }
            </div>
            }

         </div>
      </div>
   )
}

export default StandingsItem