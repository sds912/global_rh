import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TimeAgo from "javascript-time-ago";

import fr from "javascript-time-ago/locale/fr";
import Truncate from "react-truncate";

TimeAgo.addLocale(fr);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1em 0",
    position: "relative",
    maxHeight: "230px",
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
}));

const ResultItem = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { post } = props;
  const timeAgo = new TimeAgo("fr-FR");
  return (
    <div
      className={classes.root}
      onClick={() => {
        history.push({
          pathname: "/detail",
          search: `?post=${post.id}`,
        });
      }}
    >
      <div className={classes.logo}>
        <img src="/logo-GRH.png" />
      </div>
      <div className={classes.description}>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="overline" style={{ textTransform: "none" }}>
          COPY LASER COPY SELF - {post.city}
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
            {post.description}
          </Truncate>
        </p>
        <Typography variant="caption">
          Publié { post.addedAt != undefined ? timeAgo.format(post.addedAt.seconds * 1000): 0}
        </Typography>
      </div>
      <div className={classes.type}>
        <span style={{ display: "block", marginTop: "2em" }}>
          {post.contractType}
        </span>{" "}
        <br />
        <span>{post.schedule}</span>
      </div>
      <div style={{ width: "60px", color: "#d1d2d4" }}>
        <FavoriteIcon />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "0px",
          borderBottom: " 1px dashed #d1d2d4",
          bottom: "0",
        }}
      ></div>
    </div>
  );
};

export default ResultItem;
