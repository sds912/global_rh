import { Divider, makeStyles } from "@material-ui/core";
import React,{useContext, useEffect, useState} from "react";
import Header from "../../components/header/Header";
import SearchMenu from '../../components/search-menu/SearchMenu';
import Footer from '../../components/footer/Footer';
import { AuthUserContext } from "../../Session";
import firebase from "firebase";
import CustomEditTextField from "../../components/forms/CustomEditTextField";
import UploadImage from "./UploadImage";
import ReactModal from "react-modal";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import  CreateIcon from  "@material-ui/icons/Create";
import  DeleteIcon from  "@material-ui/icons/Delete";
import { confirmAlert } from 'react-confirm-alert';
import { Audio, MutatingDots } from  'react-loader-spinner'

import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Firebase from "../../Firebase";
import './modal.css';


const FieldValue = firebase.firestore.FieldValue;


const useStyle = makeStyles((theme)=>({
  title: {
     width: "100%",
     height: "38px",
     color: "#ffffff",
     fontWeight: "600",
     fontSize: "18px",
     textAlign: "left",
     backgroundColor: "#008ba6",
     padding: ".3em 0 0 1em",
     position:"relative"

  },
  subTitle:{
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "2em",

  }
}))


const AccountPage = (props) =>  {

  const  [editing, setEditing] = useState(false);
  const [isExpDialogOpened, setIsExpDialogOpened] = useState(false);
  const [isFormDialogOpened, setIsFormDialogOpened] = useState(false);
  const  authUser  = useContext(AuthUserContext);
  const  [user, setUser] = useState(null);
  const   [formData, setFormData] = useState({});
  const [experience, setExperience] = useState(null);
  const [formation, setFormation] = useState(null);
  const userRef =  firebase.firestore().collection("users");


  const getUser = async () =>{
    const res = firebase.firestore().collection('users');
    const data = await res.get();
    data.forEach(item => {
      if(item.data()['uid'] === firebase.auth().currentUser.uid){
        setUser(item.data())
      }
    })
  }

  useEffect( () => {
      getUser();
  }, []);

 
  const RawHTML = ({children, className = ""}) => 
<div className={className}
  dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />
  const classes = useStyle();

  const openCloseExpDialog = (v) => {
      setIsExpDialogOpened(v);
  }

  const openCloseFormDialog = (v) => {
    setIsFormDialogOpened(v);
}



    return (
   <>
    <Header />
    <SearchMenu page="account" />
   
  { user !== null ?   <div className='container my-5'>

     
       <div className="row">
         <div className="col-sm-4">
           <div>
             <UploadImage userId={authUser?.uid} profilImage={user?.profilImage} />
              <div  className="mt-5" />
              <Divider />
              <div  className="mt-3" />

               <ul style={{
                 listStyle: "none",
                 padding:"0px",
                 textAlign: "left"
               }}>
                 <li> <strong>Nom: </strong> <span>{user?.lastName}</span></li>
                 <li> <strong>Prénom:</strong> <span>{user?.firstName}</span> </li>
                 <li> <strong>Email: </strong> <span>{user?.email}</span> </li>
                 <li> <strong>Tél: </strong> <span>{user?.telephone}</span> </li>
               </ul>

           </div>


         </div>
         <div className="col-sm-8 text-left">
           <p>
             <strong>{user?.firstName } {user?.lastName }</strong> <span className="mx-3">|</span> <span className="text-muted">{user?.city}</span>
           </p>
           <p>
             <span className="font-weight-bold text-primary">{user?.job}</span>
           </p>

        
           <div  className="mt-5" />
           <Divider  />
           <div  className="mt-3" />

           {/*edit infos perso */}
           <div className="row">
              <div className="col-sm-6">
               <CustomEditTextField data={{type:'text', placeholder:'Nom', label:'Nom', value: user?.lastName, key: 'fname'}} action={setFormData} oldValue={formData} />
              </div>
              <div className="col-sm-6">
              <CustomEditTextField data={{type:'text', placeholder:'Prénom', label:'Prénom', value: user?.firstName, key: 'lname'}}  action={setFormData} oldValue={formData} />
              </div>
           </div>

           <div className="row">
              <div className="col-sm-6">
               <CustomEditTextField data={{type:'email', placeholder:'Email', label:'Email', value: user?.email, key: 'email'}}  action={setFormData} oldValue={formData} />
              </div>
              <div className="col-sm-6">
              <CustomEditTextField data={{type:'tel', placeholder:'Téléphone', label:'Téléphone', value: user?.telephone, key: 'phone'}}  action={setFormData} oldValue={formData} />
              </div>
           </div>

           {/* titre profesionnelle */}

           <CustomEditTextField data={{type:'text', placeholder:'Mon métier est...', label:'Votre profession', value: user?.job, key: 'job'}} action={setFormData} oldValue={formData} />
          
          <div className="form-group">
            <label>Presentez-vous</label>
           <textarea 
           onChange={(e)=> {
             formData.description = e.target.value;
             setFormData(formData)
           }}
           defaultValue={user?.description}
           className="form-control" rows={4} placeholder="Dites-nous plus sur vous" />
          </div>
          <p className="text-right">
          <button
             style={{
               backgroundColor: 'var(--mainBlue)',
               color: '#FFFFFF',
               fontSize: '18px',
               outline: 'none',
               padding: '.3em 1.5em',
               border: 'none'
             }}
             onClick={() => {
               firebase.firestore().collection('users').doc(authUser?.uid).update(formData).then(() => {

               }).catch((e) => alert(e))
             }}
           >
             Enregistrer
           </button>
          </p>
          <div className="container mx-0" >
            <h2>Parcours professionel</h2>
                {
                  user?.experiences?.map((exp,i) => <div className="card card-body mb-2" style={{position: "relative"}} key={i}>
                    <button
                      onClick={() => {
                        setEditing(true);
                        setExperience(exp);
                        openCloseExpDialog(true);
                      }}
                      className="btn btn-outline float-right"
                      style={{
                        position: "absolute",
                        right:"50px"
                      }}
                    >
                      <CreateIcon />
                    </button>
                    <button
                      onClick={() => {

                        confirmAlert({
                          title: "Attention",
                          message: "Êtes-vous sûr de vouloir supprimer ?",
                          buttons: [
                            {
                              label: "Supprimer",
                              onClick: () => 
                              firebase
                              .firestore()
                              .collection('users')
                              .doc(authUser?.uid)
                              .update("experiences", FieldValue.arrayRemove(exp))
                              .then((res) => {
                                firebase.firestore()
                                .collection('users')
                                .doc(user?.uid)
                                .get()
                                .then((data) => {
                                   setUser(data.data());
                                })
                         
                              }).catch((e) => alert(e))
                            },
                            {
                              label: "Annuler",
                              onClick: () => {}
                            }
                          ]
                        })

                        
                      }}
                      className="btn btn-outline float-right"
                      style={{
                        position: "absolute",
                        right:"0"
                      }}
                    >
                      <DeleteIcon style={{"color": "red"}} />
                    </button>
                    <h3 className="text-dark font-weight-bold" style={{fontSize:'16px'}}>{exp.role}</h3>
                    <p className="text-muted font-weight-light" style={{fontSize:'12px'}}><span>{exp.start.month}</span>   <span>{exp.start.year} </span> - <span>{exp.end.month}</span>   <span>{exp.end.year} </span></p>
                    <p className="text-muted font-weight-bold" style={{fontSize:'14px'}}>{exp.entreprise}</p>
                    <p className="text-muted font-weight-normal" style={{fontSize:'12px'}}>{exp.adresse}</p>
                    <p className="text-muted font-weight-normal" style={{fontSize:'12px'}}>{exp.description}</p>
                  </div>)
                }
          </div>
          <div className="container my-4">
             <button 
              className="btn btn-outline-dark"
              onClick={() => {
                setEditing(false);
                openCloseExpDialog(true);
                setExperience(null);
              }}
             >Ajouter un expérience </button>
             <div>
               <ReactModal 
                isOpen={isExpDialogOpened}
                
               >
                 <div className="container">
                 <button
                  className="btn btn-outline-danger float-right"
                  onClick={() => openCloseExpDialog(false)}
                 >Fermer</button>
                 </div>
                 
                 <div className="container mt-3">
                    <ExperienceForm user={user} action={setIsExpDialogOpened} experience={experience} editing={editing} setUser={setUser} />
                 </div>
               </ReactModal>
             </div>
          </div>
          <div className="container my-4">
            <h4>Formation(s) et Diplôme(s)</h4>
             <div>
             <table className="table">
              <thead>
                <tr>
                  <th scope="col">Diplome / formation</th>
                  <th scope="col">Université / école</th>
                  <th scope="col">Date d'obtention</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {
              user?.formations?.map((form,i) =><tr key={i}>
                  <th scope="row">{form?.diplome}</th>
                  <td>{form?.ecole}</td>
                  <td>{form?.year}</td>
                  <td>
                  <button
                      onClick={() => {
                        setEditing(true);
                        setFormation(form);
                        openCloseFormDialog(true);
                      }}
                      className="btn btn-outline float-right">
                      <CreateIcon />
                    </button>
                    <button
                      onClick={() => {

                        confirmAlert({
                          title: "Attention",
                          message: "Êtes-vous sûr de vouloir supprimer ?",
                          buttons: [
                            {
                              label: "Supprimer",
                              onClick: () => 
                              firebase.firestore()
                              .collection('users')
                              .doc(authUser?.uid)
                              .update("formations", FieldValue.arrayRemove(form))
                              .then((res) => {
                    
                                firebase.firestore()
                                .collection('users')
                                .doc(user?.uid)
                                .get()
                                .then((data) => {
                                   setUser(data.data());
                                })
                         
                              }).catch((e) => alert(e))
                            },
                            {
                              label: "Annuler",
                              onClick: () => {}
                            }
                          ]
                        })

                        
                      }}
                      className="btn btn-outline float-right">
                      <DeleteIcon style={{"color": "red"}} />
                    </button>
                  </td>
                </tr> )
                }
                
              </tbody>
            </table>
               
          </div>
             <button 
              className="btn btn-outline-dark"
              onClick={() => {
                setEditing(false);
                openCloseFormDialog(true);
                setFormation(null);
              }}
             >Ajouter une formation </button>
             <div>
               <ReactModal 
                isOpen={isFormDialogOpened}
               >
                 <div className="container">
                 <button
                  className="btn btn-outline-danger float-right"
                  onClick={() => openCloseFormDialog(false)}
                 >Fermer</button>
                 </div>
                 
                 <div className="container mt-3">
                    <EducationForm user={user} action={setIsFormDialogOpened} setUser={setUser} formation={formation} editing={editing} />
                 </div>
               </ReactModal>
             </div>
          </div>
          
         </div>
         

       </div>

    </div> : <div className="container d-flex justify-content-center align-items-center h-100" style={{"minHeight": "50vh"}}>
           <MutatingDots
              heigth="100"
              width="100"
              color='red'
              ariaLabel='loading'
            />
    </div> }
    <Footer />
    </>)
}

export default AccountPage;
