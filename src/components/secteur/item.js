import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';

const useStyles = makeStyles(() => ({
   root:{
       display: 'flex',
       height: '46px',
       border: '1px solid 	#DCDCDC',
       width: '100%'
       
   },
    
    icon: {
        width: '42px',
        height: '42px',
        margin: '0 0.8em',
        
    },
    title: {
        
    }



}))

const Item = (props) => {

    const {sector} = props

    const classes = useStyles();

        return (
            <div className={classes.root}>
                <img src={`./${sector.icon}`}  className={classes.icon}/>
                <h4 className={classes.title}>
                {sector.title}
                </h4>
                
            </div>
        )
    
}

export default Item
