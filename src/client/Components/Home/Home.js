import React, { useState, Fragment } from 'react';
import Pagination from "react-js-pagination";

import { useMovieContext } from '../../Store/movieSearchContext';
import CardContainer from '../Card';

import './Home.css';

const Home = () => {
    const { searchResult, searchTotalResults } = useMovieContext();
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6;
    const totalResults =  searchResult && parseInt(searchTotalResults, 10);
    const pageRange = searchResult && Math.ceil(searchResult.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = searchResult && searchResult.slice(indexOfFirstMovie, indexOfLastMovie);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    return searchResult ?  (
        <Fragment>
          <Pagination
            totalItemsCount={totalResults}
            itemsCountPerPage={moviesPerPage}
            onChange={(evt) => handlePageChange(evt)}
            activePage={currentPage}
            pageRangeDisplayed={pageRange}
            className="pagination"
            />
          <div className="CardContainer">
            <CardContainer movies={currentMovies} />
          </div>
        </Fragment>
   ) : <HomePage />
};

const HomePage = () => (
    <div className="HomePage__container">
        <img src="home5.jpg" className="HomePage__image" alt="poster" />
        <div className="HomePage__title">
            <p>MOVIES PROJECT</p>
        </div>
        <p className="HomePage__text">WELCOME TO MOVIES PROJECT, THE WEB WHERE YOU CAN FIND ALL YOUR FAVORITES MOVIES AND SERIES AND MUCH MORE!</p>
    </div>
);

export default Home;
