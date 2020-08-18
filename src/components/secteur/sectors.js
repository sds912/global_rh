import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';
import Item from './item';

const useStyles = makeStyles(() => ({

    root:{
       margin: '0 auto',
       marginTop: '180px',
    
       width: '94%',

    },
    img: {
        width: '100%'
    },
    text1: {
        padding: '2em',
        margin: '1.5em 0'
    },
    title: {
        margin: '0 auto',
        marginBottom: '1.5em',
        fontSize: '36px',
        fontWeight: '800',
        

    }



}))


const sectors = [

{
   title: "Médical, Pharmaceutique",
   icon: "medical.png"
},
{
    title: "Bâtiment, Travaux Publics",
    icon: "bat.png" 
},
{
    title: "Hôtellerie et Restauration",
    icon: "hotel.png" 
},
{
    title: "Banques et Assurances",
    icon: "bank.png"
},
{
    title: "Energie et Technologie",
    icon: "tech.png"
},
{
    title: "Télécommunication",
    icon: "telecom.png"

},
{
    title: "Transport et Logistique",
    icon: "transport.png"
},
{
    title: "Grande distribution",
    icon: "dist.png"
},
{ 
    title: "Manutention", 
    icon: "muni.png"
},
{
    title: "industrie", 
    icon: "ind.png"
}
]

const Sectors = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                   <Typography variant="h4" className={classes.title} >NOS SECTEURS D’INTERVENTION</Typography>

                 <Grid container spacing={6}>
                     
                     {
                         
                       sectors.map(item => (<Grid item sm={6} ><Item sector={item} /></Grid>) )
                     }
                     
                   
                 </Grid>
            </div>
        )
    
}

export default Sectors
