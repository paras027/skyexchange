import React from "react";
import { useSelector } from "react-redux"; // To read data from Redux
import "./OpenBets.css";

const OpenBets = () => {
  const bets = useSelector((state) => state.bets.bets); // Access bets from Redux state

  return (
    <div className="open-bets-container">
      <div className="headeropen">
        <select className="match-dropdown">
          <option>South Africa vs Pakistan - Match Odds</option>
        </select>
      </div>

      <div className="matched-section">
        <div className="section-title">Matched</div>
        <div className="table">
          <div className="table-header">
            <div className="column back-lay">Back/Lay</div>
            <div className="column team-name">Team Name</div>
            <div className="column odds">Odds</div>
            <div className="column stake">Stake</div>
            <div className="column profit">Profit/Liability</div>
          </div>
          {bets.length > 0 ? (
            bets.map((bet, index) => (
              <div
                key={index}
                className={`table-row ${bet.type === "Back" ? "back-row" : "lay-row"}`}
              >
                <div className="column back-lay">{bet.type}</div>
                <div className="column team-name">{bet.team}</div>
                <div className="column odds">{bet.odd}</div>
                <div className="column stake">{bet.stake}</div>
                <div className="column profit">{bet.profit}</div>
              </div>
            ))
          ) : (
            <div className="no-bets-message">No bets placed yet.</div>
          )}
        </div>
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Bet Info
        </label>
        <label>
          <input type="checkbox" /> Time Order
        </label>
        <label>
          <input type="checkbox" /> Consolidate
        </label>
        <label>
          <input type="checkbox" /> Average Odds
        </label>
      </div>
    </div>
  );
};

export default OpenBets;
