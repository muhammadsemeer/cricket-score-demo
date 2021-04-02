import "../Verses/verses.css";

const NeedSM = ({ theme }) => {
  const { live2, live3 } = theme;
  return (
    <div className="verses">
      <div className="middle" style={{ backgroundImage: `url("${live2}")` }}>
        <div className="team1">RCB</div>
        <div className="vs">V/S</div>
        <div className="team2">MI</div>
      </div>
      <div
        className="bottom"
        style={{ backgroundImage: `url("${live3}")`, width: "80%", fontSize: "32px" }}
      >
        <div>RCB Needs 100 Runs from 80 Balls</div>
      </div>
    </div>
  );
};

export default NeedSM;
