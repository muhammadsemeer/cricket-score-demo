import "./MatchSummary.css";

const MatchSummary = ({ theme }) => {
  const {
    live3,
    battingSummaryOut,
    bowlingSummaryNoHeader,
    matchSummaryFooter,
  } = theme;
  return (
    <>
      <div className="match-summary">
        <div className="header" style={{ backgroundImage: `url("${live3}")` }}>
          <div className="tour">
            <span className="head">Macth Summary</span>
            <span className="teams">RCB V/S MI</span>
          </div>
        </div>
        <div className="inn inn1">
          <div
            className="team team1"
            style={{ backgroundImage: `url("${battingSummaryOut}")` }}
          >
            <div className="name">RCB</div>
            <div className="overs">20.0 Overs</div>
            <div className="run">169-5</div>
          </div>
            <div
              className="row"
              style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
            >
              <div className="batsman">
                <div className="name">Virat</div>
                <div className="run">121 (70)</div>
              </div>
              <div className="bowler">
                <div className="name">Bumrah</div>
                <div className="run">60 - 3</div>
              </div>
            </div>
        </div>
        <div className="inn inn2">
          <div
            className="team team2"
            style={{ backgroundImage: `url("${battingSummaryOut}")` }}
          >
            <div className="name">MI</div>
            <div className="overs">20.0 Overs</div>
            <div className="run">168-7</div>
          </div>
            <div
              className="row"
              style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
            >
              <div className="batsman">
                <div className="name">Rohit</div>
                <div className="run">56 (45)</div>
              </div>
              <div className="bowler">
                <div className="name">Bumrah</div>
                <div className="run">60 - 3</div>
              </div>
            </div>
        </div>
        <div
          className="footer"
          style={{ backgroundImage: `url("${matchSummaryFooter}")` }}
        >
          <h3>RCB Win By 6 Wickets</h3>
        </div>
      </div>
    </>
  );
};

export default MatchSummary;
