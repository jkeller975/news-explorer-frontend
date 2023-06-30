import React from "react";
import MenuCloseIcon from "../../images/menu_close.svg";
import { NavLink, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MobilePopup = (props) => {
  const history = useHistory();
  function closePopup() {
    props.setPopup(false);
    props.setFormPopup(false);
    props.setMenuOpen(!props.menuOpen);
  }
  const currentUser = React.useContext(CurrentUserContext);
  function handleSignout() {
    props.setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  }

  function togglePopup() {
    props.setMobilePopup(false);
    props.setMenuOpen(!props.menuOpen);
    props.setPopup(true);
    props.setFormPopup(true);
  }

  return (
    <section
      className={`mobilemodal ${
        props.isPopupOpen ? "mobilemodal_visible" : ""
      }`}
    >
      <div
        className={`mobilepopup ${
          props.isPopupOpen ? "mobilepopup_visible" : ""
        }`}
      >
        <div className="mobilepopup__container">
          <i className="mobilepopup__exit" onClick={closePopup}></i>
          <p className={`mobilepopup__logo`}>NewsExplorer</p>
          <img
            src={MenuCloseIcon}
            className="mobilepopup__exit"
            alt="menu close"
            onClick={closePopup}
          />
          {/* {props.children} */}
        </div>
        <NavLink
          to="/"
          exact={true}
          className={`mobile__link`}
          onClick={closePopup}
        >
          Home
        </NavLink>
        {props.isLoggedIn ? (
          <NavLink
            to="/saved-news"
            exact={true}
            className={`mobile__link`}
            onClick={closePopup}
          >
            Saved articles
          </NavLink>
        ) : (
          ""
        )}
        {props.isLoggedIn ? (
          <button onClick={handleSignout} className={`mobile__logout`}>
            {`${currentUser.name}`}
          </button>
        ) : (
          <button onClick={togglePopup} className="mobile__signin">
            Sign in
          </button>
        )}
      </div>
    </section>
  );
};

export default MobilePopup;
