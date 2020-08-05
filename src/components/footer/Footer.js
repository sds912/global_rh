import React, { Component } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Part4 from './part4'

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
       
        padding:'5em 0',

    }
}))

const Footer  = () => {
  const  classes = useStyles()
 
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <Part1 />
                    </Grid>
                    <Grid item sm={3}>
                        <Part2 />
                    </Grid>
                    <Grid item sm={3}>
                        <Part3 />
                    </Grid>
                    <Grid item sm={3}>
                        <Part4 />
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default Footer
