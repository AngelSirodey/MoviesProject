import React, { useState } from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import Card from '../Card/Card';

import './Favorites.css';

const Favorites = () => {
  const { userFavorites, deleteFavorites } = useMovieContext();
  const [loading, setLoading] = useState(false);
  
  const handleDeleteFavorites = (movie) => {
    setLoading(!loading);
    deleteFavorites(movie);
  };

  return (
      <div className="Favorites__container">
      {userFavorites ? (
        userFavorites.map(movie => <Card key={movie.imdbID} movie={movie} fromFavorite handleDeleteFavorites={handleDeleteFavorites}/>)
    ) : null}
      </div>
    );
};

export default Favorites;
