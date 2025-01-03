import React from 'react';
import './MatchHeader.css';

export default function MatchHeader() {
  return (
    <div className="match-header">
      <div className="match-header-content">
        <div className="match-header-left">
          <div className="match-odds">Match Odds</div>
          <div className="in-play-badge">In-Play</div>
        </div>
        <div className="match-header-right">
          <div>Min/Max 100 / 31250</div>
          <div>Matched <span className="matched-amount">IR 760,875,388</span></div>
          <div className="live-badge">Live</div>
        </div>
      </div>
    </div>
  );
}

