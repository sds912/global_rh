import React from 'react';
import { makeStyles } from '@material-ui/core';
import Company from './Company';

const useStyles = makeStyles(() => ({
   root: {
       padding: '3em'
   }
}));

const Register = ()  => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
             <Company />
        </div>
    )
}


export default Register;
