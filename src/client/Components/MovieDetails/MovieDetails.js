import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { getMovieDetails } from '../../../server';

import './MovieDetails.css';

const MovieDetails = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    };

    const [movieDetails, setMovieDetails] = useState(null);
    const query = useQuery();
    const imdbID = query.get("imdbID");

    useEffect(() => {
        getMovieDetails(imdbID).then(setMovieDetails);
    }, [imdbID]);

    return movieDetails ? (
        <div className="MovieDetails__container">
            <div className="MovieDetails__info">
              <img src={movieDetails.Poster} className="MovieDetails__image" alt="poster" />
              <ul className="MovieDetails__details">
                  <li>{movieDetails.Title}</li>
                  <li>Year: {movieDetails.Year}</li>
                  <li>Genre: {movieDetails.Genre}</li>
                  <li>Director: {movieDetails.Director}</li>
                  <li>Actors: {movieDetails.Actors}</li>
                  <li>Country: {movieDetails.Country}</li>
                  <li>Language: {movieDetails.Language}</li>
                  <li>Runtime: {movieDetails.Runtime}</li>
              </ul>
            </div>
            <div className="MovieDetails__plot">
              <p>{movieDetails.Plot}</p>
            </div>
        </div>
    ) : <div><p>Loading</p></div>
};

export default MovieDetails;
