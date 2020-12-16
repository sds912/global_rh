import React from 'react';
import AdminHeader from '../../components/header/AdminHeader';
import AddPost from './addPost';



const ListPost = (props) => {

    return (<div style={{minHeight:"100vh"}}>
        <AdminHeader />
        <div className="container mt-5">
            <div className="container">
                <h3 className="mb-4">List des Offres</h3>
                
            </div>
        </div>
        
    </div>)


}


export default ListPost;