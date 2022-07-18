import React from "react";
import { useHistory } from "react-router-dom";
import { MAIN } from "../../constants/routes";

import { withFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => {
  const history = useHistory();

 return  <button
    type="button"
    onClick={() => {
      firebase.doSignOut().then((res) => history.push(MAIN))
    } }
    className="btn btn-outline text-danger"
  >
    Se Déconnecter
  </button>
};

export default withFirebase(SignOutButton);
