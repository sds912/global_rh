import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer  = (props)  => {

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
 
    return (
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyC092jkLHo4VkS1zcn47JTkDJJCV8V-Ce0'}}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      
    </GoogleMapReact>
    );
  
}

export default MapContainer;