import "./BatSummary.css";

const BatSummary = ({ theme }) => {
  const {
    battingSummaryHeading,
    battingSummaryOut,
    battingSummaryNotOut,
    battingSummaryFooter,
  } = theme;
  return (
    <div className="bat-sum">
      <div
        className="header"
        style={{ backgroundImage: `url("${battingSummaryHeading}")` }}
      >
        <div className="left">
          <h1>Royal Challangers Banglore V/S Mumbai Indians</h1>
          <h3>IPL 2021</h3>
        </div>
        <div className="right">
          <h1>Match 1</h1>
          <h3>Day 1</h3>
        </div>
      </div>
      <div
        className="sub-header"
        style={{ backgroundImage: `url("${battingSummaryOut}")` }}
      >
        <div className="left">
          <span>No</span>
          <span>Batsman</span>
          <span>Wicket</span>
        </div>
        <div className="right">
          <span>Runs</span>
        </div>
      </div>
      <div
        className="batsmans"
        style={{ backgroundImage: `url("${battingSummaryNotOut}")` }}
      >
        <div className="left">
          <span>01</span>
          <span>Kohli</span>
          <span>Not Out</span>
        </div>
        <div className="right">
          <span>6(6)</span>
        </div>
      </div>
      <div
        className="footer"
        style={{ backgroundImage: `url("${battingSummaryFooter}")` }}
      >
        <div className="left">
          <span>Extras</span>
          <span>0</span>
          <span>Overs</span>
          <span>1.2</span>
        </div>
        <div className="right">
          <span>10-0</span>
        </div>
      </div>
    </div>
  );
};

export default BatSummary;
