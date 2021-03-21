import { Button, Card, Container, Grid } from "@material-ui/core";
import { useForm } from "../../utils/useForm/useForm";
import { useStyles } from "./NewMatchStyles";
import Selections from "../Select/Select";

const NewMatch = () => {
  const classes = useStyles();
  const [value, handleChange] = useForm({
    day: "",
    no: "",
    type: "",
    overs: "",
    team1: "",
    team2: "",
  });
  return (
    <Container>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Selections
              name="day"
              label="day-label"
              labelName="Match Day"
              value={value.day}
              onChange={handleChange}
              menuItems={[1, 2, 3, 4, 5, 6]}
            />
          </Grid>
          <Grid item md={3}>
            <Selections
              name="no"
              label="no-label"
              labelName="Match No"
              value={value.no}
              onChange={handleChange}
              menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            />
          </Grid>
          <Grid item md={3}>
            <Selections
              name="type"
              label="type-label"
              labelName="Match Type"
              value={value.type}
              onChange={handleChange}
              menuItems={[
                "League",
                "Round-16",
                "Round-8",
                "Quarter-Final",
                "Semi Final",
                "Final",
              ]}
            />
          </Grid>
          <Grid item md={3}>
            <Selections
              name="overs"
              label="overs-label"
              labelName="Match Overs"
              value={value.overs}
              onChange={handleChange}
              menuItems={[5, 10, 20, 50]}
            />
          </Grid>
          <Grid item md={12}>
            <Selections
              name="team1"
              label="team1-label"
              labelName="Team 1"
              value={value.team1}
              onChange={handleChange}
              menuItems={["RCB", "CSK", "MI", "KXIP"]}
            />
          </Grid>
          <Grid item md={12}>
            <Selections
              name="team2"
              label="team2-label"
              labelName="Team 2"
              value={value.team2}
              onChange={handleChange}
              menuItems={["RCB", "CSK", "MI", "KXIP"]}
            />
          </Grid>
          <Button variant="contained" color="primary">
            Create New Match
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default NewMatch;
