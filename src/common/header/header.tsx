import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { SETLANGUAGE } from "../../store/constants/constants";
import { useSelector,useDispatch } from 'react-redux';
import './header.scss';

export default function Header() {
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
    <div className="menu-container">
      
      <AppBar position="static" color="inherit" className="menu-bar">
        <Toolbar className="menu-toolbar">
          <IconButton className="menu-button">
            <img
              src={require("../../assets/logo.png")}
              className="menu-icon"
              alt="Home HT"
            />
          </IconButton>
          <div className="menu-content">
            <Button
              aria-controls="language-menu"
              className="language-button"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                src={require(`../../assets/${language.toLowerCase()}-flag.svg`)}
                className="language-flag"
                alt={language}
              />
              <span className="language">{language}</span>
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={(e) => selectLanguage(e, "EN")}>
                <img
                  src={require("../../assets/en-flag.svg")}
                  className="language-flag"
                  alt="EN"
                ></img>
                EN
              </MenuItem>
              <MenuItem onClick={(e) => selectLanguage(e, "DE")}>
                <img
                  src={require("../../assets/de-flag.svg")}
                  className="language-flag"
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
