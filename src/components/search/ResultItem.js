import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import { makeStyles, Typography} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr";
import Truncate from "react-truncate";
import ReactHtmlParser from 'react-html-parser';
import { DETAIL } from "../../constants/routes";


TimeAgo.addLocale(fr);

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    transition: "background-color .5s",
    "&:hover": {
      backgroundColor: "#8fbfc9",
    },
  },
  description: {
    textAlign: "left",
  },
  type: {
    minWidth: "120px",
  },
  logo:{
    width: "120px"
  }
}));

const ResultItem = (props) => {
  const key = "mySearch";
  let initLike = localStorage.getItem(key);
  const [liked, setLiked] = useState(initLike);
  let history = useHistory();
  const { post } = props;
  const timeAgo = new TimeAgo("fr-FR");
 
  const isLiked = (id) =>  {
    let state = false
    if(liked.includes(id)){
      state = true;
    }
    return state;
  }
  return (
    <div
      className="row text-left"
      style={{
        cursor: "pointer",
        transition: "background-color .5s",
        "&:hover": {
          backgroundColor: "#8fbfc9",
        },
      }}
      
    >
      <div className="col-sm-2">
        <img 
        src={post.image} 
        className="img-fluid"
        onClick={() => {
          history.push({
            pathname: "/detail",
            search: `?post=${post.id}`,
          });
        }}
         />
      </div>
      <div className="col-sm-8">
        <Typography 
        variant="h5"
        onClick={() => {
          history.push({
            pathname: "/detail",
            search: `?post=${post.id}`,
          });
        }}
        >{post.title}</Typography>
        <Typography variant="overline" style={{ textTransform: "none" }}>
          {post.address} - {post.city}
        </Typography>
        <p 
        style={{ fontSize: "12px", 
        textAlign: "justify" 
        }}
        onClick={() => {
          history.push({
            pathname: "/detail",
            search: `?post=${post.id}`,
          });
        }}
        >
          <Truncate
            lines={3}
            ellipsis={
              <span>
                ...
                <br /> <a onClick={() => history.push({
                  pathname: DETAIL,
                  search: `?post=${post.id}`,
                })}>Read more</a>
              </span>
            }
          >
            { ReactHtmlParser(post.description) }
        
          </Truncate>
        </p>
        <Typography variant="caption">
          Publié { post.addedAt != undefined ? timeAgo.format(post.addedAt): 0}
        </Typography>
      </div>
      <div className="col-sm-2">
        <span style={{ display: "block", marginTop: "2em" }}>
          {post.contractType}
        </span>{" "}
        <br />
        <span>{post.schedule}</span>
        <FavoriteIcon
           style={{color: isLiked(post.id)? "orange": "#000000"}}
           onClick={
             () => {
              let value = `#${post.id}`;
               if(localStorage.getItem(key) == undefined){
                 setLiked(value);
                 localStorage.setItem(key,value.toString());
               }else{
                 let old  = localStorage.getItem(key);
                 if(!old.includes(post.id)){
                  value += `${old}#${post.id}`;
                  setLiked(value);
                  localStorage.setItem(key, value);
                 }
                 
                 
                 console.log(value)
               }

             }
           }
         />
      </div>
      <div class="border-top w-100 my-3 mx-5"></div>

    </div>
  );
};

export default ResultItem;
