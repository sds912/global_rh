import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import SearchMenu from "../../components/search-menu/SearchMenu";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";
import ResultItem from "../../components/search/ResultItem";
import firebase from "firebase";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../Session";
import Footer from "../../components/footer/Footer";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
}));

const SearchResult = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);

  const { params, setParams } = useState({
    job: "",
    city: "",
  });

  const { posts } = useContext(PostContext);
  const location = useLocation();

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
   



 
  



  return (
    <div >
      <Header />
      <SearchMenu
        page="result"
        
      />
      <div className="container-fluid">
      {!open ? (
        <div >
          <Alert
            severity="info"
            onClose={() => {
              setOpen(true);
            }}
            style={{ textAlign: "left", padding: "1.5em" }}
          >
            <AlertTitle>Informations Importantes</AlertTitle>
            Les entreprises qui confient leurs offres RH s'engagent à respecter
            les précautions sanitaires COVID 19. <br /> Néanmoins, pour les
            offres comme celles de nos partenaires, si vous avez un doute: vous
            pouvez consultez ici les recommandations
          </Alert>
        </div>
      ) : (
        ""
      )}


      <div
       
      >
        <Typography
          variant="h4"
          style={{ textAlign: "left", marginBottom: "2em", color: "#008ba6" }}
        >
          {posts.length} offres{" "}
          {params?.job != null ? (
            <span>
              pour {capitalize(location.state.job || params?.job)} -{" "}
              {capitalize(location.state.city || params?.city)}
            </span>
          ) : (
            ""
          )}
        </Typography>
        
       
        {posts.map((item) => {
      
          return <ResultItem post={item} />;
        })}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
