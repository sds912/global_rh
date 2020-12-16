import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const useStyles = makeStyles({
  root: {
    width: "89%"
    
  },
  arrow:{
    marginLeft: '2%',
    color: '#e56598',
    fontWeight: '800'
    
  },
  titre:{
    width: '100%',
    height: '80px',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '#e56598',
   opacity: '.5',
    marginTop: '-6.8em',
    color: '#ffffff',
    padding: '.3em ',
    zIndex: '8'
  },
  titreText:{
    zIndex:'1080', 
    opacity:'1', 
    color: "#ffffff", 
    position: 'absolute',
    fontSize: '22px', 
    fontWeight: '800',
    marginTop: '-3.2em',
  marginLeft: '.5em'},
  icon:{
    fontSize: '16px',
    color: '#e56598'
  },
  list:{
      fontSize: '12px'
  },
  listItem:{
      fontSize: '10px'
  },
  itemText:{
     fontSize: ' 12px !important',
  },
  icon:{
      fontSize:'18px'
  }
});
const  SolCard = (props) => {
  const {sol} = props;

  const classes = useStyles();

  

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="solution image"
          height="160"
          image={sol.image}
          title="solution"
        />
        <Typography gutterBottom variant="h5" component="h2" className={classes.titreText}> 
            {sol.titre}
          </Typography>
          
        <div className={classes.titre}> 
        
        </div>
        <CardContent>
        <Typography variant="p">{sol.description}</Typography>
        <List component="ul" className={classes.list} aria-label="contacts" >
            {
                sol.items.map(item => {
                    return (
                       <ListItem className={classes.listItem} >
                            <ListItemIcon>
                            <CheckCircleOutlineIcon className={classes.icon} style={{color: sol.color}} />
                            </ListItemIcon>
                            <ListItemText primary={item} className={classes.itemText} />
                       </ListItem>
                    )
                })
            }
            
           
        </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SolCard;
