/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./cardone.css";
const CardOne = ({ val }) => {
  const currDate = new Date().toLocaleDateString();
  const [day, month, year] = currDate.split("/"); // Split the date by "/"
  const formattedDate = `${year}-${day}-${month}`
  const dateofstart = val?.date_start_ist;
  const [date, timee] = dateofstart.split(" ");

  console.log(val);

  return (
    val && <div className='cardone'>
      <div className="firstdiv">
        <div className="matchid">
        </div>
        <div className="matchname">
          <div className="match_title">{val?.title}</div>
          <div>{date === formattedDate ? "" : "Tomorrow "} {timee}</div>
        </div>
      </div>
      <div className="betdiv">
        <div className="bet">
          <div className="blue">
            {val?.live_odds?.matchodds?.teama?.back}
          </div>
          <div className="red">
            {val?.live_odds?.matchodds?.teama?.lay}
          </div>
        </div>
        <div className="bet">
          <div className="blue">{val?.live_odds?.matchodds?.draw?.back}</div>
          <div className="red">{val?.live_odds?.matchodds?.draw?.lay}</div>
        </div>
        <div className="bet">
          <div className="blue">{val?.live_odds?.matchodds?.teamb?.back}</div>
          <div className="red">{val?.live_odds?.matchodds?.teamb?.lay}</div>
        </div>
      </div>
    </div>)
}

export default CardOne
