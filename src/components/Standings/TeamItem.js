import React from "react";
import styles from "./TeamItem.module.scss"

const Team = ({ name_en, w, l, d, pts, mp, gf, gd, ga }) => (
   <>
      <div className={styles.wrapper}>
         <div className={styles.pts} ><div>{name_en} </div> <div>{mp} </div> <div>{w} </div> <div>{d} </div> <div>{l} </div> <div>{gf}:{ga} </div> <div>{gd}</div> <div>{pts}</div></div>
      </div>
   </>
)

export default Team