import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const FullScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={2} className={classes.gridItems}>
        <Button className={classes.infoBtn} variant="contained" disabled>
          Full Screen
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Score
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained" disabled>
          Need
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Score-1
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Run Rate
        </Button>
      </Grid>
      <Grid item xs={2} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Comparison
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          F.O.F
        </Button>
      </Grid>
      <Grid item xs={2} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Last 5 Overs
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          This Over
        </Button>
      </Grid>
    </>
  );
};
