import React, { useState, Fragment } from 'react';
import { Link, useHistory } from "react-router-dom";

import { useMovieContext } from '../../Store/movieSearchContext';
import Login from '../Login';
import Search from '../Search';

import './NavBar.css';

const NavBar = ({ isAuth, setIsAuth }) => {
  const { searchError, searchResult } = useMovieContext();
  const notMovies = searchError === 'Movie not found!' ? 'Movie not found!' : null;
  const [openLogin, setOpenLogin] = useState(false);
  let history = useHistory();

  const reload = () => {
    history.push('/favorites')
    history.go(searchResult)
  }

  return (
    <Fragment>
      <nav className="nav__container">
          <Search />
          {notMovies && <p className="nav__search--error">{searchError}</p>}
          <div className="NavBar__list">
          <Link to="/" className="favorites__link"><div className="NavBar__list--text">Home</div></Link>
            {isAuth ? 
            <Link to="/favorites" onClick={reload} className="favorites__link">
              <div  className="NavBar__list--text">Favorites</div>
            </Link> :
             <div onClick={() => setOpenLogin(true)} className="NavBar__list--text">Login</div>}
          </div>
      </nav>
      {openLogin && <Login setIsAuth={setIsAuth} setOpenLogin={setOpenLogin} />}
    </Fragment>
  );
};

export default NavBar;
