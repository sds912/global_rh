import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root:{
        backgroundColor: 'red',
        display: 'flex'
    },
    img: {
        width: '240px'
    }
}))
 
const ImgUploader = () => {
     
    const classes = useStyles();
    const [files, setFile] = useState([]);
   
    
    
 
  const  onDrop = (picture) => { 
            
            setFile(picture);

            

        
    }
 

        return (
            <div className={classes.root}>
            <ImageUploader
                className={classes.img}
                withIcon={true}
                buttonText='Choose images'
                onChange={(p) => onDrop(p)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
             {
                 console.log(files)
             }
            <img  src={ files != []? () => {
                if(files != null){
                    var  picture = files[files.length];
                    console.log(URL.createObjectURL(picture))
                     return URL.createObjectURL(picture)
                }else{
                    return ''
                }
             
            
                }: ''}/>

            </div>
        );
    
}


export default ImgUploader;