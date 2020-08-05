import React from 'react'
import { Typography, List, ListItemText, makeStyles, Grid } from '@material-ui/core';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';

const useStyles = makeStyles( () =>({
    root:{
         margin: '8em 0'
    },
    title:{
        fontSize: '26px',
        fontWeight: '800',
        marginBottom: '2em'
    }
}))

const MainInfo = () =>  {
    const  classes = useStyles();
    return (
        <div className={classes.root}>
           <Typography className={classes.title}>Nos Solutions d'interim</Typography>
            <Grid container >
                <Grid item sm={6}>
                 <Section1 />
                </Grid>
                <Grid item sm={6}>
                  <Section2 />
                </Grid>
            </Grid>
            <Grid container>
             <Grid item sm={12}>
                 <Section3 />
             </Grid>
            </Grid>
        </div>
    )
}

export default MainInfo;
