import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomBtn from "./CustomBtn";
import { useHistory } from 'react-router-dom';


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
  const history = useHistory();

  return (
    <div className={classes.root}>
      <CustomBtn
        bg={props.page != 'account'? inactivebg : activebg}
        text="ESPACE PERSONNEL"
        action={() => {
          history.push('/account/1')
        }}
      />
      <CustomBtn
        bg={props.page != 'result'? inactivebg : activebg}
        text="MA RECHERCHE D'OFFRES"
        action={() => {
          history.push({ pathname:"/result"})
        }}
        mr="0 .8em"
      />
      <CustomBtn
        bg={props.page != 'offer'? inactivebg : activebg}
        text="MA SELECTION D'OFFRES"
        action={() => {
          history.push('/my-offers')
        }}
        mr="0 0.8em 0 0"
      />

    </div>
  );
};

export default SearchMenu;
