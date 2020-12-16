import React, { Component } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Part4 from './part4'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const useStyles = makeStyles(() => ({
    root:{
        backgroundColor: "#04346E",
        color: "#ffffff",
       
        padding:'5em .5em',
        paddingBottom: "1em"

    }
}))

const Footer  = () => {
  const  classes = useStyles()
 
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <Part1 />
                    </Grid>
                    <Grid item sm={1}>
                        
                    </Grid>
                    <Grid item sm={7}>
                        <Grid container>
                         <Grid item sm={4}>
                           <Part2 />
                         </Grid>
                         <Grid item sm={4}>
                         <Part3 />

                         </Grid>
                         <Grid item sm={4}>
                         <Part4 />

                         </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <p>
                    <span style={{fontWeight: "500", fontFamily:"Helvetica Neue"}}>Retrouvez-nous sur les réseaux sociaux</span>
                    <br/>
                    <br/>
                    <br/>

                    <span>
                        <TwitterIcon />
                        <FacebookIcon />
                        <LinkedInIcon />

                    </span>

                </p>
            </div>
        )
    
}

export default Footer
