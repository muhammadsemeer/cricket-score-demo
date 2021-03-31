import Score from "../score/Score";

const themes = {
  teamName: "/assets/theme/cricket_006_new_main_header.png",
  scoreHeader: "/assets/theme/cricket_006_new_header1.png",
  scoreFooter: "/assets/theme/scorefooter.png",
};

const Overlay = () => {
  return (
    <>
      <Score theme={themes} />
    </>
  );
};

export default Overlay;
