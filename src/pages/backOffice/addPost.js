import React, { useState } from "react";
import {Button, Col, Form} from 'react-bootstrap'
import PostEditor from '../../components/editor/postEditor';
import { useForm } from "react-hook-form";
import firebase  from 'firebase';
import { useHistory } from 'react-router-dom';
import { LISTPOST } from "../../constants/routes";

const secteurs = [
  {
    name: "Santé",
    code: "1",
  },
  {
    name: "Informatique",
    code: "1",
  },
  {
    name: "Education",
    code: "1",
  }
];

const contracts = [
  {
    name: "CDI",
    code: 1

  },

  {
    name: "CDD",
    code: 2

  },{
    name: "STAGE",
    code: 3

  }

  ];

const workTypes = [
  {
    name: "Temps Partiel",
    code: 1
  },
  {
    name: "Temps plien",
    code: 2
  }
]


export default function AddPost() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("https://cdn.jobmonkey.com/wp-content/uploads/2016/12/irresistible-job-offer-dp-300x250.jpg")
  const [description, setDescription] = useState();
  const db = firebase.firestore();
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);


  const uploadChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      await handleUpload(file)
    }
  };





  const onSubmit = (data) => {
    data['description'] = description;
    data['addedAt']  = new Date().getTime();
    data['image'] = url;
    db.collection('posts').add(data).then((res) =>{
       history.push(LISTPOST)
    })
  }

  const handleUpload = async (file) => {
    setLoading(true);
    
    const uploadTask = firebase.storage().ref(`images/${file.name}`).put(file);
    console.log(file?.name)
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
      const murl =  await firebase
          .storage()
          .ref("images")
          .child(file.name)
          .getDownloadURL()
       
            console.log(murl)
            setUrl(murl)
        
          
      }
    );
  };
  

  return (
    <div className="text-left">
        <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Row className="mb-5">
              <Form.Group Col={6}>
                  <labe>Ajouter une Image</labe>
                  <div class="custom-file mt-2">
                    <input type="file" class="custom-file-input" id="customFile" onChange={(e) => uploadChange(e)} />
                    <label class="custom-file-label" for="customFile">{ file != null ? file.name : "choisir un ficher" }</label>
                  </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Titre du poste</Form.Label>
                <Form.Control type="text" name="title" placeholder="Titre du projet" ref={register}  />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Nom de l'entreprise</Form.Label>
                <Form.Control type="text" name="organisation" placeholder="Nom de l'entreprise" ref={register}  />
              </Form.Group>
            </Form.Row>
              <Form.Group>
                <PostEditor  action={setDescription} />
              </Form.Group>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Secteur d'activité</Form.Label>
                <Form.Control as="select" name="sector" defaultValue="none" ref={register}  >
                  <option value="none" disabled>Choisir</option>
                  {
                    secteurs.map((item) =><option value={item.name}>{item.name}</option> )
                  }
                  
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Type de contract</Form.Label>
                <Form.Control as="select" name="contractType" defaultValue="none"  ref={register} >
                  <option value="none" disabled>Choisir</option>
                  {
                    contracts.map((item) =><option value={item.name}>{item.name}</option> )
                  }
                  
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Type de travail</Form.Label>
                <Form.Control as="select" name="workType" defaultValue="none"  ref={register} >
                  <option value="none" disabled>Choisir</option>
                  {
                    workTypes.map((item) =><option value={item.name}>{item.name}</option> )
                  }
                  
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col}>
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" name="city" ref={register}  />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" name="address" ref={register}  />
              </Form.Group>
            </Form.Row>
           
              
            <Button variant="primary" type="submit">
              Enrégistrer
            </Button>
        </Form>
    </div>
  );
}