import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Jobs from "../../components/jobs/Jobs";
import Footer from "../../components/footer/Footer";
import MainInfo from "../../components/main-info/MainInfo";
import Sectors from "../../components/secteur/sectors";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <Banner />
      <MainInfo />
      <Jobs />
      <Sectors />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
