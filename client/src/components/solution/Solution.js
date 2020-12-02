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
      titre: "LA GESTION DES RESSOURCES HUMAINES",
      description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
      image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg",
      items: [
        "Mise à dispositions de personnels compétents",
        "Gestion Administrative des missions et de l’agence",
        "Gestion et contrôle de la paie",
        "Gestion des risques liés aux personnels",
        "Assurer le Suivi commercial et Technique du personnel RH",
        "Œuvrer pour la politique de prévention des risques professionnels",
        "Gérer l’accueil des Salariés intérimaires",
        "Appliquer la législation du travail temporaire"
      ],
      color: 'red'
      
    },
    {
        titre: "LE RECRUTEMENT DU PERSONNEL POUR TOUT SECTEUR",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066__340.jpg",
        items: [
          "Recruter des cadres de tout niveau selon vos besoins",
          "Recruter des personnels de toutes qualifications pour votre entreprise"
        ],
        color: 'blue'
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
                        <Grid item xs={6}>
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


