import React, { useState, useContext } from 'react';

import { getMovieByName } from '../../server';

export const MoviesContext = React.createContext();
export const FavoritesContext = React.createContext();

const MoviesProvider = ({children}) => {
	const storageFaves = JSON.parse(localStorage.getItem('user')) || [];
	const [searchResult, setSearchResult] = useState([]);
	const [userFavorites, setUserFavorites] = useState(storageFaves);
	
	return <MoviesContext.Provider value={{ search: [searchResult, setSearchResult], favorites: [userFavorites, setUserFavorites]}}>{children}</MoviesContext.Provider>;
};

const useMovieContext = () => {
	const { search, favorites } = useContext(MoviesContext);
	const [searchResult, setSearchResult] = search;
	const [userFavorites, setUserFavorites] = favorites;

	const saveFavorites = (movieCard) => {
		const userF = userFavorites;
		userF.push(movieCard);
		setUserFavorites(userF);
		localStorage.setItem('user', JSON.stringify(userF));
	};

	const deleteFavorites = (movieCard) => {
		const userF = userFavorites;
		const indexToDelete = userF.findIndex(movie => movie.imdbID === movieCard.imdbID);
		userF.splice(indexToDelete, 1);
		localStorage.setItem('user', JSON.stringify(userFavorites));
		setUserFavorites(userF);
	};

	const searchMovie = debounce((title) => {
        getMovieByName(title).then(setSearchResult)
    }, 500);

    return {
		searchResult: searchResult.Search,
		searchError: searchResult.Error,
		searchTotalResults: searchResult.totalResults,
		searchMovie,
		saveFavorites,
		userFavorites,
		deleteFavorites
	};
};

function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export { MoviesProvider, useMovieContext };
