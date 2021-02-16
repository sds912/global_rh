import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DEPOSIT_CV, EMAIL_SINGUP, MAIN, SIGN_UP} from "../../constants/routes";
import { withFirebase } from "../../Firebase";
import { SignInForm44 } from "../SignIn";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    position: "absolute",
  },
  banner: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url('/auth.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  panel: {
    width: "100%",
  },
  logo: {
    marginLeft: "-60%",
    marginBottom: "3em",
    cursor: "pointer",
  },
  main: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
  },
  title: {
    width: "50%",
    textAlign: "justify",
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 auto",
    color: "#707070",
  },
  tif: {
    width: "50%",
    textAlign: "justify",
    margin: ".5em auto",
    color: "#707070",
    marginBottom: "4em",
  },
  btn: {
    margin: "3em auto",
    display: "block",
    width: "320px",
    padding: "1.2em .5em",
    border: "1px solid #cfcfcf",
    borderRadius: "4px",
    fontSize: "12px",
    backgroundColor: "#f4f9f9",
    cursor: "pointer",
  },
}));

const Welcome = (props) => {
  console.log(props.history);

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.main}>
      <Grid container>
        <Grid item md={5} sm={12} >
          <div className={classes.panel}>
            <span
              onClick={() => {
                history.push({
                  pathname: MAIN,
                });
              }}
            >
              <img
                src="/logo-GRH.png"
                alt="logo"
                className={classes.logo}
                height="90px"
              />
            </span>
            <div className={classes.main}>
              <h4 className={classes.title}>
                Connectez-vous pour <br /> continuer
              </h4>

               <SignInForm44 />
               <p>vous n'êtes pas encore inscrit ? <span className="text-info" style={{cursor: "pointer"}} onClick={ () => {
                 history.push(SIGN_UP)
               }} >S'inscrire</span></p>
            </div>
          </div>
        </Grid>
        <Grid item  md={7}>
          <div className={classes.banner}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withFirebase(Welcome);
