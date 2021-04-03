import "./SeriesSixes.css";

const SeriesSixes = ({ theme }) => {
  const { seriesSixes } = theme;
  return (
    <div
      className="series-sixes"
      style={{ backgroundImage: `url(${seriesSixes})` }}
    >
      <div className="title">Tournament Sixes</div>
      <div className="sixes">193</div>
    </div>
  );
};

export default SeriesSixes;
