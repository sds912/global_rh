import React from 'react'
import { Typography, List, ListItemText, makeStyles, Button } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

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

const Section2 = () =>  {
  const  classes = useStyles();
    return (
        <div className={classes.root}>
             <AccessAlarmIcon  className={classes.icon}/>
              <h5 className={classes.title}>Gagnez du temps</h5>
           <p className={classes.text}>
           GRH regroupe pour vous toutes les <br/> offres du marché, quel que soit le  <br/> secteur ou le type de poste que vous <br/> visez
           </p>
        </div>
    )
}

export default Section2;
