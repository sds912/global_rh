import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { isBrowser } from 'react-device-detect';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: "42px",
    width: isBrowser? "280px" : "100%",
    borderRadius: '16px !important',
 
    
  

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0.0}>
      <InputBase
        className={classes.input}
        placeholder="Recherche"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

      
    </Paper>
  );
}
