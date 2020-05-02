import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { SETLANGUAGE } from "../../store/constants/constants";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useSelector,useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      boxShadow: "none",
    },
    menuToolBar: {
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      width: "60px",
    },
    languageButton: {
      padding: "0px 12px",
      margin: "12px",
      boxShadow: "0 5px 26px rgba(177,190,201,.48)"
    },
    languageFlag: {
      width: "25px",
      marginRight: "10px",
    },
    language:{
      fontSize: "18px"
    }
  })
);

export default function Header() {
  const classes = useStyles({});
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const language = useSelector((state:any) => state.reducer.language)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (e: any, lang: string) => {
    dispatch({ type: SETLANGUAGE, payload: {language : lang} });
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" color="inherit" className={classes.menuBar}>
        <Toolbar className={classes.menuToolBar}>
          <IconButton className={classes.menuButton}>
            <img
              src={require("../../assets/logo.png")}
              className={classes.menuIcon}
              alt="Home HT"
            />
          </IconButton>
          <div>
            <Button
              aria-controls="simple-menu"
              className={classes.languageButton}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                src={require(`../../assets/${language.toLowerCase()}-flag.svg`)}
                className={classes.languageFlag}
                alt={language}
              />
              <span className={classes.language}>{language}</span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={(e) => selectLanguage(e, "EN")}>
                <img
                  src={require("../../assets/en-flag.svg")}
                  className={classes.languageFlag}
                  alt="EN"
                ></img>
                EN
              </MenuItem>
              <MenuItem onClick={(e) => selectLanguage(e, "DE")}>
                <img
                  src={require("../../assets/de-flag.svg")}
                  className={classes.languageFlag}
                  alt="DE"
                ></img>
                DE
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
