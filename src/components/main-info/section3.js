import React from 'react'
import { Typography, List, ListItemText, makeStyles, Button } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';


const useStyles = makeStyles( (theme) =>({
    root:{
     
       
        
       
    },
    title: {
        fontFamily: "Helvetica Neue",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: 'left',
    },
    text:{
        textAlign: 'left'
    },
    icon:{
        
        fontSize: "76px",
        marginBottom: "-0.5em",
        marginRight: "3.5em",
        [theme.breakpoints.down('md')]:{
            marginRight:"2.5em"
           },
        [theme.breakpoints.down('sm')]:{
    
        marginLeft: ".3em"
        }
    }

}))

const Section3 = () =>  {
  const  classes = useStyles();
    return (
        <div className={classes.root}>
             <SearchSharpIcon  className={classes.icon}/>

             <h5 className={classes.title}>Chercher plus</h5>
             <p className={classes.text}>
             Vous avez un CV ? Grâce à son analyse, <br/>nous trouvons pour vous les offres <br/> d’emploi qui correspondent à votre <br/> profil.
             </p>
        </div>
    )
}

export default Section3;
