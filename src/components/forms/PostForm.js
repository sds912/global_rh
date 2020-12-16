import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
import UploadButtons from "./Uploader";
import firebase, { firestore } from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import MainButton from "../buttons/MainButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d7ebf9",
    padding: "2em 1.5em",
    width: "100%",
  },
  formField: {
    width: "100%",
    height: "56px",
    border: "none",
    outline: "none",
    padding: "0 1em",
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "2.5em",
  },
  text: {
    width: "90%",
    height: "230px",
    border: "none",
    outline: "none",
    padding: "1em",
    fontSize: "16px",
    fontWeight: "400",
  },
}));

const PostForm = (props) => {
  const classes = useStyles();
  const [pdf, setPDF] = useState();
  const [opened, setOpened] = useState(true);
  const [loading, setLoading] = useState(false);

  const [state, setState] = React.useState({
    newsLetter: true,
  });

  const [value, setValue] = React.useState();

  const valueChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const uploadChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      const pdf = e.target.files[0];
      setPDF(pdf);
    }
  };

  const saveData = async (url) => {
    if (pdf != null) {
      value["cv"] = url;
      value["newslette"] = state.newsLetter;
      value["post"] = props.post;
      value["type"] = "2"

      await firebase.firestore().collection("candidats").add(value);
      setOpened(false);
      setLoading(false);
    }
  };

  const handleUpload = () => {
    setLoading(true);
    const uploadTask = firebase.storage().ref(`cvs/${pdf.name}`).put(pdf);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("ok");
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        firebase
          .storage()
          .ref("cvs")
          .child(pdf.name)
          .getDownloadURL()
          .then((url) => {
            saveData(url).then(() => console.log("ok"));
          });
      }
    );
  };

  return (
    <div className={classes.root}>
      {loading ? <CircularProgress /> : ""}
      {opened ? (
        <div>
          <input
            name="email"
            id="email"
            type="email"
            className={classes.formField}
            placeholder="Email"
            onChange={valueChange}
          />
          <UploadButtons change={uploadChange} pdf={pdf} />
          <div style={{ marginTop: "5em" }}>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              Lettre de motivation ou message d'accompagnement (optionnel)
            </p>
            <textarea
              name="message"
              id="message"
              className={classes.text}
              onChange={valueChange}
            ></textarea>
          </div>
          <FormControlLabel
            style={{
              margin: "2em 0",
              fontSize: "12px",
            }}
            control={
              <Switch
                checked={state.newsLetter}
                onChange={handleChange}
                name="newsLetter"
                color="primary"
                style={{
                  color:"#058BA3"
                }}
              />
            }
            label="Recevoir des offres similaires par semaine"
          />
          <div style={{ marginTop: "2em" }}>
            <MainButton  title="Postuler" color="#058BA3" action={handleUpload} />
              
          
          </div>
        </div>
      ) : (
        <div>
          <img src="/success.webp" alt="" width="180px" />
          <h5 style={{ color: "#00bd46", fontSize: "18px" }}>
            Félicitation votre Candidature a été enrégistré avec success
          </h5>
        </div>
      )}
    </div>
  );
};

export default PostForm;
