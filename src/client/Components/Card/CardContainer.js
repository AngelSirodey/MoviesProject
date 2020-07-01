import React from 'react';

import Card from './Card';

const CardContainer = ({ movies, fromFavorite }) => {
    
    return movies ? (
        movies.map( movie => <Card key={movie.imdbID} movie={movie} fromFavorite={fromFavorite} />)
    ) : null
};

export default CardContainer;
