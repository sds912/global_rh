import React from 'react';
import { makeStyles, Button, Grid, TextField, InputAdornment } from '@material-ui/core';

import { SearchOutlined, PlaceOutlined} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root:{
      width: '80%',
      height: '110px',

      backgroundColor: "rgba(160, 160, 160, 0.548)",
      margin: '0px auto',
      marginTop: '96px',
      [theme.breakpoints.down('md')]:{
        marginTop: "120px"
      },
      [theme.breakpoints.down('sm')]:{
        marginTop: "140px"
        
       }
      
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
    backgroundColor: '#1C5EAC',
    fontSize:'12px',
    color:'#ffffff',
     width: '100%',
     height: '48px',
     borderRadius:'0px',
     '&:hover':{
       backgroundColor: '#1C5EAC'
     },
     opacity: 1
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
          <div className={classes.root}>
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
                        <SearchOutlined />
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
                        <PlaceOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
              <Button color='primary' className={classes.btn}>Recherche</Button>

                </Grid>

              </Grid>
            </form>
            
          </div>
          
        )

}

export default Search
