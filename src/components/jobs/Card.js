import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalenderTodayIcon from "@material-ui/icons/CalendarToday";
import { useHistory } from "react-router-dom";
import { useWindowSize } from 'react-window-size-hooks';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "360px",
    backgroundColor: "#f8f8f8",
  },
  arrow: {
    marginLeft: "2%",
    color: "#e56598",
    fontWeight: "800",
  },
  titre: {
    width: "100%",
    height: "220px",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "red",
    opacity: ".1",
    marginTop: "-16.65em",
    color: "#ffffff",
    padding: ".3em ",
    zIndex: "8",
  },
  titreText: {
    zIndex: "1080",
    opacity: "1",
    color: "#C40556",
    position: "absolute",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "-2.2em",
    marginLeft: ".5em",
    
  },
  icon: {
    fontSize: "22px",
    color: "#A3A1A1",
  },
});
const JobCard = (props) => {


  const { width, height } = useWindowSize();



  console.log(width, height)

  const { 
    id,
    title, 
    city, 
    addedAt,
    contractType, 
    image,
   organisation,
    sector} = props.post;

  const classes = useStyles();

  const history = useHistory();


  console.log(props.post)

  return (
    <div className="card" style={{cursor: "pointer"}} onClick={ () => {
      history.push(`/detail?post=${id}`);
    }}>
      <div className="card" style={{width: "100%", textAlign:"left", minHeight: "380px"}}>
        <img className="card-img-top" src={image} alt="Card image cap" style={{height: "180px"}} />
        <div class="card-body">
          <h5 className="card-title text-uppercase font-weight-bold" style={{fontSize: "12px"}}>{title}</h5>
          <div>
            <p style={{fontSize: "12px"}}>{city} | {contractType}</p>
            <p style={{fontSize: "12px", marginTop:"-1em"}}>{organisation} | {sector}</p>
          </div>
          <div className="card-text">
               <span className="text-muted">{
                 addedAt != null
                 ? "Publié le :" + new Intl.DateTimeFormat("en-US", {
                     year: "numeric",
                     month: "2-digit",
                     day: "2-digit",
                   }).format(addedAt)
                 : ""
               }</span>

          </div>
        </div>
      </div>
       
    </div>
  );
};

export default JobCard;
