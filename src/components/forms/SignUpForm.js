import { makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../../Firebase";
import { compose } from "recompose";

import "./style.css";

const SignUpPage = () => (
  <div>
    <h1>S'inscrire</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { firstName, lastName, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser.user.uid)
        this.props.firebase.db.collection('users').doc(authUser.user.uid).set({
          firstName: firstName,
          lastName:lastName,
           email: email,
          uid: authUser.user.uid
        }).then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.MAIN);
        })
        
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, password, confirm, error } = this.state;

    const isInvalid =
      password !== confirm ||
      password === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="firstName"
          value={firstName}
          onChange={this.onChange}
          type="text"
          placeholder="Prénom"
          className="input"
        />
        <input
          name="lastName"
          value={lastName}
          onChange={this.onChange}
          type="text"
          placeholder="Nom"
          className="input"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="eamil"
          placeholder="Adresse Email"
          className="input"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Mots de passe"
          className="input"
        />
        <input
          name="confirm"
          value={confirm}
          onChange={this.onChange}
          type="password"
          placeholder="Confirmer mots de passe"
          className="input"
        />
            <button disabled={isInvalid} type="submit" className="btn">
              S'inscrire
            </button>

        {error && <p className="text-danger">{error.message}</p>}
      </form>
    );
  }
}
const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpForm;

