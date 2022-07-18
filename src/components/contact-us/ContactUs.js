import React from "react";
import { MAINBLUE, WHITE } from "../../constants/colors";
import {isMobile} from 'react-device-detect';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const classes = {
    "main": {
        "backgroundColor": MAINBLUE,
        "color": WHITE,
        "padding": isMobile ?  "2em 3em" : "2em 8em"
    },
    "btn": {
        "padding": ".5em 3em",
        "backgroundColor": "orange",
        "color": WHITE,
        "outline": "none",
        "border": "none"
    },

    "title":{
        "fontSize": "22px"
    },
    "info": {
        "fontSize": "12px"
    }
}


const ConstactUs = () => {

    


    return (<div style={classes.main} className="container-fluid" id="contact">
                 <div className="row">
                    <div className="col-sm-7">
                      <h1 style={classes.title} className="text-left">Prendre un rendez-vous</h1>
                      <div  className="text-left mt-4 mb-4">
                          <h4 style={classes.info}>Disponible 24 h / 24 7j / 7</h4>
                          <h4 style={classes.info}> <Mail className="mr-2" /> contact@global-rh.sn</h4>
                          <h4 style={classes.info}> <Phone className="mr-2" /> 33 434 45 76</h4>
                      </div>
                        <div className="text-left mt-4" >
                            <TwitterIcon />
                            <FacebookIcon className="mx-2" />
                            <LinkedInIcon />
                        </div>
                    </div>
                    <div className="col-sm-5">
                      <h1 style={classes.title} className="text-left mb-3">Laissez-nous un message</h1>
                       <input 
                         className="form-control"
                         placeholder="votre nom"
                         type="text"
                        />
                        <input 
                         className="form-control my-3"
                         placeholder="votre adresse email"
                         type="email"
                        />
                       <textarea
                         placeholder="votre message"
                         className="form-control"
                        />
                       <button style={classes.btn} className={ isMobile ? "mt-3" : "mt-3 float-right"} >Envoyer</button>
                    </div>
                 </div>
            </div>)
}


export default ConstactUs;