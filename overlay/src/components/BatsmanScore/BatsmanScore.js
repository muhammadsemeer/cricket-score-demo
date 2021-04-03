import "./Batsman.css"

const BatsmanProfile = ({ theme }) => {
  const { batsman } = theme;
  return (
    <div
      className="batsman-profile"
      style={{ backgroundImage: `url(${batsman})` }}
    >
      <div className="top">
        <div>Virat</div>
        <div>Not Out</div>
        <div>0 (0)</div>
      </div>
      <div className="middle">
        <div>Dots</div>
        <div>Ones</div>
        <div>Twos</div>
        <div>Threes</div>
        <div>Fours</div>
        <div>Sixes</div>
      </div>
      <div className="bottom">
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default BatsmanProfile;
