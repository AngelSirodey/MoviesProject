import { OMDB_API_KEY, API_HOST } from "./config/secrets";

export function getMovieByName(name) {
	const url = `${API_HOST}/?apikey=${OMDB_API_KEY}&s=${name}`;
	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e);
			return {};
		});
};

export function getMovieDetails(movieId) {
	const url = `${API_HOST}/?apikey=${OMDB_API_KEY}&i=${movieId}`;
	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e);
			return {};
		});
};
