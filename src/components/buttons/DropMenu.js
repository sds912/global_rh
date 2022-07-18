import React, { useContext } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import SignOutButton from "../../pages/SignOut/index";
import {useHistory} from 'react-router-dom';
import { AuthUserContext } from "../../Session";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: "1080",
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  profile: {
    display: "block",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "1px solid gray",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "1em",
    marginLeft: "1em",
    cursor: "pointer",
  },
}));

export default function UserAvatar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const user = useContext(AuthUserContext);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;


  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <span
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.profile}
          style={{
            "background": `url('${localStorage.getItem(user?.uid)}')`,
            "backgroundPosition": "center",
            "backgroundSize": "contain"
          }}
        >
        </span>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                     <MenuItem onClick={handleClose}>
                      <button className="btn btn-outline btn-block" onClick={()=>history.push("/account/"+ user.uid)}>Mon Profile</button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <SignOutButton />
                    </MenuItem>
                   
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
