import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/discover/:searchtext" component={DiscoverMoviesPage} />
        <Route path="/discover/" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
