import React from 'react';
import MatchHeader from './MatchHeader';
import OddsGrid from './OddsGrid';
import BookmakerMarket from './BookmakerMarket';
import BettingTabs from './BettingTabs';
import TieBet from './TieBet';
import './BettingInterface.css';

export default function BettingInterface() {
  return (
    <div className="betting-interface">
      <MatchHeader />
      <OddsGrid />
      <BookmakerMarket />
      <BettingTabs />
      <TieBet />
    </div>
  );
}

