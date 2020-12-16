import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr";
import Truncate from "react-truncate";
import ReactHtmlParser from 'react-html-parser';


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
  const classes = useStyles();
  let history = useHistory();
  const { post } = props;
  const timeAgo = new TimeAgo("fr-FR");
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
      onClick={() => {
        history.push({
          pathname: "/detail",
          search: `?post=${post.id}`,
        });
      }}
    >
      <div className="col-sm-2">
        <img src={post.image} className="img-fluid" />
      </div>
      <div className="col-sm-8">
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="overline" style={{ textTransform: "none" }}>
          {post.address} - {post.city}
        </Typography>
        <p style={{ fontSize: "12px", textAlign: "justify" }}>
          <Truncate
            lines={3}
            ellipsis={
              <span>
                ...
                <br /> <a href="/link/to/article">Read more</a>
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
        <FavoriteIcon />
      </div>
      <div class="border-top w-100 my-3 mx-5"></div>

    </div>
  );
};

export default ResultItem;
