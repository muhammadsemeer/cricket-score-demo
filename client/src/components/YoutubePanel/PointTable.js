import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const PointTable = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Button variant="contained" className={classes.infoBtn} disabled>
          Point Table
        </Button>
        <ButtonGroup
          className={classes.btnGrp}
          style={{ justifyContent: "center" }}
        >
          <Button variant="contained">Pool 1</Button>
          <Button variant="contained">Pool 2</Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};
