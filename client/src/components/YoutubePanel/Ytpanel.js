import { Container, Grid } from "@material-ui/core";
import { BattingCard } from "./BattingCard";
import { Blank } from "./Blank";
import { BowlingCard } from "./BowlingCard";
import { DayWiseMatch } from "./DayWiseMatch";
import { FullScreen } from "./FullScreen";
import { MainLeft } from "./MainLeft";
import { MainRight } from "./MainRight";
import { useStyles } from "./panelStyles";
import { Playing11 } from "./Playing11";
import { PointTable } from "./PointTable";
import { Stat } from "./Stat";
import { Stringers } from "./Stringers";

export const Ytpanel = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container>
        <Blank />
        <FullScreen />
        <Playing11 />
        <MainLeft />
        <MainRight />
        <BattingCard />
        <BowlingCard />
        <Stringers />
        <DayWiseMatch />
        <PointTable />
        <Stat />
      </Grid>
    </Container>
  );
};
