import "./BowlSummary.css";

const BowlSummary = ({ theme }) => {
  const {
    battingSummaryHeading,
    bowlingSummaryNoHeader,
    bowlingSummary,
    battingSummaryFooter,
  } = theme;
  return (
    <div className="bowl-sum">
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
        style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
      >
        <span>Name</span>
        <span>Runs</span>
        <span>Overs</span>
        <span>Wickets</span>
        <span>Maiden</span>
        <span>ECO</span>
      </div>
      <div
        className="bowlers"
        style={{ backgroundImage: `url("${bowlingSummary}")` }}
      >
        <span>Bumrah</span>
        <span>6</span>
        <span>2</span>
        <span>2</span>
        <span>0</span>
        <span>6</span>
      </div>
      <div className="fall-wickets">
        <div
          className="top"
          style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
        >
          <div className="title">
            <span>Fall of Wickets</span>
          </div>
          <div className="wickets">
            <span>1</span>
            <span>2</span>
          </div>
        </div>
        <div
          className="bottom"
          style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
        >
          <div className="runs">
            <span>2</span>
            <span>6</span>
          </div>
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

export default BowlSummary;
