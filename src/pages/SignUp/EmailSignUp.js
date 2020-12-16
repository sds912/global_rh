import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { SignUpForm } from "../../components/forms/SignUpForm";

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
    marginBottom: "1.5em",
  },
}));

const EmailSignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container>
        <Grid item sm={5}>
          <div className={classes.panel}>
            <img
              src="/logo-GRH.png"
              alt="logo"
              className={classes.logo}
              height="90px"
            />
            <SignUpForm />
          </div>
        </Grid>
        <Grid item sm={7}>
          <div className={classes.banner}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmailSignUp;
