import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  arrow:{
    marginLeft: '2%',
    color: '#e56598',
    fontWeight: '800'
    
  },
  titre:{
    width: '100%',
    height: '45px',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'black',
   opacity: '.5',
    marginTop: '-4.1em',
    color: '#ffffff',
    padding: '.3em ',
    zIndex: '8'
  },
  titreText:{
    zIndex:'1080', 
    opacity:'1', 
    color: "#ffffff", 
    position: 'absolute',
    fontSize: '16px', 
    fontWeight: '400',
    marginTop: '-2.2em',
  marginLeft: '.5em'},
  icon:{
    fontSize: '16px',
    color: '#e56598'
  }
});
const  ImgMediaCard = (props) =>
{
  const age = useState(45)
  const {job} = props;

  console.log(props)
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image={job.image}
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h5" component="h2" className={classes.titreText}> 
            {job.titre}
          </Typography>
          
        <div className={classes.titre}> 
        
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'left'}}>
            <LocationOnIcon className={classes.icon} /> {job.ville}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'left'}}>
            <CardTravelIcon  className={classes.icon} /> {job.ville}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{display:'flex'}}>
            <span style={{marginLeft: '60%', color: '#e56598'}} >Description</span> <TrendingFlatIcon className={classes.arrow} /> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImgMediaCard;
