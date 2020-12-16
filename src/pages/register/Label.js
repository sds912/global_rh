import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Company from './Company';

const useStyles = makeStyles(() => ({
   txt:{
     fontSize: "26px",
     fontWeight: "800"
   }
}));

const Label = (props)  => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Typography className={classes.txt}>{props.text}</Typography>  
        </div>
    )
}


export default Label;
