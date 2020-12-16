import React from 'react';
import { Button, makeStyles, Grid } from '@material-ui/core';
import Label from './Label';
import MyDivider from './Divider';
import Logo from './Logo';


const useStyles = makeStyles(() => ({
   root: {
     width: '100%',
     textAlign: 'left'
   },
   formField:{
     width: '100%',
     height: '36px',
     border: "1px solid gray",
     outline: 'none',
     padding: '0 1em',
     fontSize: '16px',
     fontWeight: '600'
   }
}));


const Company = () => {
  const text = "Votre Entreprise";
  const classes = useStyles();
    return (
        <div className={classes.root} >
            <Label text={text} />
            <MyDivider/>
            <Grid container spacing={6}>
              <Grid item sm={6}>
                <input type="text" className={classes.formField} placeholder="Nom de l'entreprise" />
              </Grid>
              <Grid item sm={6}>
                <input type="text" className={classes.formField} placeholder="Adresse" />
              </Grid>
              <Grid item sm={6}>
                <input type="text" className={classes.formField} placeholder="Ville" />
              </Grid>
              <Grid item sm={6}>
                <input type="text" className={classes.formField} placeholder="Pays" />
              </Grid>
              
            </Grid>

             <br />
             <br />
             <br />

            <Grid container spacing={6}> 
              <Grid item sm={6}>
              <Label text="Site Internet de l'entreprise" />
            <MyDivider/>
              <input type="url" className={classes.formField} placeholder="Site Internet de l'entreprise" />
                
              </Grid>
              <Grid item sm={6}>
                <Logo />
              </Grid>

            </Grid>
        </div>
    )
}



export default Company ;