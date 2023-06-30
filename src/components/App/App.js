import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import MobilePopup from "../MobilePopup/MobilePopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import newsApi from "../../utils/NewsApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import MainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setPopup] = React.useState(false);
  const [isFormPopupOpen, setFormPopup] = React.useState(false);
  const [isMobilePopupOpen, setMobilePopup] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = React.useState(false);
  const [isRegisterSuccessPopupOpen, setRegisterSuccessPopup] =
    React.useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem("jwt"));
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [recentArticles, setRecentArticles] = React.useState([]);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
        } else {
          localStorage.removeItem("jwt");
        }
      });
    }
  });

  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([MainApi.getCurrentUser(token), MainApi.getArticles()])
        .then(([user, articles]) => {
          setCurrentUser(user.data);
          setSavedArticles(articles.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token, isLoggedIn]);

  function onRegisterSubmit(email, password, name) {
    auth.register(email, password, name).then((res) => {
      if (res) {
        setIsRegistered(true);
        setRegisterSuccessPopup(true);
        setFormPopup(false);
        setRegisterSuccess(true);
      } else {
        console.log("ERROR");
      }
    });
  }

  function onLoginSubmit(email, password) {
    auth.login(email, password).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);

        setLoggedIn(true);
        setFormPopup(false);
        setToken(data.token);
      }
    });
  }

  function registerSuccess() {
    setRegisterPopup(false);
    setRegisterSuccessPopup(false);
    setFormPopup(true);
  }

  function searchHandler(keyword) {
    return newsApi.searchArticles(keyword).catch((err) => console.log(err));
  }

  function addArticleHandler(article) {
    if (article) {
      return MainApi.saveArticle(article, currentUser)
        .then(() => {
          setRecentArticles(savedArticles);
        })
        .then(() => {
          MainApi.getArticles().then((articles) => {
            setSavedArticles(articles.data);
          });
        })
        .catch((err) => console.log(err));
    } else {
      throw new Error("No article added");
    }
  }

  function undoSaveArticle(data) {
    const newArticle = savedArticles.pop();
    const newArticleId = newArticle._id;
    MainApi.removeArticle(newArticleId, localStorage.getItem("jwt"))
      .then(() => {
        MainApi.getArticles().then((articles) => {
          setSavedArticles(articles.data);
        });
      })
      .catch((err) => console.log(err));
  }

  function handleRemoveArticle(data) {
    const articleId = data._id;
    MainApi.removeArticle(articleId, localStorage.getItem("jwt"))
      .then(() => {
        MainApi.getArticles().then((articles) => {
          setSavedArticles(articles.data);
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              isPopupOpen={isPopupOpen}
              isFormPopupOpen={isFormPopupOpen}
              setRegisterPopup={setRegisterPopup}
              setPopup={setPopup}
              setFormPopup={setFormPopup}
              isMobilePopupOpen={isMobilePopupOpen}
              setMobilePopup={setMobilePopup}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isSavedNews={false}
            />
            <Main
              isLoggedIn={isLoggedIn}
              searchHandler={searchHandler}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              cards={savedArticles}
              addArticleHandler={addArticleHandler}
              handleRemoveArticle={undoSaveArticle}
            />
            <Footer />
          </Route>
          <ProtectedRoute exact path="/saved-news" loggedIn={isLoggedIn}>
            <Header
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              isPopupOpen={isPopupOpen}
              isFormPopupOpen={isFormPopupOpen}
              setRegisterPopup={setRegisterPopup}
              setPopup={setPopup}
              setFormPopup={setFormPopup}
              isMobilePopupOpen={isMobilePopupOpen}
              setMobilePopup={setMobilePopup}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isSavedNews={true}
            />
            <SavedNewsHeader isLoggedIn={isLoggedIn} cards={savedArticles} />
            <SavedNews
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              handleRemoveArticle={handleRemoveArticle}
            />
            <Footer />
          </ProtectedRoute>
        </Switch>

        {isFormPopupOpen ? (
          <Popup
            setPopup={setPopup}
            setFormPopup={setFormPopup}
            isPopupOpen={isPopupOpen}
          >
            <PopupWithForm
              isRegisterPopupOpen={isRegisterPopupOpen}
              setRegisterPopup={setRegisterPopup}
              isFormPopupOpen={isFormPopupOpen}
              setFormPopup={setFormPopup}
              isRegisterSuccessPopupOpen={isRegisterSuccessPopupOpen}
              setRegisterSuccessPopup={setRegisterSuccessPopup}
              setPopup={setPopup}
              setLoggedIn={setLoggedIn}
              isRegisterSuccess={isRegisterSuccess}
              setRegisterSuccess={setRegisterSuccess}
              onRegisterSubmit={onRegisterSubmit}
              onLoginSubmit={onLoginSubmit}
            />
          </Popup>
        ) : (
          ""
        )}
        {isRegisterSuccessPopupOpen ? (
          <Popup
            setPopup={setPopup}
            setFormPopup={setFormPopup}
            isPopupOpen={isPopupOpen}
          >
            {isRegisterSuccess ? (
              <div>
                <h2 className="popup__title">
                  Registration completed successfully!
                </h2>
                <button
                  className="popup__form-text popup__form-button"
                  onClick={registerSuccess}
                >
                  Sign in
                </button>
              </div>
            ) : (
              ""
            )}
          </Popup>
        ) : (
          ""
        )}
        {isMobilePopupOpen ? (
          <MobilePopup
            setPopup={setPopup}
            setFormPopup={setFormPopup}
            isPopupOpen={isPopupOpen}
            isMobilePopupOpen={isMobilePopupOpen}
            setMobilePopup={setMobilePopup}
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
            isRegisterSuccess={isRegisterSuccess}
            setRegisterSuccess={setRegisterSuccess}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
          />
        ) : (
          ""
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
