import React,{ useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Button,
  Grid
} from "@material-ui/core";

import CustomInput from "./CustomInput";
import { useState } from "react";
import { PostContext } from "../../Session";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    backgroundColor: "#d4d4d4a4",
    marginTop: "20em",
    padding: "2em 1em"
  },
 
  btn: {
    backgroundColor: "#1C5EAC",
    fontSize: "12px",
    color: "#ffffff",
    width: "100%",
    height: "48px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#1C5EAC",
    },
    opacity: 1,
  },
  formFeild: {
    border: "none",
    width: "100%",
    height: "48px",
    outline: "none",
    backgroundColor: "#ffffff",
    padding: "0 .5em",
    
   
  },
 
}));

const jobs = [
  
];

const cities = [

];

const Search = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [job, setJob] = useState("");
  const [city, setCity] = useState("");

  const {posts, action} = useContext(PostContext);

  const onSearch = () => {
   let postes = action(job, city);
    if (job != "" && city != "") {
      history.push({
        pathname: `/result`,
      });
    } else {
    }
  };

  return (
    <div className={classes.root}>
        <div className="row">
         <div className="col-sm-4 my-2">
         <CustomInput
              elt={jobs}
              type={1}
              value={props.job}
              setValue={setJob}
              input={classes.formFeild}
            />
         </div>
         <div className="col-sm-5 my-2">
         <CustomInput
              elt={cities}
              type={2}
              value={props.city}
              setValue={setCity}
              input={classes.formFeild} 
            />
         </div>
         <div className="col-sm-3 my-2"> 
         <Button color="primary" className={classes.btn} onClick={onSearch}>Rechercher</Button>

         </div>

       </div>
          
    </div>
    
   
  );
};

export default Search;
