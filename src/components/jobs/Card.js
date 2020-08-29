import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalenderTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,

    backgroundColor: '#ffffff',
    
    
  },
  arrow:{
    marginLeft: '2%',  
    color: '#e56598',
    fontWeight: '800'
    
  },
  titre:{
    width: '100%',
    height: '220px',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'black',
    opacity: '.3',
    marginTop: '-16.65em',
    color: '#ffffff',
    padding: '.3em ',
    zIndex: '8'
  },
  titreText:{
    zIndex:'1080', 
    opacity:'1', 
    color: "#ffffff", 
    position: 'absolute',
    fontSize: '18px', 
    fontWeight: '800',
    marginTop: '-2.2em',
  marginLeft: '.5em'},
  icon:{
    fontSize: '22px',
    color: '#A3A1A1'
  }
});
const  JobCard = (props) =>
{
  const age = useState(45)
  const {job} = props;

  console.log(props)
  const classes = useStyles();

  

  return (
    <Card className={classes.root} elevation={0.0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={job.title}
          height="220"
          image={job.image}
          title="Contemplative Reptile"
        />
          <Typography gutterBottom variant="h5" component="h2" className={classes.titreText}> 
            {job.titre}
          </Typography>
          
        <div className={classes.titre}> 
        
        </div>
        <CardContent>
            <span   style={{float: "left", fontWeight: "800", fontSize: "18px"}}>
              <LocationOnIcon className={classes.icon} /> {job.ville}
            </span>
            <span style={{ fontWeight: "800", fontSize: "18px"}}>
              <CalenderTodayIcon  className={classes.icon} /> {job.addedAt}
            </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
