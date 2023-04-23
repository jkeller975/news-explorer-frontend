import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app"></div>
    </CurrentUserContext.Provider>
  );
}

export default App;
