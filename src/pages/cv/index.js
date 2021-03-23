import {  makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { AuthUserContext } from "../../Session";
import { useHistory, useLocation } from "react-router-dom";
import  firebase  from 'firebase';
import Footer from "../../components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CandidateForm from "../../components/forms/CandidatForm";

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
    
     <Header />
     <Container>
       <Row>
         <Col sx="12">
            <h2 className="text-center py-4" style={{fontSize: "26px"}}>Laissez les recruteurs vous trouver !</h2>
         </Col>
       </Row>
       <Row>
         <Col  md="6">
           <div
            style={{
              width: "100%",
              height: "calc(100vh - 200px)",
              backgroundImage:'url("/relaxe.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "full",
              backgroundSize: "100%"
             }}
           >

           </div>
         </Col>
         <Col sm="12" md="6" className="my-5">
           <CandidateForm />
         </Col>
       </Row>
     </Container>
      
    <Footer />
    </>
  );
};

export default DepositCV;
