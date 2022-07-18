import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import firebase from "firebase";
import { useHistory } from 'react-router-dom';


export default function UploadImage(props) {
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState("");
  const [base64, setBase64] = useState();
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const MAXIMAGESIZE = 800012;

  const onChange = (e) => {
    let file = e.target.files[0];
    if(file.size > MAXIMAGESIZE){
      alert('Image trop lourd')
    } else{
      if (file) {
        const reader = new FileReader();
        reader.onload = _handleReaderLoaded
        reader.readAsBinaryString(file)
      }
    }
    
  }

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString))
  }

  const onFileSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault()
    firebase.storage().ref(firebase.auth().currentUser?.uid).put(file)
    .then(async (v) =>  {
      const url = await v.ref.getDownloadURL();
      localStorage.setItem(firebase.auth().currentUser?.uid, url);
      firebase.auth().currentUser.updateProfile({photoURL: url}).then(() => {
        setIsLoading(false);
        remove();
        history.go(`/account/${firebase.auth().currentUser?.uid}`)
        
      }).catch(err => alert(err));
    })
    
    /*
    
    
    */
    let payload = { image: base64 }
    console.log("payload", payload)


  }

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if(file.size > MAXIMAGESIZE){
     alert('Image trop lourd')
    }else{
      if (reader !== undefined && file !== undefined) {
        reader.onloadend = () => {
          setFile(file)
          setSize(file.size);
          setName(file.name)
          setImagePreview(reader.result)
        }
        reader.readAsDataURL(file);
      }
    }
    
  }

  const remove = () => {
    setFile("")
    setImagePreview("")
    setBase64("")
    setName("")
    setSize("")
  }

  function displayBase64Image(placeholder, base64Image) {
    var image = document.createElement('img');
    image.onload = function() {
        placeholder.innerHTML = '';
        placeholder.appendChild(this);
    }
    image.src = base64Image;
    return image;
}

  return (
    <div className="container">

      <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)} >
        <div>
          <img src={imagePreview !== "" ? imagePreview : firebase.auth().currentUser?.photoURL} alt="Icone adicionar" className="img-fluid" width={240} height={240} />
          <label htmlFor='file' style={{
           
            "padding": "3px 5px",
            "marginTop": "8",
            "border": "1px solid gray",
            "cursor": "pointer"
          }}>
            <BsUpload />
            <span>Changer la photo</span>
            <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg, .jfif" 
            onChange={photoUpload} src={imagePreview} hidden={true} />
          </label>
         <div>
          {imagePreview !== "" &&
              <>
                <button type="submit" className="btn btn-outline-success mr-3" >
                  {isLoading ?
                    <div>
                      <ImSpinner2 />
                    </div> :
                    <>
                      Sauvegarder
                    </>
                  }
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={remove} >Suprimer</button>
              </>
            }
         </div>
        </div>
      </form>
    </div>
  )
}