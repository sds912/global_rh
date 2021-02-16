import { makeStyles } from "@material-ui/core";
import React,{useState} from "react";
import Header from "../../components/header/Header";
import SearchMenu from '../../components/search-menu/SearchMenu';
import Footer from '../../components/footer/Footer';
import  PDF  from 'react-pdf-js';

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

  const classes = useStyle()
    return (
    <>
    <Header />
    <SearchMenu page="account" />
   

    <div style={{overflow:'scroll',height:600}}>
   
            <PDF file="http://www.africau.edu/images/default/sample.pdf" />
    </div>
    <div className='container mb-5' style={{textAlign: "left"}}>
       <div className="row">
         <div className="col-sm-2 " style={{textAlign:"left"}}>
           <div style={{width: "160px", marginTop: "2em", marginBottom: "-2em"}}>
             <img src="/avatar.png" className="img-fluid" />
           </div>
           <button 
           className="btn text-white" 
           style={{backgroundColor:"#008ba6", 
           width: "120px",
           borderRadius: "none !important"}}>
             Télécharger

           </button>
           <div>
             <h5 style={{textTransform: "uppercase", fontSize:"16px", fontWeight:"600", color:"#008ba6" }}>moussa ndiaye</h5>
             <ul style={{textAlign: "left", listStyle:"none", padding:"0"}}>
               <li style={{fontSize:"14px", fontWeight: "600"}}>pape912.ps@gmail.com</li>
               <li style={{fontSize:"14px", fontWeight: "600"}}>+221 77 744 36 63</li>
               <li style={{fontSize:"14px", fontWeight: "600"}}>Dakar, Pattes d'oie</li>
               <li style={{fontSize:"14px", fontWeight: "600"}}>Sénégal</li>
             </ul>
           </div>
          <button className="btn" style={{width:"180px"}}>
            Modifier
          </button>
           
         </div>
         <div className="col-sm-8">
           <div style={{marginTop:"2em"}}>
            <div className={classes.title} >Moussa Ndiaye</div>
             <h6 className={classes.subTitle} >Arts graphiques/illustration</h6>
           </div>
            
           <div style={{marginTop:"2em"}}>
              <div className={classes.title} ><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Résumé Professionel</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
              <div style={{fontSize: "12px"}}>
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
           </div>

           <div style={{marginTop:"2em"}}>
             <div className={classes.title} ><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Expérience</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             <div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Graphiste</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Graphiste</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Graphiste</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Graphiste</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
             </div>
           </div>

           <div style={{marginTop:"2em"}}>
           <div className={classes.title} ><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Formation</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             <div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Développement web et mobile</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
              
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>BCGS</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>UCAD</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
             </div>
           </div>
            
           <div style={{marginTop:"2em"}}>
           <div className={classes.title} ><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Formation</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             <div>
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>Développement web et mobile</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>SonatelAccademy</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
              
               <div style={{fontSize: "12px", padding:"2em"}}>
                 <h5 style={{fontSize: "18px", fontWeight: "bold"}}>BCGS</h5>
                 <h4  style={{fontSize: "18px", fontWeight: "bold"}}>UCAD</h4>
                 <p>septembre 2020 - septembre 2021</p>
                 <h6>Dakar</h6>
                 <div style={{width: "110%", height:"1px", backgroundColor:"black", marginLeft:"-2em"}}></div>
               </div>
             </div>
           </div>
           <div style={{marginTop:"2em"}}>
           <div className={classes.title} style={{marginTop:"2em"}}><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Certificats</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             
           </div>
           <div style={{marginTop:"2em"}}>
           <div className={classes.title} style={{marginTop:"2em"}}><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Compétences</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             
           </div>
           <div style={{marginTop:"2em"}}>
           <div className={classes.title} style={{marginTop:"2em"}}><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Distinction / Associations Professionelles</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             
           </div>
           <div style={{marginTop:"2em"}}>
           <div className={classes.title} style={{marginTop:"2em"}}><span style={{display:"block", position:"absolute", left:"1em", width:"40%"}}>Centre d'intéret</span><button  style={{display:"block", position:"absolute", right:"0", width:"20%", outline:"none", border: "none", backgroundColor: "transparent", color: "#ffffff", fontSize:"16px",fontWeight: "600",}}>Modifier</button></div>
             <div className="mt-2">
               <p style={{fontSize: "16px", opacity:".7"}}><span>Arts</span> - <span>Sport</span> - <span>Cinéma</span></p>
             </div>
           </div>
           </div>
       </div>
    </div>


    <Footer />
    </>)
}

export default AccountPage;
