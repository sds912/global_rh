import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Divider } from '@material-ui/core';



const SavedItem  = (props) => {
    const onDelete = (idToRemove) => {
        const key = "mySearch";
        window.confirm('Souhaitez-vous vraiement supprimer cet offre ?')
        let liked = localStorage.getItem(key);
        let newValue = liked.replace(`#${idToRemove}`,'');
        localStorage.setItem(key, newValue);
        window.location.reload();
    }

    const {address, title, city, organisation,id } = props.post
    return (<div onClick={() => { }}>
                <div className="row text-secondary font-weight-bold py-2 text-left">
                    <div className="col-sm-2">{props.index + 1}</div>
                    <div className="col-sm-5">
                        <h5 className="text-uppercase" style={{color:"#008ba6", fontSize:"22px", cursor: "pointer"}} >{title} </h5>
                        <h6>{organisation}</h6>
                    </div>
                    <div className="col-sm-3" style={{fontSize:"12px", position:"relative"}}>
                       <p style={{ position: "absolute",bottom: "0"}}>
                       {city} / {address}
                        </p> 
                    </div>
                    <div className="col-sm-2 text-right">
                        <span onClick={() => onDelete(id)}>
                          <DeleteForeverIcon  style={{color:"#008ba6", fontSize:"22px", cursor: "pointer"}}  />
                        </span>
                    </div>
            
            </div>
              <Divider />
            </div>)
}

export default SavedItem;