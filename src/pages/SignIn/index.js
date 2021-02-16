import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../constants/routes";
import { CircularProgress } from "@material-ui/core";

const SignInPage44 = () => (
  <div>
    <h1>Se connecter</h1>
    <SignInForm44 />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  loading: false
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    this.setState({['loading']: true})
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.MAIN);
      })
      .catch((error) => {
        this.setState({ error });
        this.setState({['loading']: false})
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formatError = (error) => {
    let sms = ''
     if(error.code == "auth/user-not-found"){
       sms = "Votre adresse email n'existe pas sur la platforme";
     }

     return sms;
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} className="px-5 text-left mt-5">
        <div className="form-group mt-5">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Adresse Email"
            style={{height: "48px"}}
          />
        </div>
        <div className="form-group mt-4 mb-4">
            <label>Mot de passe</label>
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Mots de passe"
              className="form-control"
              style={{height: "48px"}}
            />
        </div>
       <div className="text-center">
          <button disabled={isInvalid} type="submit" className="btn btn-outline-info">
            <span className="mr-4">Se Connecter</span>
            {this.loading ? <CircularProgress size="18" style={{color: "blue", fontWeight: "bold"}} /> : ''}
          </button> 
       </div>
        {error && <p className="text-danger">{this.formatError(error)}</p>}
      </form>
    );
  }
}

const SignInForm44 = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage44;

export { SignInForm44 };
