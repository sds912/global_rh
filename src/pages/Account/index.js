import { makeStyles } from "@material-ui/core";
import React,{useState} from "react";
import Header from "../../components/header/Header";
import SearchMenu from '../../components/search-menu/SearchMenu';
import Footer from '../../components/footer/Footer';
import PDFViewer from 'pdf-viewer-reactjs'

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
         <div 
         className="col-sm-10 mt-5"
         style={{
          width: "21cm",
          height: "29.7cm",
          display: "block",
          margin: "0 auto",
          marginBottom: "0.5cm",
          boxShadow:"0 0 0.5cm rgba(0,0,0,0.5)",
           backgroundColor: "red",
          paddingTop: "2em",
          overflowY: "scroll"
         }}
         >
          <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
            

           
        />
        </div> 
        
       </div>
       
    </div>


    <Footer />
    </>)
}

export default AccountPage;
