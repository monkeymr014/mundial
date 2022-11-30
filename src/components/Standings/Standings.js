import React from "react";
import StandingsItem from "./StandingsItem";
import styles from "./Standings.module.scss"
 

class Standings extends React.Component {
 
   componentWillMount = () => (
      this.props.getMachDataFn('standings')

   )
   
   render() {
      return (
         <>
         <div className={styles.wrapper} >
            <h1 className={styles.h1}>faza grupowa</h1>
            <div className={styles.wrapperItem}>
               {
                  this.props.data.map((item, i )=> (
                     <StandingsItem key={i} {...item} />
                  ))
               }
            </div>
         </div>
      </>
      )
   }
}


export default Standings