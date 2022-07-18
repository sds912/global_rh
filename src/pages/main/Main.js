import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Jobs from "../../components/jobs/Jobs";
import Footer from "../../components/footer/Footer";
import MainInfo from "../../components/main-info/MainInfo";
import Sectors from "../../components/secteur/sectors";
import Prestations from '../../components/prestations/Prestation';
import { isMobile } from "react-device-detect";
import ConstactUs from "../../components/contact-us/ContactUs";
import { makeStyles, Grid } from "@material-ui/core";
import { WHITE } from "../../constants/colors";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
  section1: {
    backgroundColor: "#f8f8df",
    padding: "2.5em",
    margin: "2em 0"
  },
  tip: {
    //color: "#ffffff",
    fontWeight: "bolder",
    fontSize: "26px",
    fontFamily: "arial",
  },
  txt: {
    fontSize: "18px",
    fontWeight: "500",
   // color: "#ffffff",
  },
}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <Banner />
     
      <MainInfo />
      <Prestations />
      <div className={classes.section1}>
        <Grid container>
          <Grid className="col-sm-4">
            <img src="/icon 1.png" alt="icon 1" />
            <h4 className={classes.tip}>Simple</h4>
            <p className={classes.txt}>
              Notre platefrome est facile à utiliser
            </p>
            <p className={classes.txt}>Et nécessite aucun installation.</p>
          </Grid>
          <Grid className="col-sm-4">
            <img src="/icon 2.png" alt="icon 2" />
            <h4 className={classes.tip}>Personnalisable</h4>
            <p className={classes.txt}>Nous vous proposons une platefrome</p>
            <p className={classes.txt}>Qui s'adapte à vos besoin. </p>
          </Grid>
          <Grid className="col-sm-4">
            <img src="/icon 3.png" alt="icon 3" height="110px" />
            <h4 className={classes.tip}> Lexible</h4>
            <p className={classes.txt}>
              Notre platefrome est évolutive et vous
            </p>
            <p className={classes.txt}>
              Pouvez l'utiliser sans aucune restriction.
            </p>
          </Grid>
        </Grid>
      </div>
      <Jobs />
      <ConstactUs />
      
      <Sectors />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
