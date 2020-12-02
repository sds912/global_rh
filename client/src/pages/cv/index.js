import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import { AuthUserContext } from "../../Session";
import { useHistory, useLocation } from "react-router-dom";
import { WELCOME } from "../../constants/routes";
import DropboxChooser from "react-dropbox-chooser";
import GooglePicker from "react-google-picker"

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url('/relaxe.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "calc(100vh - 91px)",
    backgroundOrigin:"content-box",
    backgroundClip: "content-box",
    padding:'2em 0'
  },
  body:{
    width: "100%",
    height: "calc(100vh - 91px)",
    backgroundColor: "#fdc700"
  },
  btn: {
    margin: "3em auto",
    display: "block",
    width: "45%",
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
  const location = useLocation();
  /*
  if (user === null) {
    history.push({
      pathname: WELCOME,
      state: { from: location },
    });
  }

  */
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
     
              <div style={{
                display: "flex",
                width: "80%",
                margin: "0 auto"
              }}>
                <span
                  className={classes.btn}
                  
                >
                  <img
                    src="/computer.png"
                    alt=""
                    style={{ float: "left", marginTop: "-.4em" ,  height: "26px"}}
                  />
                  Télécharger via mes documents
                </span>
                <span
                  className={classes.btn}
                  
                >
                  <img
                    src="/drive.png"
                    alt=""
                    style={{ float: "left", marginTop: "-.4em", height: "26px" }}
                  />

                    <GooglePicker clientId={'your-client-id'}
                                  developerKey={'your-developer-key'}
                                  scope={['https://www.googleapis.com/auth/drive.readonly']}
                                  onChange={data => console.log('on change:', data)}
                                  onAuthenticate={token => console.log('oauth token:', token)}
                                  onAuthFailed={data => console.log('on auth failed:', data)}
                                  multiselect={true}
                                  navHidden={true}
                                  authImmediate={false}
                                  mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                                  viewId={'DOCS'}>
                      Google drive
                    </GooglePicker>
                  
                            
                  
                </span>
            
              </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default DepositCV;
