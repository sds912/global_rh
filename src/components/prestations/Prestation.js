import React from 'react'
import { makeStyles, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import MainButton from '../buttons/MainButton';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(() => ({

    root:{

       marginTop: '180px',
       background: 'rgb(8,83,17)',
       padding: '4em .5em',
        background: 'linear-gradient(90deg, rgba(8,83,17,1) 0%, rgba(34,102,23,1) 35%, rgba(77,117,5,1) 100%)',
        
    },
    sbtitle:{
       fontSize: '18px !important',
       color: '#00976b',
       textAlign: 'left'
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
        marginBottom: '.5em',
        fontSize: '36px',
        fontWeight: '800',
        color: '#ffffff'
        

    },
    listItem:{
        marginLeft: '2em'
    },
    text:{
        color: "#ffffff",
        fontSize: "18px !important",
        fontWeight: "600 !important",
        marginLeft: '.3em'
    },
    icon:{
        color: '#00976b',
    }




}))

const prestations = [
    {
      titre: "LA GESTION DES RESSOURCES HUMAINES",
      description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
      image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg",
      items: [
        "Mise à dispositions de personnels compétents",
        "Gestion Administrative des missions et de l’agence",
        "Gestion et contrôle de la paie",
        "Gestion des risques liés aux personnels",
        "Assurer le Suivi commercial et Technique du personnel RH",
        "Œuvrer pour la politique de prévention des risques professionnels",
        "Gérer l’accueil des Salariés intérimaires",
        "Appliquer la législation du travail temporaire"
      ],
      color: 'red'
      
    },
    {
        titre: "LE RECRUTEMENT DU PERSONNEL POUR TOUT SECTEUR",
        description: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.",
        image: "https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066__340.jpg",
        items: [
          "Recruter des cadres de tout niveau selon vos besoins",
          "Recruter des personnels de toutes qualifications pour votre entreprise"
        ],
        color: 'blue'
      }
      


];


const Prestations = () => {

    const classes = useStyles();

        return (
            <div className={classes.root}>
                   <Typography variant="h4" className={classes.title} >NOS PRESTATIONS (SERVICES)</Typography>

                 <Grid container spacing={6}>
                       {
                          prestations.map(item => ( 
                          <Grid item sm={6}>
                              <h5 className={classes.sbtitle}>{item.titre}</h5>
                              <List>
                              {
                                  item.items.map(elt => (
                                   <ListItem className={classes.listItem}>
                                    <DoneIcon className={classes.icon} />
                                       <ListItemText
                                    classes={{primary: classes.text}}
                                        primary={elt}
                                        
                                        
                                       />
  
                                       
                                   </ListItem>
                                  ))
                              }
                              </List>
                              
                          </Grid>))
                       }

                 </Grid>
            </div>
        )
    
}

export default Prestations
