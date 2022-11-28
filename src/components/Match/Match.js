import React from "react";
import MatchItem from "./MatchItem";
import styles from "./Match.module.scss"



class Match extends React.Component {
   componentWillMount = () => (
      this.props.getMachDataFn('match')
   )
   render() {
      return (
         <>
            <div className={styles.wrapper} >
               <h1 className={styles.h1}>faza grupowa</h1>
               <div className={styles.wrapperItem}>
                  {
                     this.props.data.map(item => (
                        <MatchItem key={item._id} {...item} />
                     ))
                  }
               </div>
            </div>
         </>
      )
   }
}


export default Match