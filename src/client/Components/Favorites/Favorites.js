import React, { useState, useEffect } from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import CardContainer from '../Card';

import './Favorites.css';

const Favorites = () => {
  const { userFavorites } = useMovieContext();
  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(()=> {
    setNumOfItems(userFavorites.length)
  }, [numOfItems, userFavorites]);

  return (
        <div className="Favorites__container">
        <CardContainer movies={userFavorites} fromFavorite />
      </div>
    );
};

export default Favorites;
