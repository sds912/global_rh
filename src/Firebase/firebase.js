import app from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA12Zswbak5b5eAjq4F0Mz24hF5sllOpMU",
  authDomain: "global-rh-7bd6a.firebaseapp.com",
  projectId: "global-rh-7bd6a",
  storageBucket: "global-rh-7bd6a.appspot.com",
  messagingSenderId: "727956232509",
  appId: "1:727956232509:web:8355f72a7256b4e77c4d54",
  measurementId: "G-G63N37RM9G"
};
const googleProvider = new app.auth.GoogleAuthProvider();
const facebookProvider = new app.auth.FacebookAuthProvider();

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.strorage = app.storage().ref();
     this.db = app.firestore()
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doSignInWithGoogle = () => this.auth.signInWithPopup(googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(facebookProvider);

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  
  doUploadFile  = (image) => this.storage.child("images/${image}")
}






export default Firebase;
