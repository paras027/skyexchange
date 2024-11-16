/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./cardone.css";
const CardOne = ({val}) => {


  return (
    val && <div className='cardone'>
    <div className="firstdiv">
      <div className="matchid">
      {val?.response?.match_id}
      </div>
      <div className="matchname">
      {val?.response?.match_info?.title}
      </div>
      </div>
      <div className="betdiv">
      <div className="bet">
      <div className="blue">
      {val?.response?.live_odds?.matchodds?.teama?.back}
      </div>
      <div className="red">
      {val?.response?.live_odds?.matchodds?.teama?.lay}
      </div>
      </div>
      <div className="bet">
      <div className="blue">{val?.response?.live_odds?.tiedmatch?.teama?.back}</div>
      <div className="red">{val?.val?.response?.live_odds?.tiedmatch?.teama?.lay}</div>
      </div>
      <div className="bet">
      <div className="blue">{val?.response?.live_odds?.matchodds?.teamb?.back}</div>
      <div className="red">{val?.response?.live_odds?.matchodds?.teamb?.lay}</div>
      </div>
      </div>
    </div>
    
  )
}

export default CardOne
