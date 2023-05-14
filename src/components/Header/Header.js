import React from "react";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
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

  function handleSignout() {
    props.setLoggedIn(false);
    setIsNavOpen(false);
  }

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
