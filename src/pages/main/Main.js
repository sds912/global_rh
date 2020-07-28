import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import AboutUs from '../../components/about-us/AboutUs';
import Jobs from '../../components/jobs/Jobs';
import Sol from '../../components/solution/Solution';
import { MapContainer } from '../../components/map/MapContainer';


const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));


export default function Main(props) {
  const classes = useStyles();

  return (
    <div className="Main"> 
      
       <Banner />
       <AboutUs />
       <Jobs />
       <Sol />
       <MapContainer />
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};