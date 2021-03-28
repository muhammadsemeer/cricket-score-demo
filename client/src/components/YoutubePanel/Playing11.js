import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const Playing11 = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Playing11 (Both)
        </Button>
      </Grid>
      <Grid item xs={4} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Playing11 (Team 1)
        </Button>
      </Grid>
      <Grid item xs={4} className={classes.gridItems}>
        <Button className={classes.fullWidth} variant="contained">
          Playing11 (Team 2)
        </Button>
      </Grid>
    </>
  );
};
