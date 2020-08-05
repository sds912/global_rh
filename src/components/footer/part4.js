import React from 'react'
import { Typography, List, ListItemText, Grid } from '@material-ui/core';
import IconFacebook from '@material-ui/icons/Facebook';
import IconTwitter from '@material-ui/icons/Twitter';
import IconLinkedIn from '@material-ui/icons/LinkedIn';
import IconInstagram from '@material-ui/icons/Instagram';





const Part4 = () =>  {
    return (
        <div>
             <List dense={true}>
                  <ListItemText primary="Rejoindre Actual"/>
                  <ListItemText primary="On parle de nous"/>
                  <ListItemText primary="Mentions légales"/>
                  <ListItemText primary="CGU"/>
                  <ListItemText primary="Données personnelles"/>
            </List>

            <div>
                  <IconFacebook />
                  <IconTwitter />
                  <IconLinkedIn />
                  <IconInstagram />
            </div>
        </div>
    )
}

export default Part4;
