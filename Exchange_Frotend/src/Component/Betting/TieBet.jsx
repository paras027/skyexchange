import React from 'react';
import './TieBet.css';

export default function TieBet() {
  return (
    <div className="tie-bet">
      <div className="tie-bet-header">
        Will there be a tie
      </div>
      <div className="tie-bet-content">
        <div className="tie-bet-option">yes</div>
        <div className="tie-bet-odds">12.5</div>
      </div>
    </div>
  );
}

