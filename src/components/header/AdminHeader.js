import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  useHistory, Link } from "react-router-dom";
import AuthUserContext from "../../Session/context";
import { ADDPOST, DEPOSIT_CV, LISTPOST } from "../../constants/routes";
import { Nav, Navbar } from "react-bootstrap";
import MainButton from "../buttons/MainButton";
import UserAvatar from '../buttons/DropMenu';
import SearchBar from './SearchBar';
import {isBrowser} from 'react-device-detect'
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    zIndex: "1080",
    backgroundColor: "#008ba6 !important",

  },
  divider: {
    width: "2px",
    height: "16px",
  },
 
}));

const AdminHeader = (props) => {
  const classes = useStyles();

  const user = useContext(AuthUserContext);

  const history = useHistory();

  const gotToCV = () =>
    history.push({
      pathname: DEPOSIT_CV,
    });

  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className={classes.root}>
  <Navbar.Brand href="#home">
    <Link to="/"> 
      <img src="/logo/logo.png" height="42px" />
    </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   <div className="ml-auto">
   <Nav >
      <Nav.Link className="align-middle"><SearchBar /></Nav.Link>
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push(LISTPOST);
          }} >Liste des offres</Nav.Link >
          {
            isBrowser ? <div className={classes.divider} style={{ margin:"28px 4px 0 4px" }}></div>: ''
          }
      
      <Nav.Link className="align-middle mt-3" onClick={() => {
            history.push(ADDPOST);
          }}>
      Ajouter un offre
      </Nav.Link>
      <Nav.Link style={{}}>
      {user != null ? <UserAvatar /> : ""}
      </Nav.Link>
      <Nav.Link>
        <Avatar />
      </Nav.Link>
    </Nav>
   </div>
    
  </Navbar.Collapse>
</Navbar>
  );
};

export default AdminHeader;
