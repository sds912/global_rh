import React, { useState } from "react";
// At first you need to import useForm you can do that this way:
import { useForm} from "react-hook-form";

import data from "./countries.json";
import firebase  from 'firebase';
import { CircularProgress } from "@material-ui/core";




function CandidateForm() {
const [ datas, setDatas ] = useState(data);
const [ cities, setCities ] = useState(datas['0']["Senegal"]);
const [loading, setLoading] = useState(false);
const [ countries, setCountries ] = useState(Object.keys(datas['0'])); 
const [fileName, setFileName] = useState();



 

  const { register, handleSubmit, errors, reset } = useForm();

  const  getCities = (country)=>{
    setCities(datas['0'][country]);
   }

  const onSubmit = async (formData) => {
    console.log(formData);
    let cvFile = formData.cv[0];
   await handleUpload(cvFile, formData);

  
    
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
            firebase.firestore().collection('candidature').add(formData).then((res) => {
              setLoading(false);
              reset();
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
            {errors.email && <span style={styles}>Le champ Emai est requis</span>}
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
            <label>Pays</label>
            <select
            name="country"
            type="text"
            className="custom-select"
            onChange={(v) => getCities(v.target.value)}
            defaultValue="Senegal"
            ref={register({required: true })}
            >
              { countries.map((item, key) => <option key={key} value={item} >{item}</option>)}

            </select>
            {errors.country && <span style={styles}>Le champ Pays est requis</span>}
        </div>

        <div className="form-group">
            <label></label>
            <select
            name="city"
            type="text"
            className="custom-select"
            defaultValue="Dakar"
            ref={register({required: true })}
            >
              { cities.map((item, key) => <option key={key} value={item} >{item}</option>)}

            </select>
            {errors.city && <span style={styles}>Le champ Ville est requis</span>}
        </div>
       

        <button type="submit" className="btn btn-primary pulled-right" >
          <span className="mr-5">Enrégistrer</span>
          { loading ? <CircularProgress size="22" color="#FFFFFF" style={{fontWeight: "bold"}} /> : ''}
         
        </button>
      </form>
    </>
  );
}

export default CandidateForm;


const styles = {
  color: "red",
  fontSize: "12px"
};