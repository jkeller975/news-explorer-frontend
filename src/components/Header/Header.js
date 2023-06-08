import React from "react";
import Navigation from "../Navigation/Navigation";
import MenuWhiteIcon from "../../images/menu_white.svg";
import MenuBlackIcon from "../../images/menu_black.svg";
import MenuCloseIcon from "../../images/menu_close.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  function toggleNavStatus() {
    if (props.isFormPopupOpen) {
      setIsNavOpen(false);
      props.setPopup(false);
      props.setFormPopup(false);
    } else {
      setIsNavOpen(!isNavOpen);
    }
  }

  function navigationLink(darkClass) {
    if (props.isSavedNews && !isNavOpen) {
      return darkClass;
    } else if (props.isSavedNews && isNavOpen) {
      return "";
    } else {
      return "";
    }
  }

  function togglePopup() {
    props.setPopup(true);
    props.setFormPopup(true);
    props.setRegisterPopup(false);
    setIsNavOpen(false);
  }

  function toggleMobilePopup() {
    props.setPopup(true);
    props.setFormPopup(true);
  }

  function handleSignout() {
    props.setLoggedIn(false);
    setIsNavOpen(false);
  }

  function menuClick() {
    setMenuOpen(!menuOpen);
    toggleMobilePopup();
  }

  React.useEffect(() => {
    if (!menuOpen && props.isSavedNews) {
      setMenuIcon(MenuBlackIcon);
    } else if (!menuOpen && !props.isSavedNews) {
      setMenuIcon(MenuWhiteIcon);
    } else if (menuOpen) {
      setMenuIcon(MenuCloseIcon);
    }
  }, [props.isSavedNews, menuOpen]);

  return (
    <header className={`header ${navigationLink("header_dark")}`}>
      <p className={`header__logo ${navigationLink("header__logo_dark")}`}>
        NewsExplorer
      </p>
      <div className="header__mobile-nav">
        <Navigation
          isLoggedIn={props.isLoggedIn}
          isSavedNews={props.isSavedNews}
          isNavOpen={props.isNavOpen}
          navigationLink={navigationLink}
        />
        <img src={menuIcon} className="header__menu" onClick={menuClick}></img>
        {props.isLoggedIn ? (
          <button
            onClick={handleSignout}
            className={`header__logout ${navigationLink(
              "header__logout_dark"
            )}`}
          >
            {`${(currentUser.name = "Josh")}`}
          </button>
        ) : (
          <button onClick={togglePopup} className="header__signin">
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
