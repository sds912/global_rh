import React from 'react';
import Header from '../header/Header';
import { makeStyles } from '@material-ui/core';
import Search from '../search/Search';
import SideButtons from '../buttons/SideButtons';


const menus = [{
    title: 'Le groupe',
    url: ''
},
{
    title: 'Entreprise',
    url: ''
},
{
    title: 'Candidat',
    url: ''
},
{
    title: 'Recreteur',
    url: ''
}
]


const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      height: 'calc(100vh - 40px)',
      backgroundImage:"url('https://cdn.pixabay.com/photo/2018/04/07/13/13/handshake-3298455_960_720.jpg')",
      backgroundPosition:'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  },

  mainText:{
      marginTop: '40px',
      color:'#ffffff',
      fontSize: "36px",
      fontWeight: '800'
  },
  subText:{
      color: '#ffffff',
      fontSize: '22px'
  }
} ));

const Banner = ()  => {

    const classes = useStyles();
    return (
        <div className={classes.root}> 
            <Header sections={menus} title="global RH" />
            <h2 className={classes.mainText}>Construisons ensemble votre travail.</h2>
            <h5 className={classes.subText}>Nous avons forcément un travail pour vous.</h5>
            <Search />
            <SideButtons />
        </div>
    )
}

export default Banner;
