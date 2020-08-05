import React from 'react';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
   root: {
     width: '100%',
     padding: '3em',
   },
   btn:{
       float: 'right'
   }
}));


const Actions = () => {

  const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" className={classes.btn}>
                Publuer une Offre d'emploie
            </Button>
        </div>
    )
}



export default Actions ;