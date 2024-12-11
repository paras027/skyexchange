import "./yellowstrip.css";

const YellowStrip = () => {
  return (
    <div className="yellowstrip">
      <div className="cricket_heading">Cricket</div>
      <div className="right_heading">
        <div className="timezone">
          Time Zone: <span>GMT+5:30</span>
        </div>
        <div className="oneclick_bet"><span></span>One Click Bet</div>
        <div className="setting">Setting <span><img src="/assets/settings.png" width="15px" height="15px"/></span></div>
      </div>
    </div>
  );
};

export default YellowStrip;
