import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5">Cricket Score</Typography>
        <nav className={classes.nav}>
          <Link to="/">
            <Button size="large" className={classes.navLinks}>
              Matches
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
