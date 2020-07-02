import React, { useState } from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import Card from '../Card/Card';

import './Favorites.css';

const Favorites = () => {
  const { userFavorites, deleteFavorites, searchResult } = useMovieContext();
  const [loading, setLoading] = useState(false);
  
  const handleDeleteFavorites = (movie) => {
    setLoading(!loading);
    deleteFavorites(movie);
  };

  return (
      <div className="Favorites__container">
      {userFavorites.length ? (
        userFavorites.map(favMovies => <Card key={favMovies.imdbID} movie={favMovies} fromFavorite handleDeleteFavorites={handleDeleteFavorites}/>)
    ) :  searchResult ? searchResult.map(searchMovie => <Card key={searchMovie.imdbID} movie={searchMovie} />) : 
    null}
      </div>
    );
};

export default Favorites;
