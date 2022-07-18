import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header/Header";
import SearchMenu from "../../components/search-menu/SearchMenu";
import SubBanner from "../../components/sub-banner/SubBanner";
import PostForm from "../../components/forms/PostForm";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
import Footer from "../../components/footer/Footer";
import ReactHtmlParser from 'react-html-parser';
import { AuthUserContext } from "../../Session";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  body: {
    width: "100%",
    marginTop: "8em",
  },
}));

const Detail = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState();
  const history = useHistory();
  const location = useLocation();
 const param = location.search.substr(6);
 const user = useContext(AuthUserContext);
 useEffect(() => {
 firebase.firestore().collection('posts').doc(param).onSnapshot((doc) =>{
  setPost(doc.data())
})
  
 }, [])


 const postuler = () =>{
   if(user != null){
     console.log(user)
   }else{
     console.log('no user')
   }
 }

  return (
    <div className={classes.root}>
      <Header />
      <SearchMenu page='detail' />
      <SubBanner post={post} user={user} />
      <div className={classes.main}>
        <div className="row">
          <div className=" col-12 col-sm-7 offset-sm-3">
            <div style={{ position: "relative", width: "100%" }}>
              <button
                style={{
                  position: "absolute",
                  left: "4em",
                  top: "2em",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                }}
                onClick={() => {
                  history.push({
                    pathname: "/result",
                    state: { job: post.city, city: post.title },
                  });
                }}
              >
                <img src="left-arrow.png" alt="arrow" />
                <span style={{ fontSize: "16px" }}>Liste des resultats</span>
              </button>

           

            </div>
            {post != null ? (
              <div className={classes.body}>
                <h2
                  style={{
                    color: "#008098",
                    textAlign: "left",
                    marginLeft: "2em",
                  }}
                >
                  {post.organisation}
                </h2>

                <div
                  style={{
                    padding: isMobile ? "0" :  "2.5em",
                    textJustify: "inter-word",
                    textAlign: "justify",
                  }}
                 
                >{ ReactHtmlParser(post.description) }</div>
               
                  
              </div>
            ) : (
              <span>Loading ....</span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
