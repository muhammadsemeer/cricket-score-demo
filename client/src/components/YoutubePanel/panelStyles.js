import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 5px",
    marginTop: "10px",
  },
  gridItems: {
    margin: "2px 0",
  },
  btnGrp: {
    margin: "3px 0",
    width: "100%"
  },
  fullWidth: {
    width: "100%",
  },
  fullWidthHeight: {
    width: "100%",
    height: "250px",
  },
  fullWidthHeight100: {
    width: "100%",
    height: "100px",
  },
  fullWidthHeight50: {
    width: "100%",
    height: "50px",
  },
  infoBtn: {
    width: "100%",
    background: blueGrey[600] + "!important",
    color: "#fff !important",
  },
  infoBtnWidth: {
    width: "125px",
    background: blueGrey[600] + "!important",
    color: "#fff !important",
  },
  btnWidth184: {
    width: "184px",
  },
  btnWidth169: {
    width: "169px",
  },
  btnWidth137: {
    width: "138px",
  },
  btnWidthHeight50: {
    width: "50%",
    height: "50px"
  },
  media: {
    height: 175,
  },
}));
