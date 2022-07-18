import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimeAgo from "javascript-time-ago";

import fr from "javascript-time-ago/locale/fr";
import { isMobile } from "react-device-detect";
import MainButton from "../buttons/MainButton";
import firebase from "firebase";
import { ToastContainer, toast } from 'react-toastify';

const FieldValue = firebase.firestore.FieldValue;

TimeAgo.addLocale(fr);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "280px",
    backgroundImage: 'url("/subbanner.png")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "3em",
    position: "relative",
    fontWeight: "600",
  },
  menu: {
    display: "flex",
  },
  logo: {
    display: "flex",
    color: "gray",
    fontSize: "18px",
    textDecoration: "none",
  },
  divider: {
    width: "2px",
    height: "18px",
    backgroundColor: "#707070",
    margin: "0 1em 0 1em",
  },
  print: {
    position: "absolute",
    right: "2em",
    display: "flex",
  },
  title: {
    textAlign: "center",
  },
  name: {
    fontSize: isMobile ? "14px" : "2em",
    fontWeight: "800",
    color: "#151110",
  },
}));

const SubBanner = (props) => {
  const classes = useStyles();

  const { post } = props;

  const timeAgo = new TimeAgo("fr-FR");

  const notify = () => toast.success("Votre candidature a été envoyé avec succes !");

  const postuler=  async () => {
    notify();

     let isExiste = false;
     if(firebase.auth().currentUser !== null){
      const data = await firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).get();
      const user = data?.data();

      firebase.firestore().collection('posts').doc(post?.uid).update('candidates', FieldValue.arrayUnion(user)).then(v => {
        console.log(v)
        
      }).catch(err => console.log(err))
     }
  }

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <a href="" className={classes.logo}>
          <img src="home.png" alt="Home" style={{ marginRight: "4px" }} />
          <span>Home</span>
        </a>
        <span className={classes.print}>
          <a href="">
            {" "}
            <img
              src="print.png"
              alt="Home"
              style={{ marginRight: "4px" }}
            />{" "}
          </a>
          <div className={classes.divider}></div>
          <a href="">
            {" "}
            <img
              src="question.png"
              alt="Home"
              style={{ marginRight: "4px" }}
            />{" "}
          </a>
        </span>
      </div>

      {post != null ? (
        <div className={classes.title}>
          <h5 className={classes.name}>{post.title}</h5>
          <div
            style={{
              display: "flex",
              margin: "2em auto",
              fontSize: "16px",
              justifyContent: "center",
            }}
          >
            <span>{timeAgo.format(post?.addedAt)}</span>
            <div className={classes.divider}></div>
            <span className={classes.mt}>{post?.contractType}</span>
            <div className={classes.divider}></div>
            <span>{post?.city}</span>
            <div className={classes.divider}></div>
            <span>{post?.sector}</span>
          </div>
          <MainButton title='Postuler maintenant' color='#C40556' action={postuler} />
        </div>
      ) : (
        <span>Loading ...</span>
      )}
      
    </div>
  );
};

export default SubBanner;
