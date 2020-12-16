import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { MAIN, SIGN_IN } from "../../constants/routes";
import { withFirebase } from "../../Firebase";
import Main from "../main/Main";

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
        <Grid item sm={5}>
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
                Inscrivez-vous pour <br /> continuer
              </h4>
              <p className={classes.tif}>C'est Simple et Rapide</p>

              <span
                className={classes.btn}
                onClick={() => {
                  props.firebase
                    .doSignInWithGoogle()
                    .then((res) => {
                      history.push({
                        pathname: MAIN,
                      });
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }}
              >
                <img
                  src="/google.png"
                  alt=""
                  style={{ float: "left", marginTop: "-.5em" }}
                />
                Continue sur Google
              </span>

              <span
                className={classes.btn}
                style={{ backgroundColor: "#4953bc", color: "#ffffff" }}
                onClick={() => {
                  props.firebase
                    .doSignInWithFacebook()
                    .then((res) => {
                      history.push({
                        pathname: MAIN,
                      });
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }}
              >
                <img
                  src="/facebook.png"
                  alt=""
                  style={{ float: "left", marginTop: "-.5em" }}
                />
                Continue sur Facebook
              </span>
              <div style={{ margin: "2em 0", textAlign: "center" }}>OU</div>
              <span
                className={classes.btn}
                onClick={() =>
                  history.push({
                    pathname: SIGN_IN,
                  })
                }
              >
                <img
                  src="/email.png"
                  alt=""
                  style={{ float: "left", marginTop: "-.4em" }}
                />
                Inscription par Email
              </span>
            </div>
          </div>
        </Grid>
        <Grid item sm={7}>
          <div className={classes.banner}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withFirebase(Welcome);
