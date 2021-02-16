import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "../main/Main";
import SearchResult from "../searchResult/SearchResult";
import Detail from "../detail/Detail";
import AboutUs from "../../components/about-us/AboutUs";
import * as ROUTES from "../../constants/routes";
import Welcome from "../SignUp/Welcome";
import { Component } from "react";
import firebase from "firebase";
import {
  withAuthentication,
  AuthUserContext,
  PostContext,
} from "../../Session";
import DepositCV from "../cv";
import SignInPage from "../../pages/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountPage from '../Account/index';
import SavedOffer from "../savedOffers";
import SavedResearch from '../saveResearsh/index';
import GuardedRoute from './GuardedRoute';
import BackOffice from "../backOffice";
import MySearch from "../MyResearch";
import ListPost from '../backOffice/listPost';
import SignUpPage from "../SignUp";



const searchData = async (job = "", city = "") => {
  const db = firebase.firestore();
  var pts = [];
 
 pts = await db.collection("posts")
    .where("title", "==", job)
    .where("city", "==", city)
    .onSnapshot((snap) => {
     snap.forEach((doc) => {return pts.push({ ...doc.data(), id: doc.id })});
    })
    
  return pts
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      posts: [],
      action: searchData,
    };
  }

  

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });

    const db = firebase.firestore();
    return db.collection("posts").onSnapshot((snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => posts.push({ ...doc.data(), id: doc.id }));
      this.setState({ posts });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div className="App">
        <PostContext.Provider value={this.state}>
          <AuthUserContext.Provider value={this.state.authUser}>
            <Switch>
              <Route exact path={ROUTES.MAIN} component={Main} />
              <Route exact path={ROUTES.RESULT} component={SearchResult} />
              <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route exact path={ROUTES.DETAIL} component={Detail} />
              <Route exact path={ROUTES.ABOUT_US} authUser={this.state.authUser} component={AboutUs} />
              <Route exact path={ROUTES.WELCOME} component={Welcome} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route exact path={ROUTES.DEPOSIT_CV} component={DepositCV} />
              <GuardedRoute exact path={ROUTES.ACCOUNT} component={AccountPage} auth={this.state.authUser} />
              <Route exact path={ROUTES.MY_OFFER} component={SavedOffer} />
              <Route exact path={ROUTES.MY_SEARCH} component={SavedResearch} />
              <Route exact path={ROUTES.ADDPOST} component={BackOffice} />
              <Route exact path={ROUTES.LISTPOST} component={ListPost} />
              <Route exact path={ROUTES.SEARCH} component={MySearch} />
            </Switch>
          </AuthUserContext.Provider>
        </PostContext.Provider>
      </div>
    );
  }
}

export default withAuthentication(App);
