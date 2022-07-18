import React from "react";
import { makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height:  "calc(100vh - 145px)",
    backgroundColor: "blue",
    backgroundImage: 'url("./bg.png")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
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
      marginLeft: ".5em",
      marginTop: "1.5em",
    },
   
  },
  subTitle: {
    textAlign: "left",
    font: "normal normal normal 26px Helvetica Neue",
    letterSpacing: "0px",
    color: "#000000",
    position: "absolute",
    marginLeft: "2em",
    marginTop: "6.5em",
    opacity: 1,
    fontSize:"22px", 
    fontWeight:"400",
    [theme.breakpoints.down("md")]: {
    marginTop: "9em",
    marginLeft: ".5em",
    color: "gray"
      
    },
   
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>Construisons ensemble votre travail</h4>
      <p className={classes.subTitle}> Nous avons forcément un travail pour vous</p>
       {/* <Search /> */}
    </div>
  );
};

export default Banner;
