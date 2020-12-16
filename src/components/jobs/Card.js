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

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",

    backgroundColor: "#ffffff",
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
    color: "#ffffff",
    position: "absolute",
    fontSize: "18px",
    fontWeight: "800",
    marginTop: "-2.2em",
    marginLeft: ".5em",
    
  },
  icon: {
    fontSize: "22px",
    color: "#A3A1A1",
  },
});
const JobCard = (props) => {
  const { post } = props;

  const classes = useStyles();

  const history = useHistory();

  return (
    <Card
      className={classes.root}
      elevation={0.0}
      onClick={() => {
        history.push({
          pathname: "/detail",
          search: `?post=${post?.id}`,
        });
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={post?.title}
          height="220px"
          image={post?.image}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.titreText}
        >
          {post?.title}
        </Typography>

        <div className={classes.titre}></div>
        <CardContent>
          <span style={{ float: "left", fontWeight: "800", fontSize: "18px" }}>
            <LocationOnIcon className={classes.icon} /> {post?.city}
          </span>
          <span style={{ fontWeight: "800", fontSize: "14px" }}>
            <CalenderTodayIcon className={classes.icon} />{" "}
            {post?.addedAt != null
              ? new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(post?.addedAt)
              : ""}
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JobCard;
