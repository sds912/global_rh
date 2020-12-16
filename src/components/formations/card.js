import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  p1:{
      width: '60%',
      padding: '1em'

  },
  p2:{
      width:  '40%',
      padding: '1em'
  },
  img:{
      width: '100%',
      height: "320px"
  },
  title:{
      fontSize: '26px'
  },
  desc:{
      fontSize: '18px'
  }
  
}));

export default function MediaControlCard(props) {
  const classes = useStyles();

  const {formation} = props;

  return (
    <div className={classes.root}>
         <div className={classes.p1}>
            <h4 className={classes.title}>{formation.title}</h4>
            <p className={classes.desc}>{formation.description}</p>
         </div>
         <div className={classes.p2}> 
            <img src={formation.img} className={classes.img} />
         </div>
    </div>
  );
}
