import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';
import MediaControlCard from './card';

const useStyles = makeStyles(() => ({

    root:{
       marginTop: '180px'
    },
    img: {
        width: '100%'
    },
    text1: {
        padding: '2em',
        margin: '1.5em 0'
    },
    title: {
        margin: '0 auto',
        marginBottom: '.5em',
        fontSize: '36px',
        fontWeight: '800',
        

    }



}))


const formations = [
    {
   title: "Un Entretien Individuel Systématique",
   description: "effectué par des Spécialistes du Recrutement et de la gestion Administrative du Personnel. Nos technico-commerciaux sont formés à vos métiers pour vous apporter des solutions pertinentes.",
   img: "https://www.leparisien.fr/resizer/9miwvbgY_JrD-ll5RjhUfsgC_-Q=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/H2ZTCLRL5B3MFMUPDZFVHLJXCU.jpg"
    },

    {
     title: "Gestion des publics difficiles et des contentieux en agence",
     description: "Prévenir les risques d’une situation conflictuelle, dans le cadre d’une relation interpersonnelle. Apporter des solutions positives lors de situations conflictuelles interpersonnelles. Réinstaurer un climat de confiance au sein d’une équipe ou avec un individu après un conflit",
     img: "https://img.daf-mag.fr/Img/BREVE/2020/4/348765/Contentieux-affaires-pez--F.jpg"
    }
]

const Formations = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                   <Typography variant="h4" className={classes.title} >FORMATION-CONSEIL & ACCOMPAGNEMENT</Typography>
                   <Grid container spacing={6}>

                {
                    formations.map(item => (
                     <Grid item xs={12}>
                         <MediaControlCard formation={item}/>
                     </Grid>
                     
                    ))
                }
                    </Grid>
                 
            </div>
        )
    
}

export default Formations
