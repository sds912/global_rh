import React from 'react'
import { Typography, List, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () =>({

    btn:{
        backgroundColor: '#00976b',
        transition: 'background-color .5s',
        border: '0px',
        width: '340px',
        height: '48px',
        top: 'calc(100vh - 380px)',
        zIndex: '1080',
        outline: 'none',
        cursor: 'pointer',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '600',
        '&:hover':{
            backgroundColor: "#007f59"
        },
    borderRadius: '1.2em'
    
    }
}))

const MainButton = () =>  {
  const  classes = useStyles();
    return (
             <button className={classes.btn}>Découvrer nos solutions RH</button>
    )
}

export default MainButton;
