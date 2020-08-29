import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';

const useStyles = makeStyles((theme) => ({

   root:{
    
       backgroundColor: "#D4F0F2DD",
       padding: "2em",
       alignContent: "center"

   },

   list1:{
     display: "flex",
     listStyleType: "none",
     margin: "0 auto",
     
   },
   list2:{
       marginTop: "5em",
    display: "flex",
    listStyleType: "none",
    paddingBottom: "3em"
  },

   icon:{
     marginTop: "2em",
     marginBottom: "4em"
   },
   iconContainer:{
    maxWidth: "80%",
    margin: "0 auto"
   },
   

   mr:{
       marginRight: "4em"
   },
   mh:{
       marginLeft: "8em",
       marginRight: "4em",
       [theme.breakpoints.down("md")]:{
        marginLeft: "2em"
       },
       [theme.breakpoints.down('sm')]:{
        
         marginLeft: "-1em"
       }

       

   }

}))




const Sectors = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                 
                 
               <ul className={classes.list1}>
                   <li><img src={"car.png"}  className={classes.mh}/></li>
                   <li><img src={"doctor.png"} className={classes.mr} /></li>
                   <li><img src={"gear.png"} className={classes.mr} /></li>
                   <li><img src={"hotel.png"} className={classes.mr} /></li>
                   <li><img src={"money.png"} /></li>
               </ul>

               <ul className={classes.list2}>
                   <li><img src={"plane.png"} className={classes.mh} /></li>
                   <li><img src={"bank.png"} className={classes.mr}/></li>
                   <li><img src={"telecommunication.png"} className={classes.mr}/></li>
                   <li><img src={"shop.png"} className={classes.mr}/></li>
                   <li><img src={"urban.png"} /></li>
               </ul>
                
                
            </div>
        )
    
}

export default Sectors
