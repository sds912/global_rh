import React, { useState } from 'react';
import firebase from "firebase";
const FieldValue = firebase.firestore.FieldValue;


const EducationForm  =  (props) => {

   const [formData, setDataForm] =  useState( props.editing ? {
     diplome: props.formation.diplome,
     ecole: props.formation.ecole,
     description: props.formation.description,
     year: props.year
   } : {year: '2000'});
   const [monthes, setMonthes] = useState(["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]);
   const [years, setYears]  = useState(['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010','2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);

    return <div className="m-5">
              <h4>Ajouter une formation</h4>
              <div className="row mt-2">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Diplôme(s)</label>
                      <input type="text" 
                      defaultValue={props.formation !== null ? props.formation.diplome : ""}
                      className="form-control" placeholder="Diplôme(s)" name="diplome" onChange={(e)=>{ 
                        formData.diplome = e.target.value;
                        setDataForm(formData);
                        }} />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Université / Ecole</label>
                      <input type="text" className="form-control"
                       defaultValue={props.formation !== null ? props.formation.ecole : ""}
                       placeholder="Etablissement" name="ecole" onChange={(e)=>{ 
                        formData.ecole = e.target.value;
                        setDataForm(formData);
                        }} />
                    </div>
                  </div>
                  
              </div>
              
              <div className="form-group">
                <label>Date d'obtention</label>
                <div className="row">
                    <div className="col-12">
                    <select className="form-control" 
                    defaultValue={props.formation !== null ? props.formation.year : ""}
                    onChange={(e)=>{ 
                      formData.year = e.target.value;

                      setDataForm(formData);
                      }}>
                    {years.map((y) => <option 
                      value={y}
                      key={y}
                    >{y}</option>)}
                  </select>
                    </div>
                </div>
                
            </div>
              <div className="form-group">
                <label>Description de la formation</label>
              <textarea className="form-control" 
              defaultValue={props.formation !== null ? props.formation.description : ""}
              placeholder="Descrire votre rôle" rows={4}  onChange={(e)=>{ 
                        formData.description = e.target.value;
                        setDataForm(formData);
                        }}>
                
              </textarea>
              </div>
             
              <p className="float-right mt-3">
              <button
              style={{
                backgroundColor: 'var(--mainBlue)',
                color: '#FFFFFF',
                fontSize: '18px',
                outline: 'none',
                padding: '.3em 1.5em',
                border: 'none'
              }}

              onClick={ () => {
                if(props.editing){
                  

                  firebase
                  .firestore()
                  .collection('users')
                  .doc(props.user?.uid)
                  .update("formations", FieldValue.arrayUnion(formData))
                  .then((res) => {
                    firebase
                  .firestore()
                  .collection('users')
                  .doc(props.user?.uid)
                  .update("formations", FieldValue.arrayRemove(props.formation))
                  .then((res) => {
                    firebase.firestore()
                     .collection('users')
                     .doc(props.user?.uid)
                     .get()
                     .then((data) => {
                        props.setUser(data.data());
                        props.action(false);
                     })
                  }).catch((e) => alert(e))
                   
                  }).catch((e) => {
                    alert(e);
                    props.action();
                  })
                 
                  

                  
                }else{
                  firebase
                  .firestore()
                  .collection('users')
                  .doc(props.user?.uid)
                  .update("formations", FieldValue.arrayUnion(formData))
                  .then((res) => {
                    firebase.firestore()
                     .collection('users')
                     .doc(props.user?.uid)
                     .get()
                     .then((data) => {
                        props.setUser(data.data());
                        props.action(false);
                     })

                  }).catch((e) =>{ 
                    alert(e); 
                    props.action(false);})
                }
               

               
               
             
             }}
              >Enregistrer</button>
              </p>
              <div style={{"height": "8px"}}>

              </div>
           </div>
}

export default EducationForm;