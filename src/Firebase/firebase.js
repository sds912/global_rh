import app from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx7zvSxEyxU_TqyXmXZj4Al8EtonMEcg4",
  authDomain: "globalrh-7095b.firebaseapp.com",
  databaseURL: "https://globalrh-7095b.firebaseio.com",
  projectId: "globalrh-7095b",
  storageBucket: "globalrh-7095b.appspot.com",
  messagingSenderId: "1034493100663",
  appId: "1:1034493100663:web:5b17d0b88bcb02068b3c72",
  measurementId: "G-2HGGDEE921"
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
