import React from "react";
import { Typography, List, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  btn: {
    transition: "background-color .5s",
    border: "0px",
    outline: "none",
    height: "48px",
    outline: "none",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "16px",
    display: "inline-block",
    padding: "0 1em"

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
