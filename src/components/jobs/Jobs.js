import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import ImgMediaCard from './Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const useStyles = makeStyles(() => ({

    root:{
      width: '80%',
       margin: '180px auto'
    },
    title: {
      marginBottom: '80px',
      fontSize: '36px',
      fontWeight: '800'
  },
  mt:{
    marginTop: '2em',
    backgroundColor: 'red',
    color: '#ffffff'
  }
    



}))

const jobs = [
    {
      titre: "Ingénieur Informaticien",
      description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
      image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg",
      ville: "Pikine"
    },
    {
        titre: "Avocat",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066__340.jpg",
        ville: "Dakar"
      },
      {
        titre: "Chauffeur",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2017/11/19/23/25/bmw-2964072__340.jpg",
        ville: "Guédiawaye"
      },
      {
        titre: "Comptable",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/04/20/13/41/person-731479__340.jpg",
        ville: "Mbour"
      },
      {
        titre: "Développeur web",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg",
        ville: "Dakar"
      },
      {
        titre: "Designer",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745__340.jpg",
        ville: "Thiés"
      },


];

const Jobs = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                <Typography variant='h2' className={classes.title}>OFFRES D'EMPLOIE</Typography>
                 <Grid container spacing={3}>
                     {
                    jobs.map(item =>(
                        <Grid item xs={4}>
                        <ImgMediaCard job={item}/>
                  </Grid>
                    ))
                  
                     }
                 </Grid>
                 
                 <Button className={classes.mt}>Voir plus d'offres d'emploies</Button>
            </div>
        )
    
}

export default Jobs;
