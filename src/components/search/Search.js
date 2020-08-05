import React from 'react';
import { makeStyles, Button, Grid, TextField, InputAdornment } from '@material-ui/core';

import { GpsFixedOutlined, WorkOutlined} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root:{
      width: '80%',
      height: '120px',
      backgroundColor:'#000000',
      margin: '0px auto',
      marginTop: '120px',
      opacity:'.3'
  },
  searchForm:{
    position:'absolute',
    justifyContent:'center',
    opacity: '1',
    display: 'flex',
    top: '65%',
    left: '15%',
    width: '70%',
    zIndex:'1080'

  },
  btn:{
    backgroundColor: 'red',
    fontSize:'12px',
    color:'#ffffff',
     width: '100%',
     height: '48px',
     borderRadius:'0px',
     '&:hover':{
       backgroundColor: 'red'
     }
  },
  formFeild:{
    border: 'none',
    width: '100%',
    height: '45px',
    outline: 'none',
    backgroundColor: '#ffffff',
    padding: '0 .5em'
    
  },
  input: {
   marginTop: '.5em',
   opacity: '.8'
   
}

}));

const Search = () => {

    const classes = useStyles();
    
        return (
          <React.Fragment>
            <form className={classes.searchForm}>
              <Grid container spacing={6}>
                <Grid item xs={5}>
                <TextField
                  className={classes.formFeild}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                    placeholder: 'Compétences, métiers',
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              

                </Grid>
                <Grid item xs={3}>
                <TextField
                  className={classes.formFeild}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                    placeholder: 'Ville',
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <GpsFixedOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
                </Grid>
                <Grid item xs={4}>
              <Button color='primary' className={classes.btn}>Consulter les offres d'emploies</Button>

                </Grid>

              </Grid>
            </form>
            <div className={classes.root}>
                   
            </div>
          </React.Fragment>
          
        )

}

export default Search
