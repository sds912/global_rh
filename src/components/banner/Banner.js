import React from "react";
import Header from "../header/Header";
import { makeStyles } from "@material-ui/core";
import Search from "../search/Search";
import SideButtons from "../buttons/SideButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    top: "90px",
    left: "0px",
    height: "540px",
    backgroundColor: "blue",
    backgroundImage: "url('/680.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
  },

  title: {
    color: "#020000",
    textAlign: "left",
    marginTop: "2.5em",
    marginLeft: "1em",
    font: "normal normal bold 42px Helvetica Neue",
    letterSpacing: "0px",
    color: "#020000",
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  subTitle: {
    textAlign: "left",
    font: "normal normal normal 26px Helvetica Neue",
    letterSpacing: "0px",
    color: "#000000",
    marginLeft: "1.5em",
    marginTop: "-1em",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>Construisons ensemble votre travail</h4>
      <p className={classes.subTitle}>
        Nous avons forcément un travail pour vous
      </p>

      <Search top={"96px"} bg={1} />
    </div>
  );
};

export default Banner;
