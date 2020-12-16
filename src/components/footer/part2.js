import React from 'react'
import { Typography, List, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () =>({
    title:{
        fontSize: '22px',
        marginBottom: '1em'
    }
}))

const Part2 = () =>  {
    const classes = useStyles();
    return (
        <Typography variant="body2" style={{textAlign: "left"}}>
            FAQ <br/> Services de conseil <br/> Conditions générales <br/>sQui sommes nous ?
        </Typography>
    )
}

export default Part2;
