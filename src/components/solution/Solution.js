import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import ImgMediaCard from '../jobs/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import SolCard from './CardSol';

const useStyles = makeStyles(() => ({

    root:{
      width: '90%',
       margin: '80px auto'
    },
    title: {
      marginBottom: '80px',
      fontSize: '36px',
      fontWeight: '800'
  },
  mt:{
    marginTop: '2em',
    backgroundColor: '#000000',
    color: '#ffffff'
  }
    



}))

const sols = [
    {
      titre: "Mise à disposition de nos ressouces",
      description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
      image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg",
      items: ['Itérim', 'CDI intérimaire et CDI Temps partagé', 'Placement CDI, CDD', 'Intérim d\'insertion', 'Portage Salarial'],
      color: 'red'
      
    },
    {
        titre: "Recretement",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066__340.jpg",
        items: ['CDD','CDI', 'CDI Chantier', 'Stage', 'contrat de professionnalisation', 'Alternance'],
        color: 'blue'
      },
      {
        titre: "Formation",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2017/11/19/23/25/bmw-2964072__340.jpg",
        items: ['Formation pratique', 'Formation initiale'],
        color: 'yellow'
      }
      


];

const Sol = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                <Typography variant='h2' className={classes.title}>Nos solutions d'intérim, de recrutement et formation</Typography>
                 <Grid container spacing={3}>
                     {
                    sols.map(item =>(
                        <Grid item xs={4}>
                        <SolCard sol={item}/>
                  </Grid>
                    ))
                     }
                 </Grid>

                 <Button className={classes.mt}>Decouvrir nos solutions</Button>

                 
            </div>
        )
    
}

export default Sol;


