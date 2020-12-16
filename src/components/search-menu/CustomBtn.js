import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: "background-color 0.5s",
    padding: "1.5em 2em",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#00778f !important",
    },
  },
}));

const CustomBtn = (props) => {
  const { text, bg, action, mr } = props;

  const classes = useStyles();

  return (
    <button
      className={classes.root}
      style={{ backgroundColor: bg, margin: mr }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default CustomBtn;
