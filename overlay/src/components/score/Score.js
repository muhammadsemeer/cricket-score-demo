import "./score.css";

const Score = ({ theme }) => {
  const { teamName, scoreHeader, scoreFooter } = theme;
  return (
    <div className="score">
      <div className="top">
        <div className="team" style={{ backgroundImage: `url("${teamName}")` }}>
          <span className="team-name">RCB</span>
          <span className="team-score">10 - 0</span>
          <span className="team-over">1.2</span>
        </div>
        <div
          className="team-header"
          style={{ backgroundImage: `url("${scoreHeader}")` }}
        >
          <span className="header-text1">IPL 2021</span>
          <span className="header-text2">1ST INN</span>
        </div>
      </div>
      <div
        className="bottom"
        style={{ backgroundImage: `url("${scoreFooter}")` }}
      >
        <div className="batsman">
          <span className="name">Kohli</span>
          <span className="stat">6(6)</span>
        </div>
        <div className="batsman">
          <span className="name">ABD</span>
          <span className="run">4(2)</span>
        </div>
        <div className="bowler">
          <span className="name">Bumrah</span>
          <span className="stat">4-0(0.2)</span>
        </div>
        <div className="over">
          <span className="ball">2</span>
          <span className="ball">2</span>
          <span className="ball">WD</span>
        </div>
      </div>
    </div>
  );
};

export default Score;
