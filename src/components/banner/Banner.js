import React from "react";
import Header from "../header/Header";
import { makeStyles } from "@material-ui/core";
import Search from "../search/Search";
import SideButtons from "../buttons/SideButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "70%",
    backgroundColor: "blue",
    backgroundImage: "url('/680.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "80%",
    },

  },

  search:{
    //position: "absolute",
   // marginTop: "15em"
  },

  title: {
    color: "#020000",
    textAlign: "left",
    position: "absolute",
    marginLeft: "1em",
    marginTop: "2em",
    font: "normal normal bold 42px Helvetica Neue",
    letterSpacing: "0px",
    color: "#020000",
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
   
  },
  subTitle: {
    textAlign: "left",
    font: "normal normal normal 26px Helvetica Neue",
    letterSpacing: "0px",
    color: "#000000",
    position: "absolute",
    marginLeft: "1.5em",
    marginTop: "5em",
    opacity: 1,
   
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>Construisons ensemble votre travail <br/> <span style={{fontSize:"22px", fontWeight:"400"}}> Nous avons forcément un travail pour vous</span></h4>
        <Search />
    </div>
  );
};

export default Banner;
