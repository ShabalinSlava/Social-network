import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wrap">
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default App;
