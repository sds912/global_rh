import React, { useState } from "react";
// At first you need to import useForm you can do that this way:
import { useForm} from "react-hook-form";

import data from "./countries.json";
import firebase  from 'firebase';
import { CircularProgress } from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";




function CandidateForm() {
const [ datas, setDatas ] = useState(data);
const [loading, setLoading] = useState(false);
const [fileName, setFileName] = useState();
const [confirm, setConfirm] = useState(true);
const history = useHistory();




 

  const { register, handleSubmit, errors, reset } = useForm();

 

  const onSubmit = async (formData) => {
    if(formData['password'] != formData['confirm']){
      setConfirm(false);
    }else{
      setConfirm(true);
      let cvFile = formData.cv[0];
   await handleUpload(cvFile, formData);

    }
    

  
    
  };

  const handleChange = (e) => {
   setFileName(e.target.files[0].name);

  }

  
  const handleUpload = async (file, formData) => {
    setLoading(true);
    const uploadTask = firebase.storage().ref(`cvs/${file.name}`).put(file);
   uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("ok");
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
     async (success) => {
       firebase
          .storage()
          .ref("cvs")
          .child(file.name)
          .getDownloadURL().then((url) => {
            formData['cv'] = url;

            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
              .catch((error) => {
                     toast('Ce mail exist déjà')
              })
              .then((ress) => {
                console.log(ress)
                formData['uid'] =ress.user.uid
                firebase.firestore().collection('candidature').add(formData).then((res) => {
                  setLoading(false);
                  history.push(`/account/${res?.user?.uid}`)
                }).catch((error) => {
                })
                
              })
            
          })
          
          
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-left">
      <div className="form-group">
        <label>Votre CV</label>
        <div class="custom-file">
            <input 
            type="file" 
            accept="application/pdf, application/vnd.ms-excel, apllication/.doc"
            class="custom-file-input" 
            id="customFile" 
            name="cv"
            ref={register({required: true})} 
            onChange={handleChange}
            />
            <label class="custom-file-label" for="customFile">{ fileName != null ? fileName : "Sélectionner un CV" }</label>
        </div>
        {errors.cv && <span style={styles}>Ajouter un CV</span>}
      </div>
      
       <div className="form-group">
        <label>Prénom</label>
         <input 
         name="firstName" 
         type="text" 
         className="form-control"
         ref={register({required: true})} 
         />
         {errors.firstName && <span style={styles}>Le champ Prénom est requis</span>}
       </div>
        <div className="form-group">
            <label>Nom</label>
            <input
            name="lastName"
            type="text"
            className="form-control"
            ref={register({required: true })}
            />
            {errors.lastName && <span style={styles}>Le champ Nom est requis</span>}
        </div>
        <div className="form-group">
            <label>Adresse Email</label>
            <input
            name="email"
            type="email"
            className="form-control"
            ref={register({ required: true })}
            />
            {errors.email && <span style={styles}>Le champ Email est requis</span>}
        </div>
        <div className="form-group">
            <label>Téléphone</label>
            <input
            name="phone"
            type="tel"
            className="form-control"
            ref={register({required: true })}
            />
            {errors.phone && <span style={styles}>Le champ Téléphone est requis</span>}
        </div>
        <div className="form-group">
            <label>Mot de passe</label>
            <input
            name="password"
            type="password"
            className="form-control"
            ref={register({required: true })}
            />
            {errors.phone && <span style={styles}>Entrer votre mot de passe</span>}
            {confirm == false ?  <span style={styles}>Les mots de passe ne correspondent pas</span> : ""}

        </div>
        <div className="form-group">
            <label>Confimer votre mot de passe</label>
            <input
            name="confirm"
            type="password"
            className="form-control"
            ref={register({required: true })}
            />
            {errors.phone && <span style={styles}>Confirmer votre mot de passe</span>}
            {confirm == false ?  <span style={styles}>Les mots de passe ne correspondent pas</span> : ""}
        </div>
        
        <div className="form-group">
            <label>Adresse </label>
            <input
            name="adresse"
            type="text"
            className="form-control"
            ref={register({ required: true })}
            />
            {errors.adresse && <span style={styles}>Le champ Adresse est requis</span>}
        </div>
         
        <button type="submit" style={{
          "backgroundColor": "#008ba6",
          "float": "right",
          "padding": ".8em 2em",
          "outline": "none",
          "border": "none",
          "color": "#ffffff",
          "cursor": "pointer",
          "borderRadius": "4px"
        }} >
          Enrégistrer
          { loading ? <CircularProgress size="22" color="#FFFFFF" style={{fontWeight: "bold"}} /> : ''}
         
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default CandidateForm;


const styles = {
  color: "red",
  fontSize: "12px"
};