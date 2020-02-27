import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
