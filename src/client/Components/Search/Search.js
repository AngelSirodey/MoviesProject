import React from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';

import './Search.css';

const Search = () => {
  const { searchMovie } = useMovieContext();
  
    return (
		<input onChange={({ target: { value } }) => searchMovie(value)} type="search" id="search" name="search" placeholder="Search" className="Search" />
    );
};

export default Search;
