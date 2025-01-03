import React from "react";
import "./BetControls.css";

const BetControls = ({
  selectedBet,
  betAmount,
  setBetAmount,
  onPlaceBet,
  onCancel,
}) => {
  const backgroundColor = selectedBet.type === "Back" ? "#d9edf7" : "#ffe6e6"; // Light blue for Back, Light red for Lay

  return (
    <div
      className="bet-controls-container"
      style={{ backgroundColor }} // Apply dynamic background color
    >
      <div className="top-row">
        <label className="accept-odds">
          <input type="checkbox" /> Accept Any Odds
        </label>
        <div className="actions">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <input
            type="number"
            className="bet-amount"
            placeholder="Enter Amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
          <button className="place-bets-button" onClick={onPlaceBet}>
            Place Bets
          </button>
        </div>
      </div>
      <div className="bottom-row">
        <button className="quick-amount" onClick={() => setBetAmount("1000")}>
          1000
        </button>
        <button className="quick-amount" onClick={() => setBetAmount("10000")}>
          10000
        </button>
        <button className="quick-amount" onClick={() => setBetAmount("30000")}>
          30000
        </button>
        <button className="quick-amount" onClick={() => setBetAmount("100000")}>
          100000
        </button>
        <button className="quick-amount" onClick={() => setBetAmount("300000")}>
          300000
        </button>
        <button className="quick-amount" onClick={() => setBetAmount("500000")}>
          500000
        </button>
      </div>
    </div>
  );
};

export default BetControls;
