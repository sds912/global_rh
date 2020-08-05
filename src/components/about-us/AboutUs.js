import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';

const useStyles = makeStyles(() => ({

    root:{
       marginTop: '80px'
    },
    img: {
        width: '100%'
    },
    text1: {
        padding: '2em',
        margin: '1.5em 0'
    },
    title: {
        marginBottom: '.5em',
        fontSize: '36px',
        fontWeight: '800'
    }



}))

const AboutUs = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                 <Grid container>
                 <Grid item xs={6} spacing={6}>
                    <img className={classes.img} src='https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261_960_720.jpg'  alt='about us'/>
                 </Grid>
                 <Grid item xs={6}>
                     <div className={classes.text1}> 
                        <Typography variant='h2' className={classes.title}>Qui sommes nous ?</Typography>
                        <Typography variant='body1'>
                        They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
                        They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
                        </Typography>
                     </div>

                     <div className={classes.text1}> 
                        <Typography variant='h2'></Typography>
                        <Typography variant='body1'></Typography>
                     </div>
                    <MainButton />
                 </Grid>
                 </Grid>
            </div>
        )
    
}

export default AboutUs
