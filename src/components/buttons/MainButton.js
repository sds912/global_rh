import React from "react";
import { Typography, List, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  btn: {
    transition: "background-color .5s",
    border: "0px",
    height: "48px",
    top: "calc(100vh - 380px)",
    zIndex: "1080",
    outline: "none",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "16px",
    marginTop: "25px",
    padding: "0 1em",
    textAlign: "left",
  },
}));

const MainButton = (props) => {
  const { title, color } = props;
  const classes = useStyles();
  return (
    <button
      onClick={() => props.action()}
      className={classes.btn}
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

export default MainButton;
