import React, { useState } from 'react';
import './OddsGrid.css';
import OpenBets from "../OpenBets/OpenBets"; // Import OpenBets component
import { useDispatch } from "react-redux";
import { addBet } from "../../Redux/betsSlice";
import BetControls from "./BetControls"; 

function OddsRow({ team, backOdds, layOdds, onOddsClick }) {
  return (
    <div className="odds-row">
      <div className="team-info">
        <span className="team-name">{team}</span>
      </div>
      {backOdds.map((odd, i) => (
        <div
          key={`back-${i}`}
          className={`odds-cell back-odds ${i === 0 ? 'oneb' : i === 1 ? 'twob' : 'threeb'}`}
          onClick={() => onOddsClick(team, odd, 'Back')}
        >
          <div>{odd}</div>
          <div className="odds-amount">51,274</div>
        </div>
      ))}
      {layOdds.map((odd, i) => (
        <div
          key={`lay-${i}`}
          className={`odds-cell lay-odds ${i === 0 ? 'onel' : i === 1 ? 'twol' : 'threel'}`}
          onClick={() => onOddsClick(team, odd, 'Lay')}
        >
          <div>{odd}</div>
          <div className="odds-amount">5,991</div>
        </div>
      ))}
    </div>
  );
}

export default function OddsGrid() {
  const [selectedBet, setSelectedBet] = useState(null); // Track selected bet
  const [betAmount, setBetAmount] = useState(""); // Track bet amount
  const [minBet, setMinBet] = useState(100); // Minimum allowed bet
  const [maxBet, setMaxBet] = useState(62500); // Maximum allowed bet
  const [isSuspended, setIsSuspended] = useState(false); // Market suspension status

  const dispatch = useDispatch(); // Redux dispatch function

  // Handle odds selection
  const handleOddsClick = (team, odd, type) => {
    if (isSuspended) return;

    if (
      selectedBet &&
      selectedBet.team === team &&
      selectedBet.odd === odd &&
      selectedBet.type === type
    ) {
      // Close BetControls if the same odd is clicked
      setSelectedBet(null);
    } else {
      // Close current BetControls first
      setSelectedBet(null);

      // Open new BetControls after a short delay
      setTimeout(() => {
        setSelectedBet({ team, odd, type });
        setBetAmount(""); // Reset bet amount
      }, 200); // Delay of 200ms
    }
  };

  // Handle bet placement
  const handlePlaceBet = () => {
    if (!selectedBet) return;
    const amount = parseFloat(betAmount);
    if (amount < minBet || amount > maxBet) {
      alert(`Bet amount must be between ${minBet} and ${maxBet}`);
      return;
    }
    const profit = (amount * selectedBet.odd - amount).toFixed(2);
    const newBet = {
      team: selectedBet.team,
      type: selectedBet.type,
      odd: selectedBet.odd,
      stake: amount.toFixed(2),
      profit: profit,
    };

    dispatch(addBet(newBet)); // Dispatch the bet to the Redux store
    setSelectedBet(null); // Clear the selection
  };

  return (
    <div className="odds-grid">
      {/* Header */}
      <div className="odds-header">
        <div className="selections">2 selections</div>
        <div className="back-all">Back all</div>
        <div className="lay-all">Lay all</div>
      </div>

      {/* Odds Rows */}
      <OddsRow
        team="Durbar Rajshahi"
        backOdds={[5.7, 5.6, 5.8]}
        layOdds={[5.8, 5.9, 5.9]}
        onOddsClick={handleOddsClick}
      />
      <OddsRow
        team="Chittagong Kings"
        backOdds={[1.19, 1.2, 1.21]}
        layOdds={[1.22, 1.23, 1.24]}
        onOddsClick={handleOddsClick}
      />

      {/* BetControls */}
      {selectedBet && (
        <BetControls
          selectedBet={selectedBet}
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          onPlaceBet={handlePlaceBet}
          onCancel={() => setSelectedBet(null)}
        />
      )}

      {/* Suspend Button */}
      {isSuspended && <div className="suspend-banner">Market Suspended</div>}
    </div>
  );
}
