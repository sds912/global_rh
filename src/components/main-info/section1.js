import React from 'react'
import { Typography, List, ListItemText, makeStyles, Button } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles( (theme) =>({
    root:{
     
       
        
       
    },
    title: {
        fontFamily: "Helvetica Neue",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: 'left',
    },
    text:{
        textAlign: 'left'
    },
    icon:{
        
        fontSize: "76px",
        marginRight: "58%"
        
    }

}))

const Section1 = () =>  {
  const  classes = useStyles();
    return (
        <div className={classes.root}>
            <DraftsIcon  className={classes.icon}/>
           <h5 className={classes.title}>Ne ratez aucune offres</h5>
           <p className={classes.text}>
           Soyez alerté par email dès qu’une <br/> nouvelle offre d’emploi correspond à  <br/>votre profil
           </p>
        </div>
    )
}

export default Section1;
