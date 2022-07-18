import React, { useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  useHistory, Link } from "react-router-dom";
import AuthUserContext from "../../Session/context";
import { DEPOSIT_CV, SIGN_IN } from "../../constants/routes";
import { Nav, Navbar } from "react-bootstrap";
import MainButton from "../buttons/MainButton";
import UserAvatar from '../buttons/DropMenu';
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root:{
    zIndex: "1080"
  },
  divider: {
    width: "2px",
    height: "16px",
    backgroundColor: "#707070",
  },
 
}));

const Header = (props) => {
  const classes = useStyles();
  const user = useContext(AuthUserContext);
  const history = useHistory();

  const [photoUrl, setPhotoUrl] = useState();

  const gotToCV = () =>{
    if(firebase.auth().currentUser !== null){
      history.push("/account/"+ firebase.auth().currentUser?.uid)
    }else{
      history.go({
        pathname: SIGN_IN,
      })
    }
   };

   

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={classes.root}>
  <Navbar.Brand>
    <Link to="/"> 
      <img src="./logo/logo.png" height="42px" />
    </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   <div className="ml-auto">
   <Nav >
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push("/");
          }}>
       Acceuil
      </Nav.Link>
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push("/result");
          }}>
       Offres d'emploies
      </Nav.Link>
    
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push("/about-us");
          }}>
      Qui sommes Nous
      </Nav.Link>
      
      { 
      firebase.auth().currentUser === null ? 
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push("/signin");
          }} >
           Se connecter 
      </Nav.Link> : 
      <Nav.Link style={{}}>
        <UserAvatar /> 
      </Nav.Link>  
      }
       
      <Nav.Link className="align-middle">
        <MainButton title='Déposer votre CV' color='#C40556' action={gotToCV} />
      </Nav.Link>
      
      
    </Nav>
   </div>
    
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
