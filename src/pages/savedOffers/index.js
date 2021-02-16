import React,{ useContext, useState } from 'react'
import Header from '../../components/header/Header';
import SearchMenu from '../../components/search-menu/SearchMenu';
import SavedItem from './savedItem';
import PostContext from '../../Session/postContext';


const SavedOffer  = (props) => {
  const { posts } = useContext(PostContext);
  const key = "mySearch";
  const initLiked = localStorage.getItem(key)
  const [liked, setLiked]  = useState(initLiked);

  const filterResult = (postslist) =>{
      return postslist.filter((item) => liked.includes(item.id))
  }

    return (<div>
           <Header />
          <SearchMenu page="offer" />
          <div className="container my-5">
              <h2 className="text-left">Offres sauvegardées</h2>
              <div className="container-fluid mt-4">
                <div className="row text-white font-weight-bold py-2" style={{backgroundColor: "#008ba6"}}>
                    <div className="col-sm-2">Jours restants</div>
                    <div className="col-sm-5">Titre de poste / Entreprise</div>
                    <div className="col-sm-3">Lieu de poste</div>
                    <div className="col-sm-2">Supprimer</div>
                </div>
                <div className="container-fluid">
                   {
                       filterResult(posts).map((post, index) => {
                           return <SavedItem index={index} post={post} />
                       })
                   }
                </div>
              </div>
          </div>
    </div>)
}



export default SavedOffer;