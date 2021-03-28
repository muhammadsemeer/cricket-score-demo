import { Grid, Button, ButtonGroup } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const DayWiseMatch = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Button variant="contained" className={classes.infoBtn} disabled>
          Day Wise Matches List
        </Button>
        <ButtonGroup
          className={classes.btnGrp}
          style={{ justifyContent: "center" }}
        >
          <Button variant="contained">Day 1</Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
