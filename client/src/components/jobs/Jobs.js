import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import JobCard from "./Card";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import firebase from "firebase";
import { useContext } from "react";
import { PostContext } from "../../Session";
import { useHistory } from "react-router-dom";
import { DETAIL, RESULT } from "../../constants/routes";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: ".5em",
    },
    position: "relative",
    top: "15%"
  },

  buttonBack: {
    position: "absolute",
    top: "20%",
    left: "-8em",
    outline: "none",
    border: "none",
    backgroundColor: "#fffff",
    [theme.breakpoints.down("lg")]: {
      left: "-3.5em",
    },
  },

  buttonNext: {
    position: "absolute",
    top: "20%",
    right: "-8em",
    outline: "none",
    border: "none",
    backgroundColor: "#fffff",
    [theme.breakpoints.down("lg")]: {
      right: "-3.5em",
    },
  },
  btn: {
    color: "#FAB0B0",
    textTransform: "none",
    fontWeight: "bold",
  },
}));

const Jobs = () => {
  const classes = useStyles();
  const history = useHistory();

  const { posts } = useContext(PostContext);

  return (

    
    <div className={classes.root}>
      <CarouselProvider
        visibleSlides={isMobile ? 1 : 3}
        totalSlides={posts.length}
        step={isMobile ? 1 : 3}
        naturalSlideWidth={400}
        naturalSlideHeight={300}
      >
        <div className={classes.container}>
          <Slider className={classes.slider}>
            {posts.map((item, index) => {
              return (
                <div>
                  <Slide index={index} key={item.id}>
                    <div
                      style={{
                        marginRight: index != posts.length ? "1em" : "0px",
                      }}
                    >
                      <JobCard post={item} />
                    </div>
                  </Slide>
                </div>
              );
            })}
          </Slider>
          <ButtonBack className={classes.buttonBack}>
            <ArrowBackIosIcon fontSize="large" />
          </ButtonBack>
          <ButtonNext className={classes.buttonNext}>
            <ArrowForwardIosIcon fontSize="large" />
          </ButtonNext>
        </div>
      </CarouselProvider>
      <Button
        className={classes.btn}
        onClick={() =>
          history.push({
            pathname: RESULT,
          })
        }
      >
        Voir plus d'offres d'emploies
      </Button>
    </div>
  );
};

export default Jobs;
