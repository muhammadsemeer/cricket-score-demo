import BatSummary from "../../components/BatSummary/BatSummary";
import BowlSummary from "../../components/BowlSummary/BowlSummary";
import MatchSummary from "../../components/MatchSummary/MatchSummary";
import NeedSM from "../../components/NeedSM/NeedSM";
import Score from "../../components/score/Score";
import Verses from "../../components/Verses/Verses";
import ProjectedScore from "../../components/ProjectedScore/ProjectedScore";
import SeriesSixes from "../../components/SeriesSixes/SeriesSixes";

const themes = {
  teamName: "/assets/theme/cricket_006_new_main_header.png",
  scoreHeader: "/assets/theme/cricket_006_new_header1.png",
  scoreFooter: "/assets/theme/scorefooter.png",
  live1: "/assets/theme/live from_1.png",
  live2: "/assets/theme/live from_2.png",
  live3: "/assets/theme/live from_3.png",
  battingSummaryHeading: "/assets/theme/batting_summary_header.png",
  battingSummaryOut: "/assets/theme/batting_summary_out.png",
  battingSummaryNotOut: "/assets/theme/batting_summary_noutout.png",
  battingSummaryFooter: "/assets/theme/batting_summary_footer.png",
  bowlingSummaryNoHeader: "/assets/theme/bowling_summary_noheader.png",
  bowlingSummary: "/assets/theme/bowling_summary_1.png",
  matchSummaryFooter: "/assets/theme/wagon_wheel_versus.png",
  projectedScore: "/assets/theme/wagon_wheel_desc.png",
  seriesSixes: "/assets/theme/tour_sixes.png",
};

const Overlay = () => {
  return (
    <>
      <Score theme={themes} />
    </>
  );
};

export default Overlay;
