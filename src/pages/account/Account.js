import React, { Component } from 'react';
import MyMenu from './Menu';
import Actions from './Actions';
import { makeStyles, Paper } from '@material-ui/core';
import PostForm from './PostForm';


const useStyles = makeStyles(() => ({
    main: {
      width: "90%"
    },
    form:{
        padding: '5em',
    }
}));

const Account = () => {
   const classes = useStyles();
        return (
            <>
                <MyMenu/>
                <div className={classes.main} >
                <Actions />

                <Paper className={classes.form}>
                    
                </Paper>
                </div>
                
            </>
        )
    
}

export default Account
