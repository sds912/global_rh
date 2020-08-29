import React from 'react'
import { Typography, List, ListItemText, Grid, makeStyles } from '@material-ui/core';
import IconFacebook from '@material-ui/icons/Facebook';
import IconTwitter from '@material-ui/icons/Twitter';
import IconLinkedIn from '@material-ui/icons/LinkedIn';
import IconInstagram from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    btn: {
        borderRadius: "16px",
        border: "1px solid #FFFFFF",
        backgroundColor: "#04346E",
        color: "#FFFFFF",
        fontSize: "16px",
        padding: ".3em 1.5em",
        marginTop: "2em",
        outline: "none",
        cursor: "pointer"
    }
}))



const Part4 = () =>  {
    const classes = useStyles()
    return (
        <div>
             <Typography variant="body2" style={{textAlign: "center"}}>
             Le groupe <br/> Candidat <br/> Recruteur
             </Typography>
             <button  className={classes.btn}>
                 Contact
             </button>
        </div>
    )
}

export default Part4;
