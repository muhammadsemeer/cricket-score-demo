import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const Stat = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Button variant="contained" className={classes.infoBtn} disabled>
          Statistics
        </Button>
        <ButtonGroup
          className={classes.btnGrp}
          style={{ justifyContent: "center" }}
        >
          <Button variant="contained">Most Runs</Button>
          <Button variant="contained">Most Wickets</Button>
          <Button variant="contained">Most 6s</Button>
          <Button variant="contained">Most 4s</Button>
          <Button variant="contained">Highest Run Scores</Button>
          <Button variant="contained">Tour Data</Button>
        </ButtonGroup>
        <ButtonGroup className={classes.btnGrp}>
          <Button variant="contained" className={classes.fullWidthHeight50}>
            Title Header - Sub Header
          </Button>
          <Button variant="contained" className={classes.fullWidthHeight50}>
            Title SubHeader
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
