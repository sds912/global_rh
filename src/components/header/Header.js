import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import { Button } from "@material-ui/core";
import MainButton from "../buttons/MainButton";
import { Link, useHistory } from "react-router-dom";
import UserAvatar from "../buttons/DropMenu";
import AuthUserContext from "../../Session/context";
import { DEPOSIT_CV } from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "90px",
    background: "#EFEFF4 0% 0% no-repeat padding-box",
    opacity: 1,
    display: "flex",
    borderBottom: "1px solid #020000",
  },
  logo: {
    left: "37px",
    width: "276px",
    height: "80px",
    background: "transparent url('/logo-GRH.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 1,
    marginRight: "4em",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      left: "25px",
      width: "220px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "230px",

      marginRight: "5em",
    },
  },
  btnBox: {
    marginTop: "34px",
    display: "flex",
  },

  btnCandidat: {
    font: "normal normal medium 24px/29px Helvetica Neue",
    color: "#707070 !important",
    textTransform: "none",
    height: "25px",
    margin: "0 1em",
    [theme.breakpoints.down("md")]: {
      margin: "0 .5em",
    },
  },
  btnRecruteur: {
    font: "normal normal medium 24px/29px Helvetica Neue",
    color: "#707070 !important",
    textTransform: "none",
    height: "25px",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      margin: "0 .5em",
    },
  },

  divider: {
    width: "2px",
    height: "18px",
    backgroundColor: "#707070",
  },

  block: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginRight: "3px",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const user = useContext(AuthUserContext);

  const history = useHistory();

  const gotToCV = () =>
    history.push({
      pathname: DEPOSIT_CV,
    });

  return (
    <div className={classes.root}>
      <Link to="/">
        <div className={classes.logo}></div>
      </Link>

      <SearchBar />
      <div className={classes.divider} style={{ marginTop: "38px" }}></div>

      <div className={classes.btnBox}>
        <Button
          className={classes.btnCandidat}
          onClick={() => {
            history.push({
              pathname: "/result",
              state: { job: "", city: "" },
            });
          }}
        >
          <span className={classes.block}> Je suis </span> Candidat
        </Button>
        <div className={classes.divider} style={{ marginTop: "5px" }}></div>

        <Button
          className={classes.btnRecruteur}
          onClick={() => {
            history.push("/about-us");
          }}
        >
          <span className={classes.block}>Qui sommes</span> Nous
        </Button>
      </div>
      {user != null ? <UserAvatar /> : ""}

      <MainButton title="Déposer votre CV" color="#C40556" action={gotToCV} />
    </div>
  );
};

export default Header;
