import React from 'react';
import { Button, makeStyles, Grid } from '@material-ui/core';
import Label from './Label';
import MyDivider from './Divider';
import ImgUploader from './ImageUploader';


const useStyles = makeStyles(() => ({
   root: {
     width: '90%',
     padding: '2em',
     border: '1px solid gray'
   },
}));


const Logo = () => {
  
  const classes = useStyles();
    return (
      <>
        <Label text="Logo de l'entreprise" />
        <MyDivider />
        <div className={classes.root}>
          
            <ImgUploader />
        </div>

        </>
    )
}



export default Logo ;