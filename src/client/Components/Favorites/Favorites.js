import React, { useState } from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import CardContainer from '../Card';

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
      {userFavorites.length ?
      <CardContainer  movies={userFavorites} fromFavorite handleDeleteFavorites={handleDeleteFavorites}/>
      : searchResult ?
      <CardContainer movies={searchResult} />
      : null}
    </div>
  );
};

export default Favorites;
