import React from 'react'
import { Typography, List, ListItemText, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles( () =>({
    root:{
        backgroundColor: '#2196F3',
        maxWidth: '100%',
        height: '320px',
        padding: '1.5em',
        paddingTop: '3em',
        textAlign: 'center'
    },
    title: {
        fontSize: '36px',
        fontWeight: '800',
        color: "#ffffff",
        marginBottom: '1.5em'
    },
    description:{
        fontSize: '22px',
        color: '#ffffff',
        fontWeight: '600'
    },
    btn:{
        borderColor: '#ffffff',
        color: "#ffffff",
        marginTop: '2.8em'
    }

}))

const Section1 = () =>  {
  const  classes = useStyles();
    return (
        <div className={classes.root}>
             <Typography variant="h5" className={classes.title}>Solutions TPE/PME</Typography>
             <Typography variant="p" className={classes.description}>
             Direct Recrutement : notre solution 100% PME conçue pour simplifier au quotidien vos recrutements en CDI, CDD et travail temporaire.
             </Typography>
             <br />
             <Button variant="outlined"  className={classes.btn} >
                En Savoir Plus
             </Button>
        </div>
    )
}

export default Section1;
