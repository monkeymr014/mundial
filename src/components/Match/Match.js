import React from "react";
import MatchItem from "./MatchItem/MatchItem";
import styles from "./Match.module.scss"



class Match extends React.Component {
   componentDidMount = () => (
      this.props.getMachDataFn()
   )
   render() {
      return (
         <>
            <div className={styles.wrapper} >
               <h1 className={styles.h1}>faza grupowa</h1>
               <div className={styles.wrapperItem}>
                  {
                     this.props.data.map(item => (
                        <MatchItem  {...item} />
                     ))
                  }
               </div>
            </div>
         </>
      )
   }
}


export default Match