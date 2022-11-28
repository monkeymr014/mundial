import React from "react";

const Team = ({name_en, pts,mp, gf, ga}) => (
   <>
   <p>{name_en}</p>
   <p><b>{pts}</b>
   </p>
   <p>mecze: {mp} bramki:{gf} - {ga} </p>
   </>
)

export default Team