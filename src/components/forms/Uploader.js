import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4em",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <input
        accept=".doc,.docx,.pdf,.rtf"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={props.change}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          disableElevation={true}
          style={{
            backgroundColor: "#ffffff",
            width: "100%",
            height: "56px",
          }}
        >
          <span style={{ fontSize: "11px" }}>
            {props.pdf === undefined ? "Selectionner votre CV" : props.pdf.name}
          </span>
        </Button>
      </label>
      <p style={{ marginTop: "1em", textAlign: "left", fontSize: "11px" }}>
        Taille Max. de 2MO. Formats acceptés: .doc .docx .pdf .rtf
      </p>
    </div>
  );
}
