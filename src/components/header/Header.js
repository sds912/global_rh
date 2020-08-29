import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar'
import { Button } from '@material-ui/core';
import MainButton from '../buttons/MainButton';


const useStyles = makeStyles((theme) => ({
  root:{
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100px",
    background: "#EFEFF4 0% 0% no-repeat padding-box",
    opacity: 1,
    display: 'flex',
    borderBottom: "1px solid #020000",




  },
  logo: {
    left: "37px",
    width: "276px",
    height: "80px",
    background: "transparent url('/logo-GRH.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 1,
    marginRight: "4em",
    cursor: "pointer",
    [theme.breakpoints.down('md')]:{
      left: "25px",
      width: "220px",
    },
    [theme.breakpoints.down("sm")]:{
      width: "230px",
         
      marginRight:"5em"
    }

  },
  btnBox: {
    marginTop: "34px",
    display: "flex"


  },

  btnCandidat:{
    font: "normal normal medium 24px/29px Helvetica Neue",
    color: "#707070 !important",
    textTransform: "none",
    height: "25px",
    margin: "0 1em",
    [theme.breakpoints.down('md')]:{
      margin: "0 .5em"
    }
  },
  btnRecruteur:{
    font: "normal normal medium 24px/29px Helvetica Neue",
    color: "#707070 !important",
    textTransform: "none",
    height: "25px",
    marginLeft: "1em",
    [theme.breakpoints.down('md')]:{
      margin: "0 .5em",
      

    }

  },

  profile:{
    display: 'block',
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "1px solid gray",
    marginTop: "25px",
    background: "transparent url('https://randomuser.me/api/portraits/men/91.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "1em",
    marginLeft: "1em"
  },
  divider:{
    width: "2px",
    height: "18px",
    backgroundColor: "#707070",
  },

  block:{
    [theme.breakpoints.down("sm")]:{
      display: "none",

    },
    marginRight: '3px'
  }



  
}));

const  Header  = (props) => {
   
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <div className={classes.logo}></div>
      
          <SearchBar />
          <div className={classes.divider} style={{marginTop: "38px"}}></div>

          <div className={classes.btnBox}>
            <Button className={classes.btnCandidat} >
             <span className={classes.block}> Je suis </span>  Candidat
            </Button>
        <div className={classes.divider} style={{marginTop: "5px"}} ></div>

            <Button className={classes.btnRecruteur}>
             <span className={classes.block}>Publier une</span>   Annonce
            </Button>

           </div>

           <span className={classes.profile}></span>
           <MainButton title="Déposer votre CV" color="#C40556" />
     
    </div>
  );
}



export default Header

