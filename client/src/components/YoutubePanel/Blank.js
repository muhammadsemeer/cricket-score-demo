import { Grid, Tooltip, Button } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const Blank = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Tooltip title="Show Blank Screen">
          <Button variant="contained" className={classes.fullWidth}>
            Show Blank
          </Button>
        </Tooltip>
      </Grid>
    </>
  );
};
