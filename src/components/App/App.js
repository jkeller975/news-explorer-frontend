import React from "react";
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import newsApi from "../../utils/NewsApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { allCards } from "../data/data";

function App() {
  const [cards, setCards] = React.useState(allCards);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [isPopupOpen, setPopup] = React.useState(false);
  const [isFormPopupOpen, setFormPopup] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = React.useState(false);
  const [isRegisterSuccessPopupOpen, setRegisterSuccessPopup] =
    React.useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = React.useState(false);

  function registerSuccess() {
    setRegisterPopup(false);
    setRegisterSuccessPopup(false);
    setFormPopup(true);
  }

  function registerFail() {
    setRegisterPopup(true);
    setRegisterSuccessPopup(false);
    setFormPopup(true);
  }

  function searchHandler(keyword) {
    return newsApi.searchArticles(keyword);
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
              isSavedNews={false}
            />
            <Main isLoggedIn={isLoggedIn} searchHandler={searchHandler} />
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
              isSavedNews={true}
            />
            <SavedNewsHeader isLoggedIn={isLoggedIn} cards={cards} />
            <SavedNews
              isLoggedIn={isLoggedIn}
              cards={cards}
              // handleSignout={handleSignout}
            />
            <Footer />
          </ProtectedRoute>
        </Switch>
        {/* <Redirect from="*" to="/" /> */}
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
            />
          </Popup>
        ) : (
          ""
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
