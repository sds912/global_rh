import React from 'react'
import { Typography, List, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () =>({
    title:{
        fontSize: '22px',
        marginBottom: '1em'
    }
}))

const Part1 = () =>  {
  const  classes = useStyles();
    return (
        <div>
            <Typography variant="h4" className={classes.title}>A Propos</Typography>
             <List dense={true}>
                  <ListItemText primary="Rejoindre Actual"/>
                  <ListItemText primary="On parle de nous"/>
                  <ListItemText primary="Mentions légales"/>
                  <ListItemText primary="CGU"/>
                  <ListItemText primary="Données personnelles"/>
              
            </List>
        </div>
    )
}

export default Part1;
