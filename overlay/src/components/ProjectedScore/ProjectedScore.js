import "./ProjectedScore.css";

const ProjectedScore = ({ theme }) => {
  const { projectedScore, bowlingSummaryNoHeader } = theme;
  return (
    <div className="projected">
      <div
        className="top"
        style={{ backgroundImage: `url("${projectedScore}")` }}
      >
        <div className="title">
          <h3>Projected Score</h3>
          <h4>RCB</h4>
        </div>
        <h3 style={{ color: "#fff" }}>AFTER OVER</h3>
      </div>
      <div
        className="run"
        style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
      >
        <p>Current (15.00)</p>
        <p>14/Over</p>
        <p>16/Over</p>
        <p>18/Over</p>
      </div>
      <div
        className="run"
        style={{ backgroundImage: `url("${bowlingSummaryNoHeader}")` }}
      >
        <p>70</p>
        <p>75</p>
        <p>79</p>
        <p>87</p>
      </div>
    </div>
  );
};

export default ProjectedScore;
