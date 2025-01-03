import React from 'react';
import './BookmakerMarket.css';

export default function BookmakerMarket() {
  return (
    <div className="bookmaker-market">
      <div className="bookmaker-header">
        <div className="bookmaker-title">Bookmaker Market | Zero Commission</div>
        <div className="bookmaker-limits">
          <div className="limit">
            <span>Min</span>
            <span className="limit-value">100.00</span>
          </div>
          <div className="limit">
            <span>Max</span>
            <span className="limit-value">62,500.00</span>
          </div>
        </div>
      </div>
      <div className="bookmaker-content">
        <div className="bookmaker-labels">
          <div></div>
          <div className="back-label">Back</div>
          <div className="lay-label">Lay</div>
        </div>
        <div className="bookmaker-row">
          <div className="team-name">Durbar Rajshahi</div>
          <div className="back-cell">Suspend</div>
          <div className="lay-cell"></div>
        </div>
        <div className="bookmaker-row">
          <div className="team-name">Chittagong Kings</div>
          <div className="back-cell"><div className="odds-button">22</div></div>
          <div className="lay-cell"><div className="odds-button">25</div></div>
        </div>
      </div>
    </div>
  );
}

