import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';




function App(props) {
  // debugger;
  return (
    // <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/messages' render={() => <MessagesContainer/>} />
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/news' render={() => <News/>} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings/>} />
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
