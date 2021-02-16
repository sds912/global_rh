import React from 'react'
import { makeStyles, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import MainButton from '../buttons/MainButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(() => ({

   title:{
       fontSize: "32px",
       fontWeight: "800",
       textAlign: "left"
   } ,
   description:{
       fontSize: "16px",

       fontWeight:"500",
       textAlign: "left"
   },
   video:{
       width: "100%",
       position: "relative",
       

   },
   player:{
       fontSize: "120px",
       color: "#ffffff",
      
   },
   btnplayer:{
       position: "absolute",
       backgroundColor: "#c5bbb8b6",
       transition: "background-color 0.5s",
       width: "120px",
       height: "120px",
       borderRadius: "50%",
       top: "28%",
       left: "35%",
       cursor: "pointer",
       "&:hover":{
          backgroundColor: "#cecac8b6"
       }

       

   }

      



}))




const Prestations = () => {

    const classes = useStyles();

        return (
            <div className="container-fluid p-0">
               <div className="row">
               <div className="col-sm-6">
                   <div className={classes.video}>
                      <img src="/2017.png" className="img-fluid" />
                      <div className={classes.btnplayer}>
                        <PlayArrowIcon className={classes.player} />
                      </div>
                   </div>
               </div>
               <div className="col-sm-6 px-4">
                   <div style={{marginTop: "3em"}} />
                   <p className={classes.title}>Qui sommes-nous ?</p>
                   <p className={classes.description}>
                    GLOBAL RH est un Cabinet d'intérim, de <br />
                    placement et de suivi de personnels qui permet <br />
                    aux entreprises d'atteindre leurs performances et <br />
                    de s'adapter aux

                    <br />
                    <br />

                    Changements technologiques du marché de <br />
                    l'emploi. Sa principale mission c'est d'intervenir <br />
                    sur l'ensemble des activités liées aus Ressources <br />
                    Humaines. 
                   </p>
                   <br/>

                   <MainButton title="Découvrer nos solutions RH" color="#284caf"/>
               </div>

               </div>
                  

                

            </div>
        )
    
}

export default Prestations
