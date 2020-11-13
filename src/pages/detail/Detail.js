import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header/Header";
import SearchMenu from "../../components/search-menu/SearchMenu";
import SubBanner from "../../components/sub-banner/SubBanner";
import PostForm from "../../components/forms/PostForm";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  body: {
    width: "100%",
    marginTop: "8em",
  },
}));

const Detail = () => {
  const classes = useStyles();
  const [post, setPost] = useState();

  const history = useHistory();

  const param = window.location.search.substring(6);

  useEffect(() => {
    async function fetchData() {
      const db = firebase.firestore();
      const snapshot = await db.collection("posts").doc(param).get();
      const data = snapshot.data();
      setPost(data);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <SearchMenu />
      <SubBanner post={post} />
      <div className={classes.main}>
        <Grid container>
          <Grid item sm={7}>
            <div style={{ position: "relative", width: "100%" }}>
              <button
                style={{
                  position: "absolute",
                  left: "4em",
                  top: "3em",
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
                <p
                  style={{
                    padding: "2.5em",
                    textJustify: "inter-word",
                    textAlign: "justify",
                  }}
                >
                  {post.description}
                </p>
              </div>
            ) : (
              <span>Loading ....</span>
            )}
          </Grid>
          <Grid item sm={5}>
            <PostForm post={param} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Detail;
