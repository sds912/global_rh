import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import CustomBtn from "./CustomBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: ".8em 1.5em",
    backgroundColor: "var(--mainBlue)",
  },
}));
const inactivebg = "transparent";
const activebg = "#00778f";

const SearchMenu = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomBtn
        bg={inactivebg}
        text="ESPACE PERSONNEL"
        action={() => {
          console.log("hello");
        }}
      />
      <CustomBtn
        bg={activebg}
        text="MA RECHERCHE D'OFFRES"
        action={() => {
          console.log("hello");
        }}
        mr="0 .8em"
      />
      <CustomBtn
        bg={inactivebg}
        text="MA SELECTION D'OFFRES"
        action={() => {
          console.log("hello");
        }}
        mr="0 0.8em 0 0"
      />

      <CustomBtn
        bg={inactivebg}
        text="MES RECHERCHES ENREGISTREES"
        action={() => {
          console.log("hello");
        }}
      />
    </div>
  );
};

export default SearchMenu;
