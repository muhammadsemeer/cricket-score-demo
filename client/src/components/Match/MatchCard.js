import {
  Card,
  Button,
  ButtonGroup,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyle } from "./MatchCardStyles";

const MatchCard = ({ details, className }) => {
  const classes = useStyle();
  return (
    <>
      <Card className={className}>
        <ButtonGroup
          variant="contained"
          className={classes.cardHeader}
          color="primary"
          aria-label="contained primary button group"
        >
          <Button size="small" className={classes.button}>
            {details.type}
          </Button>
          <Button size="small" className={classes.button}>
            {details.day}
          </Button>
          <Button size="small" className={classes.button}>
            {details.no}
          </Button>
          <Button size="small" className={classes.button}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
        <CardContent className={classes.cardContent}>
          <Grid container>
            <Grid item md={6} sm={6}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                {details.team1}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item md={5} sm={5}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                {details.team2}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle1" align="center" color="primary">
            Date: {details.date}
          </Typography>
          <Grid container>
            <Grid item md={6} sm={6}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                {details.start}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item md={5} sm={5}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                {details.end}
              </Typography>
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            className={classes.btnFull}
          >
            Match is Going on
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MatchCard;
