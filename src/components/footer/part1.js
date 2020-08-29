import React from 'react'
import {  makeStyles } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';


const useStyles = makeStyles( () =>({
    root:{
    },
    logo:{
        width: "400px",
        marginLeft: "-4em",
        marginTop: "-5em"
    },
    appBtn:{
        backgroundColor: "black !important",
        color: "white",
        border: "none",
        padding: ".5em 1.5em",
        marginTop: "2em",
        borderRadius: "16px",
        outline: "none",
        cursor: "pointer",
        
    }
}))

const Part1 = () =>  {
  const  classes = useStyles();
    return (
        <div className={classes.root}>
            <img  src="/logo-global-rh-version-blanc.png" className={classes.logo} />
            <p style={{marginTop: "-4em", fontWeight: "bold"}}>GRH est aussi disponible sur </p>
            <button className={classes.appBtn} style={{marginRight: "2.5em"}}>
                <AppleIcon fontSize="small"  />
                <span >App Store</span>
            </button>
            <button className={classes.appBtn}>
                <AndroidRoundedIcon fontSize="small" />
                <span>Google Play</span>
            </button>



        </div>
    )
}

export default Part1;
