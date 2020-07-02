import React from 'react';

import Card from './Card';

const CardContainer = ({ movies, fromFavorite, handleDeleteFavorites }) => {

    return movies ? (
        movies.map( movie => <Card key={movie.imdbID} movie={movie} fromFavorite={fromFavorite} handleDeleteFavorites={handleDeleteFavorites} />)
    ) : null;
};

export default CardContainer;
