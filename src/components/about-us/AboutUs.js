import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'

const useStyles = makeStyles(() => ({

    root:{
       marginTop: "-120px"
    },
    img: {
        width: '100%'
    },
    text1: {
        padding: '2em',
        marginLeft: "3em"
        
    },
    title: {
        marginBottom: '1.5em',
        fontSize: '36px',
        fontWeight: '800',

    },

    video:{
     backgroundImage:"url('2017.png')",
     backgroundSize: "cover",
     backgroundPosition: "center",
     width: "100%",
     height: "448px",
     position: "relative",
     marginBottom: "2em"
    

    },

    player:{
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        backgroundColor: "#d1d1d15b",
        textAlign: "center",
        margin: "0 auto",
        position: "absolute",
        top: "45%",
        left: "35%",
        msTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
        cursor: "pointer"
        
    
        
    },
    icon:{
        fontSize: "100px",
        color: "#ffffff"
    }



}))

const AboutUs = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                 <Grid container>
                 <Grid item xs={6} spacing={6}>
                   <div className={classes.video}>
                   <div className={classes.player}>
                       <PlayArrowRoundedIcon className={classes.icon} />
                    </div>
                   </div>
                 </Grid>
                 <Grid item xs={6} style={{textAlign: "left"}}>
                     <div className={classes.text1}> 
                        <Typography variant='h2' className={classes.title}>Qui sommes nous ?</Typography>
                        <p style={{textAlign: "left", fontSize: "18px"}}>
                        GLOBAL RH est un Cabinet d’intérim, de <br/> placement et de suivi de personnels qui permet <br/> aux entreprises d’atteindre leurs performances et <br/> de s’adapter aux  
                        </p>
                        <p style={{marginTop: "1.5em", textAlign: "left",  fontSize: "18px"}}>
                        changements technologiques du marché de <br/> l’emploi. Sa principale mission c’est d’intervenir <br/> sur l’ensemble des activités liées aux Ressources <br/> Humaines.
                        </p>
                        <MainButton title="Découvrez nos solutions RH" color="#1C5EAC"  />
                     </div>

                     
                    
                 </Grid>
                 </Grid>
            </div>
        )
    
}

export default AboutUs
