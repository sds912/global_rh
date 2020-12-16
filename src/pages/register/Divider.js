import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Company from './Company';

const useStyles = makeStyles(() => ({
   div:{
       width: "120px",
       height: '4px',
       backgroundColor: "red",
       margin: '.1em 0',
       marginBottom: '2em'
   }
}));

const MyDivider = ()  => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
         
        </div>
    )
}


export default MyDivider;
