import {  makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { AuthUserContext } from "../../Session";
import { useHistory, useLocation } from "react-router-dom";
import  firebase  from 'firebase';
import Footer from "../../components/footer/Footer";
import { RESULT, MAIN } from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url('/relaxe.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
   
    backgroundOrigin:"content-box",
    backgroundClip: "content-box",
    padding:'2em 0'
  },
  body:{
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]:{
      height: "calc(100vh + 120px)",
      paddingBottom: "250px"
   },
    backgroundColor: "#fdc700"
  },
  btn: {
    margin: "3em auto",
    display: "block",
    width: "60%",
    padding: "1.2em .5em",
    border: "1px solid #cfcfcf",
    borderRadius: "4px",
    fontSize: "12px",
    transition: "background-color 0.5s ",
    backgroundColor: "#f4f9f9",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#b9ced2"
    }
  },
  main:{
    textAlign: "left",
    padding: "1.2em 0 0 4em",
    fontSize: "18px",
    fontWeight: "400"
  },
  title:{
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: "80%",
    color: "#d2004e",
    padding: "0 1em"
  }
}));

const DepositCV = () => {
  const user = useContext(AuthUserContext);
  const history = useHistory();

  const [picture, setPicture] = useState(null);

  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      handleUpload(e.target.files[0]);
    }};
  
   const saveData = (url) => {
     const data = {
       "addedAt": new Date().getTime(),
       "cv": url,
       "type": "1"
     }
    firebase.firestore().collection('candidats').add(data).then((v) => {
      setLoading(false);
      setDone(true)

    })
   }
  const handleUpload = (file) => {
    
    const uploadTask = firebase.storage().ref(`cvs/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (error) => {
        // Error function ...
        console.log(error);
        setLoading(false)
      },
      () => {
        // complete function ...
        firebase
          .storage()
          .ref("cvs")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            
            saveData(url);
            //saveData(picture).then(() => console.log("ok"));
          });
      }
    );
  };

  const classes = useStyles();
  
  return (

    <>
    <div>
      <Header />
      <div className={classes.body}>
        <div className="row">
          <div className="col-sm-6" >
           <img src="/relaxe.png" width="60%"  />
          </div>
          <div className="col-sm-6 mt-5">

            <div className={classes.title} >

            <h5>Marre de chercher ? <br /> Laissez les recruteurs vous trouver !</h5>
            </div>
            <div className={classes.main}>

              <h6  style={{
                fontSize: "18px",
                fontWeight: "400",
                marginLeft: "1.3em",
                marginBottom: "-.2em"
              }}>Télécherger votre CV sur GRH pour :</h6>
              <ul style={{
                lineHeight: "180%"
              }}>
                <li>Être visible auprés des recruteurs</li>
                <li>Postuler aux offres d'emploi en quelques clics</li>
                <li>Postuler depuis votre mobile</li>
              </ul>
              
            </div>
             
             <div style={{
               textAlign: "left",
               margin: "1.5em 0 -2em 10%",
               lineHeight: "80%",
               fontSize: "12px"

             }}>
             <p>* Formats acceptés: <span>fichier texte doc, docx, pdf, rtf, txt; 5Mo max.</span></p>
              
             </div>
     
              <div className="btn p-0 btn-block ">
                <label
                  className={classes.btn}
                  for="upload"
                  
                >
                  <img
                    src="/computer.png"
                    alt=""
                    style={{ float: "left", marginTop: "-.4em" ,  height: "26px"}}
                  />
                  <input id="upload" type="file" hidden  onChange={(e) => onChangePicture(e)} />
                  
                  {
                    picture !== null ? picture.name : "Télécharger via mes documents"
                  }
                </label>
              </div>
              {
                loading ? <img src="/logo/ajax-loading-big.gif" height="80px" style={{marginTop: "-2em"}} /> : '' 
              }

              {
                done ? <img src="/logo/success.gif" height="80px" style={{marginTop: "-2em"}} /> : ''
              }
             {
               done ? <div className="row px-5">
                <div className="col-sm-6">
                  <button 
                  style={{outline: "none", border: "0", cursor: "pointer", padding: ".5em 1.5em",backgroundColor: "#058BA3", color: "#ffffff"}}
                  onClick={() => history.push(MAIN)}>
                    Retour sur la page d'acceuil
                  </button>
                </div>
                <div className="col-sm-6 ">
                  <button 
                  style={{outline: "none", border: "0", cursor: "pointer", padding: ".5em 1.5em", backgroundColor: "#d2004e", color: "#ffffff"}}
                  onClick={() => history.push(RESULT)}>
                    Consulter les offres
                  </button>
                </div>
              </div> : ''
            }
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DepositCV;
