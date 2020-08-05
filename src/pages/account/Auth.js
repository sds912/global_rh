import React from 'react';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
   root: {
     width: '100%',
     padding: '3em',
   },
}));


const Auth = () => {

  const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}



export default Auth;