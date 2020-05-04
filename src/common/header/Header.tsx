import React, { useEffect } from "react";
import {
  Button,
  MenuItem,
  Menu,
  IconButton,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import "./HeaderStyle.scss";
import { withRouter } from 'react-router-dom';
import { setInitial, setLanguage } from "../../store/action";

const Header = withRouter(({ history }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const { i18n } = useTranslation();
  const language: string = useSelector((state: any) => state.reducer.language);

  useEffect(() => {
    // Set the initial language for translation
    i18n.changeLanguage(language.toLowerCase());
  }, [i18n, language]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Set the anchor element for dropdown
    setAnchorEl(event.currentTarget);
  };

  const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Resets the form
    dispatch(setInitial());
    history.push("/")
  };

  const handleClose = () => {
    // Close the dropdown
    setAnchorEl(null);
  };

  const selectLanguage = (e: any, lang: string) => {
    // Sets the language from the dropdown
    i18n.changeLanguage(lang.toLowerCase());
    dispatch(setLanguage(lang));
    setAnchorEl(null);
  };

  return (
    <div className="menu-container">
      <AppBar position="static" color="inherit" className="menu-bar">
        <Toolbar className="menu-toolbar">
          <IconButton className="menu-button" onClick={(e) => reset(e)}>
            <img
              src={require("../../assets/images/logo.png")}
              className="menu-icon"
              alt="Home HT"
            />
          </IconButton>
          {/* Language Dropdown */}
          <div className="menu-content">
            <Button
              aria-controls="language-menu"
              className="language-button"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                src={require(`../../assets/images/${language.toLowerCase()}-flag.svg`)}
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
                  src={require("../../assets/images/en-flag.svg")}
                  className="language-flag"
                  alt="EN"
                ></img>
                EN
              </MenuItem>
              <MenuItem onClick={(e) => selectLanguage(e, "DE")}>
                <img
                  src={require("../../assets/images/de-flag.svg")}
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
})

export default Header;
