import { Grid, ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const MainRight = () => {
    const classes = useStyles()
  return (
    <>
      <Grid item xs={6} className={classes.gridItems}>
        <ButtonGroup>
          <Button className={classes.infoBtnWidth} variant="contained" disabled>
            Partnership
          </Button>
          <Button className={classes.btnWidth184} variant="contained">
            Current
          </Button>
          <Button className={classes.btnWidth184} variant="contained">
            Team 1 (Full)
          </Button>
          <Button className={classes.btnWidth184} variant="contained" disabled>
            Team 2 (Full)
          </Button>
        </ButtonGroup>
        <ButtonGroup className={classes.btnGrp}>
          <Button className={classes.infoBtnWidth} variant="contained" disabled>
            Graphs
          </Button>
          <Button className={classes.btnWidth137} variant="contained">
            Run Worm
          </Button>
          <Button className={classes.btnWidth137} variant="contained">
            Manhatten
          </Button>
          <Button className={classes.btnWidth137} variant="contained">
            Patnership (Team 1)
          </Button>
          <Button className={classes.btnWidth137} variant="contained" disabled>
            Patnership (Team 2)
          </Button>
        </ButtonGroup>
        <ButtonGroup className={classes.btnGrp}>
          <Button className={classes.btnWidth169} variant="contained">
            versus
          </Button>
          <Button className={classes.btnWidth169} variant="contained" disabled>
            Projected Score
          </Button>
          <Button className={classes.btnWidth169} variant="contained">
            serires Sixes
          </Button>
          <Button className={classes.btnWidth169} variant="contained">
            Say Word (WOW)
          </Button>
        </ButtonGroup>
        <Button className={classes.fullWidthHeight50} variant="contained">
          Need
        </Button>
        <ButtonGroup className={classes.btnGrp}>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Batting Summary Team 1{" "}
          </Button>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Batting Summary Team 2
          </Button>
        </ButtonGroup>
        <ButtonGroup className={classes.btnGrp}>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Bowling Summary Team 1
          </Button>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Bowling Summary Team 2
          </Button>
        </ButtonGroup>
        <Button
          className={classes.fullWidthHeight50}
          variant="contained"
          disabled
        >
          Macth Summary
        </Button>
      </Grid>
    </>
  );
};
