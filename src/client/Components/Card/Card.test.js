import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';
import { MoviesProvider } from '../../Store/movieSearchContext';

Enzyme.configure({ adapter: new Adapter() });


let wrapper;

const movie = {
    Poster: 'image1.jpg',
    Title: 'title1',
    imdbID: '1'
  };

describe('Card Component behaviour', () => {
    it('should render as expected', () => {
        wrapper = shallow(
        <MoviesProvider>
            <Card movie={movie} search="search" />
        </MoviesProvider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
