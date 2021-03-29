import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useContext } from "react";
import { PostContext } from "../../Session";
import { useHistory } from "react-router-dom";
import { RESULT } from "../../constants/routes";
import {
  isMobile
} from "react-device-detect";
import { Container } from "react-bootstrap";
import { useWindowSize } from 'react-window-size-hooks';
import CandidatCard from "./card";
import { connect } from "react-redux";
import { listCandidats } from "../../redux/actions";
import store from "../../redux/store";




const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2em auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: ".5em",
    },
    position: "relative",
    top: "15%"
  },

  buttonBack: {
    position: "absolute",
    top: "50%",
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
    top: "50%",
    right: "-8em",
    outline: "none",
    border: "none",
    backgroundColor: "#fffff",
    [theme.breakpoints.down("lg")]: {
      right: "-3.5em",
    },
  },
  btn: {
    marginTop: "1em",
    color: "#FAB0B0",
    textTransform: "none",
    fontWeight: "bold",
  },
}));

const ConnectedBestCandidatList = (props) => {
  const classes = useStyles();
  const history = useHistory();

  store.subscribe((prop) => console.log(prop))

  const { posts } = useContext(PostContext);

  const { width, height } = useWindowSize();
  
  return (

      
    <Container  className={classes.root}>
      <CarouselProvider
        visibleSlides={isMobile ? 1 : 3}
        totalSlides={posts.length}
        step={isMobile ? 1 : 3}
        naturalSlideWidth={400}
        naturalSlideHeight={ width <= 920  ? 640: 440}
      >
        <div className={classes.container}>
          <h5 className="text-center my-3 h3">Nos meilleurs profiles</h5>
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
                      <CandidatCard post={item} />
                    </div>
                  </Slide>
                </div>
              );
            })}
          </Slider>
          {
             !isMobile ? <div>

           <ButtonBack className={classes.buttonBack}>
             <ArrowBackIosIcon fontSize="large" />
           </ButtonBack>
           <ButtonNext className={classes.buttonNext}>
             <ArrowForwardIosIcon fontSize="large" />
           </ButtonNext>

               </div> : ""
          }
          
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
        Voir plus de candudats
      </Button>
    </Container>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    listCandidats: () => dispatch(listCandidats)
  };
}

const mapStateToProps = state => {
  return { listCandidats: state.listCandidat };
};

const BestCandidatList = connect(
  mapStateToProps,
  mapDispatchToProps,
  
)(ConnectedBestCandidatList)

export default BestCandidatList;
