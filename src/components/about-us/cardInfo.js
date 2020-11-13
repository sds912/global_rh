import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "440px",
    borderRadius: "1em",
    backgroundColor: "#f1eceb",
  },
  header: {
    padding: ".3em",
    borderTopRightRadius: "1em",
    borderTopLeftRadius: "1em",

    backgroundColor: "#4a5760",
    color: "#ffffff",
  },
  item: {
    listStyle: "none",
    padding: "0",
    textAlign: "left",
    paddingLeft: ".8em",
    fontWeight: "600",
    lineHeight: "180%",
    fontSize: "12px",
  },
}));

const CardInfo = (props) => {
  const { title, items } = props.sector;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {" "}
        <h4>{title}</h4>
      </div>
      <div>
        <ul className={classes.item}>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardInfo;
