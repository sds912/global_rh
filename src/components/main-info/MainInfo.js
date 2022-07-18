import React from 'react'
import { Typography, List, ListItemText, makeStyles, Grid } from '@material-ui/core';
import Section1 from './mainInfoSection';
import DraftsIcon from '@material-ui/icons/Drafts';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import MainInfoSection from './mainInfoSection';





const mainInfoData = [
    {
        "key": "034563",
        "icon": "draft",
        "title": "Ne ratez aucune offres",
        "description": "Soyez alerté par email dès qu’une nouvelle offre d’emploi correspond à votre profil"
    },
    {
        "key": "0345663",
        "icon": 'alarm',
        "title": "Gagnez du temps",
        "description": " GRH regroupe pour vous toutes les offres du marché, quel que soit le  secteur ou le type de poste que vous visez" 
    },
    {
        "key": "033364463",
        "icon": 'sharp',
        "title": "Chercher plus",
        "description": "Vous avez un CV ? Grâce à son analyse,nous trouvons pour vous les offres d’emploi qui correspondent à votre profil."
    }
];

const useStyles = makeStyles( (theme) =>({
    root:{
        
         backgroundColor: "#058BA3",
         padding: ".8em 4em",
         color: 'white',
         //marginBottom: "2em"
         [theme.breakpoints.down("md")]: {
            padding: ".8em 1em",
              
            },
         
        
    },
    title:{
        font: "Helvetica Neue",
        fontSize: "26px",
        color: "#FAFBFC",
        marginBottom: "1em",
        
       

       
    }
}))

const MainInfo = () =>  {
    const  classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Typography className={classes.title}>3 bonnes raisons d'utiliser GRH</Typography>
            <div className="row">
                {
                    mainInfoData.map( (v,i) => <div className="col-sm-4" key={i}>
                    <MainInfoSection info={v} />
                   </div>)
                }
            
            </div>
        </div>
    )
}

export default MainInfo;
