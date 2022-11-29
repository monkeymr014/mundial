import React from "react";
import styles from "./StandingsItem.module.scss"
import TeamItem from "./TeamItem";

const StandingsItem = ({ group, teams }) => {

   const numAscending = teams?.sort((a, b) => b.pts - a.pts);

   return (
      <div className={styles.wrapper}>
         <p className={styles.group} >Grupa {group}</p>
         
            {<div className={styles.wrapperItem}>
               <div className={styles.pts}><div>Kraj</div> <div>P</div>  <div>W</div>  <div>L</div>  <div>L</div>  <div>Goals </div>  <div>Gd</div>  <div>Pts</div> </div>

               {
                  numAscending?.map((item, i) => (
                     <TeamItem key={i} {...item} />
                  ))
               }
            </div>
            }

         
      </div>
   )
}

export default StandingsItem