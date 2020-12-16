import React from 'react'
import { Typography, List, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () =>({

    btn:{
        backgroundColor: '#00976b',
        transition: 'background-color .5s',
        border: '0px',
        width: '240px',
        height: '48px',
        position: 'absolute',
        right: 0,
        top: 'calc(100vh - 380px)',
        zIndex: '1080',
        borderTopLeftRadius: '1.8em',
        borderBottomLeftRadius: '1.8em',
        outline: 'none',
        cursor: 'pointer',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '600',
        '&:hover':{
            backgroundColor: "#007f59"
        }
        
    }
}))

const SideButtons = () =>  {
  const  classes = useStyles();
    return (
       
             <button className={classes.btn}>Déposer votre CV</button>
        
    )
}

export default SideButtons;
