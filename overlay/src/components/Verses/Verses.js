import "./verses.css";

const Verses = ({ theme }) => {
  const { live1, live2, live3 } = theme;
  return (
    <div className="verses">
      <div className="top" style={{ backgroundImage: `url("${live1}")` }}>
        <div className="tour-name">IPL 2021</div>
      </div>
      <div className="middle" style={{ backgroundImage: `url("${live2}")` }}>
        <div className="team1">RCB</div>
        <div className="vs">V/S</div>
        <div className="team2">MI</div>
      </div>
      <div className="bottom" style={{ backgroundImage: `url("${live3}")` }}>
        <div className="match-day">Day 1</div>
        <div className="match-type">League</div>
        <div className="match-no">Match 1</div>
      </div>
    </div>
  );
};

export default Verses;
