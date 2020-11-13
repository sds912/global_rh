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
    height: "calc(100vh - 91px)",
    backgroundOrigin:"content-box",
    backgroundClip: "content-box"
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
    margin: "-1em 0 0 -2.5em",
    textAlign: "left",
    lineHeight: "80%",
    color: "#d2004e"
  }
}));

const DepositCV = () => {
  const user = useContext(AuthUserContext);
  const history = useHistory();
  const location = useLocation();

  if (user === null) {
    history.push({
      pathname: WELCOME,
      state: { from: location },
    });
  }
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <Grid container spacing={0}>
          <Grid item sm={5}>
            <div className={classes.banner}>

            </div>
          </Grid>
          <Grid item sm={7}>

            <div className={classes.title} >

            <h5>Marre de chercher ?</h5>
            <h5 style={{
              margin: "-1em 0 0 1.2em"
            }}>Laissez les recruteurs vous trouver !</h5>
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

            <GooglePicker clientId={'AIzaSyDyWU4lmBQNY6-th9BEe6Ia1wxgprc9Y_I'}
                          //developerKey={'your-developer-key'}
                          scope={['https://www.googleapis.com/auth/drive.readonly']}
                          onChange={data => console.log('on change:', data)}
                          onAuthFailed={data => console.log('on auth failed:', data)}
                          multiselect={true}
                          navHidden={true}
                          authImmediate={false}
                          mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                          query={'a query string like .txt or fileName'}
                          viewId={'DOCS'}>
              Télécharger via Google Drive
            </GooglePicker>
                  
                            
                  
                </span>
            
              </div>

              <div style={{
                display: "flex",
                width: "80%",
                margin: "0 auto",
                marginTop: "-2.5em"
              }}>
                <span
                  className={classes.btn}
                  
                >
                  <img
                    src="/dropbox.png"
                    alt=""
                    style={{ float: "left", marginTop: "-.4em" , height: "26px"}}
                  />
                  <DropboxChooser
                    appKey={'cd6jkbgkz8uin7k'}
                    success={files => console.log(files)}
                    cancel={() => this.onCancel()}
                    multiselect={true}
                    extensions={['.pdf', 'doc', 'docx', '.txt', '.rtf']} >
                  Télécharger via DropBox
                  </DropboxChooser>
                </span>
                <span
                  className={classes.btn}
                  
                >
                  <img
                    src="/cloud.png"
                    alt=""
                    style={{ float: "left", marginTop: "-.4em",  height: "26px" }}
                  />
                  Télécharger via OneDrive
                </span>
            
              </div>
          

          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default DepositCV;
