import {
  Grid,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const MainLeft = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6} className={classes.gridItems}>
        <Button className={classes.fullWidthHeight} variant="contained">
          Score
        </Button>
        <ButtonGroup className={classes.btnGrp}>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Toss Win
          </Button>
          <Button className={classes.btnWidthHeight50} variant="contained">
            Organizers Name
          </Button>
        </ButtonGroup>
        <FormControl className={classes.btnWidthHeight50}>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
          >
            <MenuItem value={"Organizers"}>Organizers</MenuItem>
            <MenuItem value={"Commentators"}>Commentators</MenuItem>
            <MenuItem value={"Custom"}>Custom</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-multiline-flexible"
          label="Enter Here"
          multiline
          rowsMax={4}
          style={{ width: "35%" }}
        />
        <Button type="submit" style={{ marginTop: "10px" }} variant="contained">
          Submit
        </Button>
      </Grid>
    </>
  );
};
