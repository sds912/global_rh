import { firestore } from "firebase";
import { LIST_CANDIDAT } from "../../constants/actions-type";

const initialState = {
  candidats: [],
};



const getCandidats = () => {
  
}

function rootReducer(state = initialState, action) {
  if (action.type === LIST_CANDIDAT) {
    state.mode  = action.payload;
  }
  
  return state;
}

export default rootReducer;