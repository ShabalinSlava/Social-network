import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='wrap'>
          <Navigation />
          <Route  path='/profile:userId?' render={ () => <ProfileContainer /> } />
          <Route  path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route  path='/users' render={ () => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
