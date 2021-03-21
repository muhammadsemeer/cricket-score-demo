import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    matches: {
      marginTop: theme.spacing(5),
    },
    cards: {
      width: "90%",
      height: 200,
      marginBottom: 25,
    },
    item: {
      padding: 0,
      width: 300,
      height: 200,
    },
  }));