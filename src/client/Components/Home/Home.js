import React from 'react';

import { useMovieContext } from '../../Store/movieSearchContext';
import CardContainer from '../Card';

import './Home.css';

const Home = () => {
    const { searchResult } = useMovieContext();

    return searchResult ?  (
        <div className="CardContainer">
            <CardContainer movies={searchResult.Search} />
        </div>
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
