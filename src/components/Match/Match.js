import React from "react";
import MatchItem from "./MatchItem/MatchItem";

const Match = (props) => (
   
   <ul>
      {
         props.data.map(item => (
            <MatchItem  {...item} />
         ))
      }
   </ul>
)

export default Match