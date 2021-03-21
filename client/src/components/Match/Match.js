import { Grid, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import MatchCard from "./MatchCard";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { useStyles } from "./MatchStyles";

const Match = () => {
  const classes = useStyles();
  return (
    <div className={classes.matches}>
      <Container>
        <Grid container spacing={3} warp="wrap">
          <Grid item md={4} sm={12} className={classes.cards}>
            <Link to="/create-new-match">
              <Button
                variant="contained"
                color="primary"
                data-to="/create-new-match"
                className={classes.cards}
              >
                <AddCircleRoundedIcon />
                Create a new Match
              </Button>
            </Link>
          </Grid>
          <Grid item md={4} sm={12} className={classes.cards}>
            <Link to="/scorebook/123">
              <MatchCard
                className={classes.cards}
                details={{
                  type: "League",
                  day: "Day-1",
                  no: "Match-1",
                  team1: "RCB",
                  team2: "CSK",
                  date: "2021-04-05",
                  start: "8:00 PM",
                  end: "11:00 PM",
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Match;
