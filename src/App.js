import React, { useState }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Pagination from "react-js-pagination";

import NavBar from './client/Components/NavBar';
import Home from './client/Components/Home';
import MovieDetails from './client/Components/MovieDetails';
import Favorites from './client/Components/Favorites';
import { MoviesProvider } from './client/Store/movieSearchContext';

import './App.css'

function App() {
  const storedAuth = sessionStorage.getItem('isAuth') || false;
  const [isAuth, setIsAuth] = useState(storedAuth);
  // const [currentPage, setCurrentPage] = useState(1);
  const handleSetIsAuth = (validation) => {
    setIsAuth(validation)
    sessionStorage.setItem('isAuth', validation)
  };

  // const handlePageChange = () => (
  //   setCurrentPage()
  // );

  return (
    <Router>
      <MoviesProvider>
        <NavBar isAuth={isAuth} setIsAuth={handleSetIsAuth} />
        {/* <Pagination totalItemsCount={30} itemsCountPerPage={3} onChange={() => handlePageChange} activePage={currentPage} itemClass="page-item" linkClass="page-link" /> */}
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/details">
              <MovieDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </MoviesProvider>
    </Router>
  );
};

export default App;
