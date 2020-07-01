import React from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';

import './Search.css';

const Search = () => {
  const { searchMovie } = useMovieContext();

  const searchMovies = (value) => {
    return value.length > 2 && searchMovie(value)
  }
  
    return (
		  <input onChange={({ target: { value } }) => searchMovies(value)} type="search" id="search" name="search" placeholder="Search" className="Search" />
    );
};

export default Search;
