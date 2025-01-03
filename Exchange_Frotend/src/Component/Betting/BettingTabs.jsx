import React from 'react';
import './BettingTabs.css';

export default function BettingTabs() {
  return (
    <div className="betting-tabs">
      <div className="betting-tabs-header">
        <div className="betting-badges">
          <span className="badge premium-cricket">Premium Cricket</span>
          <span className="badge fancy-bet">Fancy Bet</span>
        </div>
        <div className="betting-input">
          <input type="number" defaultValue="100.00" />
        </div>
      </div>
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Popular</button>
        <button className="tab">Match</button>
        <button className="tab">Innings</button>
        <button className="tab">Over</button>
        <button className="tab">More</button>
      </div>
    </div>
  );
}

