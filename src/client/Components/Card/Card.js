import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useMovieContext } from '../../Store/movieSearchContext';

import './Card.css';

const Card = ({ movie, fromFavorite, handleDeleteFavorites }) => {
  const { saveFavorites } = useMovieContext();
  const { Poster, Title, imdbID } = movie;
  const detailsURL = `/details?imdbID=${imdbID}`;

   return (
      <div className="Card__container">
        <img src={Poster} className="Card__image" alt="poster" />
        <div className="Card__description">
          <p className="Card__title">{Title}</p>
          <div className="Card__links">
            {!fromFavorite ?
              <p onClick={() => saveFavorites(movie)} >Add to favotires</p> :
              <p onClick={() => handleDeleteFavorites(movie)} >Remove</p>}
           <Link to={detailsURL}> More details -></Link>
          </div>
        </div>
      </div>
   );
};

Card.propTypes = {
  fromFavorite: PropTypes.bool
};

Card.defaultProps = {
  fromFavorite: false
};

export default Card;
