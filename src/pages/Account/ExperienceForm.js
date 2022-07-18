import React, { useState } from 'react';
import firebase from "firebase";
const FieldValue = firebase.firestore.FieldValue;


const ExperienceForm  =  (props) => {

   const [formData, setDataForm] =  useState(props.editing ? {
    entreprise: props.experience.entreprise ,
    adresse: props.experience.adresse,
    role: props.experience.role,
    start: {month:props.experience.start.month , year: props.experience.start.year},
    end: {month:props.experience.end.month , year: props.experience.end.year}
  }: {start: {month: 'Janvier', year: '2000'}, end: {month: 'Janvier', year: '2000'}});
   const [monthes, setMonthes] = useState(["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]);
   const [years, setYears]  = useState(['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010','2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);


   
  

    return <div className="m-5">
              <h4>Ajouter une expérience professionelle</h4>
              <div className="row mt-2">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Nom de la société</label>
                      <input type="text" defaultValue={props.experience !== null ? props.experience.entreprise : ""} className="form-control" placeholder="Nom de la société" name="entreprise" onChange={(e)=>{ 
                        formData.entreprise = e.target.value;
                        setDataForm(formData);
                        }} />
                    </div>
                    <div>
                    <div className="form-group">
                      <label>Adresse</label>
                      <input type="text" className="form-control" defaultValue={props.experience !== null ? props.experience.adresse : ""}  placeholder="Adresse de la société" name="adresse" onChange={(e)=>{ 
                        formData.adresse = e.target.value;
                        setDataForm(formData);
                        }} />
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Poste occupé</label>
                      <input type="text" className="form-control" defaultValue={props.experience !== null ? props.experience.role : ""}  placeholder="Poste occupé"  name="role" onChange={(e)=>{ 
                        formData.role = e.target.value;
                        setDataForm(formData);
                        }} />
                    </div>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date de début</label>
                      <div className="row">
                         <div className="col-6">
                         <select className="form-control" 
                          defaultValue={props.experience !== null ? props.experience.start.month : ""} 
                          onChange={(e)=>{ 
                            formData.start.month = e.target.value;
                            setDataForm(formData);
                            }}>
                          {monthes.map((m) => <option 
                            defaultValue={m}
                            key={m}
                          >{m}</option>)}
                        </select>
                          
                         </div>
                         <div className="col-6">
                         <select className="form-control" 
                         defaultValue={props.experience !== null ? props.experience.start.year : ""} 
                          onChange={(e)=>{ 
                            formData.start.year = e.target.value;
                            setDataForm(formData);
                            }}>
                          {years.map((y) => <option 
                            defaultValue={y}
                            key={y}
                          >{y}</option>)}
                        </select>
                         </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date de fin</label>
                      <div className="row">
                         <div className="col-6">
                         <select className="form-control" 
                          defaultValue={props.experience !== null ? props.experience.end.month : ""} 
                          onChange={(e)=>{ 
                            formData.end.month = e.target.value;
                            setDataForm(formData);
                            }}>
                          {monthes.map((m) => <option defaultValue={m}
                            key={m}
                          >{m}</option>)}
                        </select>
                          
                         </div>
                         <div className="col-6">
                         <select className="form-control"  
                         defaultValue={props.experience !== null ? props.experience.end.year : ""} 
                         onChange={(e)=>{ 
                            formData.end.year = e.target.value;
                            setDataForm(formData);
                            }}>
                          {years.map((y) => <option defaultValue={y}
                            key={y}
                          >{y}</option>)}
                        </select>
                         </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="form-group">
                <label>Description du poste</label>
              <textarea 
               defaultValue={props.experience !== null ? props.experience.description : ""} 
              className="form-control" placeholder="Descrire votre rôle" rows={6}  onChange={(e)=>{ 
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
                  firebase.firestore()
                  .collection('users')
                  .doc(props.user?.uid).update("experiences", FieldValue.arrayRemove(props.experience))
                  .then((res) => {
                  }).catch((e) => alert(e))
                  firebase.firestore()
                  .collection('users')
                  .doc(props.user?.uid)
                  .update("experiences", FieldValue.arrayUnion(formData))
                  .then((res) => {
                    firebase.firestore()
                     .collection('users')
                     .doc(props.user?.uid)
                     .get()
                     .then((data) => {
                        props.setUser(data.data());
                     })
                  }).catch((e) => alert(e))
                  

                  
                }else{
                  firebase.firestore()
                  .collection('users')
                  .doc(props.user?.uid)
                  .update("experiences", FieldValue.arrayUnion(formData))
                  .then((res) => {
                    firebase.firestore()
                     .collection('users')
                     .doc(props.user?.uid)
                     .get()
                     .then((data) => {
                        props.setUser(data.data());
                     })
                  }).catch((e) => alert(e))
                }
               

               props.action(false);
             
             }}
              >Enregistrer</button>
              </p>
              <div style={{"height": "8px"}}>

              </div>
           </div>
}

export default ExperienceForm;