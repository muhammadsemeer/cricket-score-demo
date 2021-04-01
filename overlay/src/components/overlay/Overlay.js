import Score from "../score/Score";
import Verses from "../Verses/Verses";

const themes = {
  teamName: "/assets/theme/cricket_006_new_main_header.png",
  scoreHeader: "/assets/theme/cricket_006_new_header1.png",
  scoreFooter: "/assets/theme/scorefooter.png",
  live1: "/assets/theme/live from_1.png",
  live2: "/assets/theme/live from_2.png",
  live3: "/assets/theme/live from_3.png",
};

const Overlay = () => {
  return (
    <>
      <Score theme={themes} />
    </>
  );
};

export default Overlay;
