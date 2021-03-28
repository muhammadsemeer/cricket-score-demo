import { Grid, ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const Stringers = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Button variant="contained" className={classes.infoBtn} disabled>
          Stingers
        </Button>
        <ButtonGroup
          className={classes.btnGrp}
          style={{ justifyContent: "center" }}
        >
          <Button variant="contained">4</Button>
          <Button variant="contained">6</Button>
          <Button variant="contained">Duck</Button>
          <Button variant="contained">No Ball</Button>
          <Button variant="contained">Wide Ball</Button>
          <Button variant="contained">Wicket</Button>
          <Button variant="contained">LBW</Button>
          <Button variant="contained">Out</Button>
          <Button variant="contained">Not Out</Button>
          <Button variant="contained">Free Hit</Button>
          <Button variant="contained">Decision Pending</Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
