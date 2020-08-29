import React from 'react'
import { Typography, List, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () =>({
    title:{
        fontSize: '22px',
        marginBottom: '1em'
    }
}))

const Part3 = () =>  {
    const  classes = useStyles();
    return (
        <Typography variant="body2" style={{textAlign: "left"}}>
            Partenariats offres<br/>Nous rejoindre<br/>Site corporate<br/>Salons Apec
        </Typography>
    )
}

export default Part3;
