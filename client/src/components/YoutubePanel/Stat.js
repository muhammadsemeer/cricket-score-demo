import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { useState } from "react";
import { HeaderDialog } from "./HeaderDialog";
import { useStyles } from "./panelStyles";

export const Stat = () => {
  const classes = useStyles();
  const [dialog, setDialog] = useState(false);
  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };
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
          <Button
            variant="contained"
            onClick={openDialog}
            className={classes.fullWidthHeight50}
          >
            Title Header - Sub Header
          </Button>
          <Button variant="contained" className={classes.fullWidthHeight50}>
            Title Sub Header Scrollable
          </Button>
        </ButtonGroup>
      </Grid>
      {dialog ? <HeaderDialog open={dialog} close={closeDialog} /> : null}
    </>
  );
};
