import { Divider, makeStyles } from "@material-ui/core";
import React,{useContext, useEffect, useState} from "react";
import Header from "../../components/header/Header";
import SearchMenu from '../../components/search-menu/SearchMenu';
import Footer from '../../components/footer/Footer';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';

import ReactQuill from "react-quill";
import { AuthUserContext } from "../../Session";
import firebase from "firebase";




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

  const [descript, setdescript] = useState('Mettre une description');
  const  [editing, setEditing] = useState(false);
  const  authUser  = useContext(AuthUserContext);
  const  [user, setUser] = useState();

 
 
  
 
  const RawHTML = ({children, className = ""}) => 
<div className={className}
  dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />

  const classes = useStyle()
    return (
    <>
    <Header />
    <SearchMenu page="account" />
   
    <div className='container my-5'>

      <h1 className="py-5">
        Page en construction
      </h1>

      {

      

        /*
       <div className="row">
         <div className="col-sm-4">
           <div>
             <img style={{
               width: "240px",
               height: "240px"
             }} src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" />
              
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
                 <li> <strong>Tél: </strong> <span>{user?.phone}</span> </li>
               </ul>

           </div>


         </div>
         <div className="col-sm-8 text-left">
           <p>
             <strong>{user?.firstName } {user?.lastName }</strong> <span className="mx-3">|</span> <span className="text-muted">{user?.city}</span>
           </p>
           <p>
             <span className="font-weight-bold text-primary">Developpeur web et mobile</span>
           </p>

           <p className="text-center">
            <div className="btn-group" role="group" >
              <label  className="btn bg-primary"
              style={{
                height: "50px"
              }}
              onClick ={ () => {

              }}
               >Télécharger Mon CV
               <input type="file" hidden />
               </label>
              <button type="button" className="btn brg-success"
              style={{
                height: "50px"
              }}
              >
                <a
                 style={{
                   color: "#FFFFFF",
                   textDecoration: "none"
                 }}
                 href = "https://firebasestorage.googleapis.com/v0/b/globalrh-7095b.appspot.com/o/cvs%2FProfile.pdf?alt=media&token=077c1e4d-2ecd-4fd5-8389-c0c3deeea541" target = "_blank"> Voir Mon CV</a>
               </button>
              <button type="button" className="btn bg-warning"
              style={{
                height: "50px"
              }}
              >Partager Mon CV</button>
            </div>
           </p>
           <div  className="mt-5" />
           <Divider  />
           <div  className="mt-3" />

           <div>
             <h6>Description  <span className="mx-3" /> 
             {
               !editing ? <span
               style={{
                 cursor: "pointer"
               }}
               onClick={ () => {
               setEditing(true);
              }}><EditIcon  /></span> :  
              <span
              style={{
                cursor: "pointer",
                border: "1px solid gray",
                padding: ".5em 1em",
                borderRadius: "4px",

              }}
              onClick={ () => {
              setEditing(false);
             }}><CheckIcon style={{
               color: "green",
               fontSize: "36px",
               fontWeight:"bolder"
             }}  /> valider</span>
             }
             

            
             
               </h6>
             <div>
              
              <div  className="mt-5" />
                <RawHTML>
                { !editing ? descript : ''}
                </RawHTML>
                
                
                {
                  editing ? 

                  <ReactQuill

              style={{height: "250px"}} theme="snow" 
              value={descript}  
              onChange={(v) =>{
                setdescript(v);
                console.log(descript)
                }}
               />
                  
                  : ''
                }
              
             </div>
           </div>
           

         </div>
         

       </div>

       */

}

    </div>
    <Footer />
    </>)
}

export default AccountPage;
