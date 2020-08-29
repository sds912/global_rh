import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import JobCard from './Card';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles((theme) => ({

    root:{
        width: "90%",
        margin: "0 auto",
        [theme.breakpoints.down('md')]:{
          width: "90%",
          marginTop: "2em"
         }
    },
   
    
    buttonBack: {
      position: "absolute",
      top: "45%",
      left: "-8em",
      outline: "none",
      border: "none",
      backgroundColor: "#fffff",
      [theme.breakpoints.down('lg')]:{
        left: "-3.5em"
       }
      
    },
    
    buttonNext: {
      position: "absolute",
      top: "45%",
      right: "-8em",
      outline: "none",
      border: "none",
      backgroundColor: "#fffff",
      [theme.breakpoints.down('lg')]:{
        right: "-3.5em"
       }
    

     
    },
    btn:{
      color: "#FAB0B0",
      textTransform: "none",
      fontWeight: "bold",
      marginBottom: "2em"
    }
  

    
    
    



}))

const jobs = [
    {
      titre: "Chauffeur",
      description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
      image: "post-1.png",
      ville: "Pikine",
      addedAt: "18/05/2020"

    },
    {
        titre: "Ingénieur Informatique",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "post-2.png",
        ville: "Dakar",
        addedAt: "17/05/2020"
      },
      {
        titre: "Chauffeur",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2017/11/19/23/25/bmw-2964072__340.jpg",
        ville: "Guédiawaye",
        addedAt: "14/05/2020"

      },
      {
        titre: "Comptable",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "post-3.png",
        ville: "Mbour",
        addedAt: "13/05/2020"

      },
      {
        titre: "Développeur web",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg",
        ville: "Dakar",
        addedAt: "12/05/2020"


      },
      {
        titre: "Designer",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745__340.jpg",
        ville: "Thiés",
        addedAt: "08/05/2020"

      },


];

const Jobs = () => {

    const classes = useStyles();

        return (
          <div className={classes.root}>
          <CarouselProvider
            visibleSlides={3}
            totalSlides={6}
            step={3}
            naturalSlideWidth={400}
            naturalSlideHeight={400}>
    
            <div className={classes.container}>
              <Slider className={classes.slider}>
                {
                  jobs.map((item, index) => (
                    <Slide index={index}>
                      <div style={{ marginRight: index != jobs.length ?  "1em" : "0px"}}>
                      <JobCard job={item}  />
                      </div>
                  </Slide>
                  ))
                }
                
                
              </Slider>
              <ButtonBack className={classes.buttonBack}>
               <ArrowBackIosIcon fontSize="large" />

              </ButtonBack>
              <ButtonNext className={classes.buttonNext}>
               <ArrowForwardIosIcon fontSize="large" />
              </ButtonNext>
            </div>
          </CarouselProvider>
          <Button className={classes.btn}>Voir plus d'offres d'emploies</Button>
        </div>
        )
    
}

export default Jobs;
