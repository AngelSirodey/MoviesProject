import React from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import CardContainer from '../Card';

import './Favorites.css';

const Favorites = () => {
    const { userFavorites } = useMovieContext();
    console.log('userFavori_________', userFavorites);

    return (
        <div className="Favorites__container">
          <CardContainer movies={userFavorites} fromFavorite />
        </div>
    );
};

export default Favorites;
