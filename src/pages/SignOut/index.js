import React from "react";

import { withFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase.doSignOut}
    style={{
      color: "#ffffff",
      backgroundColor: "red",
      padding: "0.5em 0.3em",
      border: "none",
      outline: "none",
      cursor: "pointer",
    }}
  >
    Se Déconnecter
  </button>
);

export default withFirebase(SignOutButton);
