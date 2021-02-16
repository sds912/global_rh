import React from 'react'
import { Typography, List, ListItemText, makeStyles, Grid } from '@material-ui/core';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';

const useStyles = makeStyles( (theme) =>({
    root:{
        
         backgroundColor: "#058BA3",
         padding: "2.5em",
         color: 'white',
         //marginBottom: "2em"
         
        
    },
    title:{
        font: "Helvetica Neue",
        fontSize: "36px",
        color: "#FAFBFC",
        opacity: 1,
        marginBottom: "2em",
        
       

       
    }
}))

const MainInfo = () =>  {
    const  classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Typography className={classes.title}>3 bonnes raisons d'utiliser GRH</Typography>
            <div className="row">
            <div className="col-sm-4">
             <Section1 />
            </div>
            <div className="col-sm-4">
             <Section2 />

            </div>
            <div className="col-sm-4">
             <Section3 />

            </div>
            </div>
        </div>
    )
}

export default MainInfo;
