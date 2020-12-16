import React from 'react';
import AdminHeader from '../../components/header/AdminHeader';
import AddPost from './addPost';



const BackOffice = (props) => {

    return (<div style={{minHeight:"100vh"}}>
        <AdminHeader />
        <div className="container mt-5">
            <div className="container">
                <h3 className="mb-4">Ajouter une offre</h3>
                <AddPost />
            </div>
        </div>
        
    </div>)


}


export default BackOffice;