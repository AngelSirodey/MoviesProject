import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

import { useMovieContext } from '../../Store/movieSearchContext';
import Login from '../Login';
import Search from '../Search';

import './NavBar.css';

const NavBar = ({ isAuth, setIsAuth }) => {
  const { searchError } = useMovieContext();
const [openLogin, setOpenLogin] = useState(false);

return (
  <Fragment>
    <nav className="nav__container">
        <Search />
        {searchError && <p className="nav__search--error">{searchError}</p>}
        <div className="NavBar__list">
        <Link to="/" className="favorites__link"><div className="NavBar__list--text">Home</div></Link>
          {isAuth ? <Link to="/favorites" className="favorites__link"><div className="NavBar__list--text">Favorites</div></Link> : <div onClick={() => setOpenLogin(true)} className="NavBar__list--text">Login</div>}
        </div>
    </nav>
    {openLogin && <Login setIsAuth={setIsAuth} setOpenLogin={setOpenLogin} />}
  </Fragment>
  );
};

export default NavBar;
