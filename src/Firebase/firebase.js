import app from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm6uj4FyLvWwTk4u8X8jYSQetqokG9Bqw",
  authDomain: "global-rh.firebaseapp.com",
  databaseURL: "https://global-rh.firebaseio.com",
  projectId: "global-rh",
  storageBucket: "global-rh.appspot.com",
  messagingSenderId: "1041109791112",
  appId: "1:1041109791112:web:670e4bb98c9190c243ca3d",
  measurementId: "G-SHG7BEXK6J",
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
