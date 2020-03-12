import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="wrap">
          <Navigation />
          <Route  path="/profile" render={ () => <Profile /> } />
          <Route  path="/dialogs" render={ () => <DialogsContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
