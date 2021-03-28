import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./panelStyles";

export const BattingCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.gridItems}>
        <Button variant="contained" className={classes.infoBtn} disabled>
          Team Batting Players
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Card className={classes.root} raised>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/assets/avatar.jpg"
              title="Player Name"
            />
            <CardContent>
              <Typography variant="body1">
                Player Name <br /> 10 (5)
              </Typography>
            </CardContent>
          </CardActionArea>
          <ButtonGroup orientation="vertical" className={classes.btnGrp}>
            <Button size="small" variant="contained" color="primary">
              Score
            </Button>
            <Button size="small" variant="contained" color="primary">
              Profile
            </Button>
            <Button size="small" variant="contained" color="primary">
              Tournament
            </Button>
          </ButtonGroup>
        </Card>
      </Grid>
    </>
  );
};
