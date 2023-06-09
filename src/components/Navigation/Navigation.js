import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  function savedArticlesLink() {
    if (props.isLoggedIn) {
      return (
        <NavLink
          to="/saved-news"
          exact={true}
          activeClassName="navigation__link_active_theme_dark"
          className={`navigation__link ${props.navigationLink(
            "navigation__link_theme_dark"
          )}`}
        >
          Saved articles
        </NavLink>
      );
    } else {
      return;
    }
  }
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        exact={true}
        activeClassName="navigation__link_active"
        className={`navigation__link ${props.navigationLink(
          "navigation__link_theme_dark"
        )}`}
      >
        Home
      </NavLink>
      {savedArticlesLink()}
    </nav>
  );
}

export default Navigation;
