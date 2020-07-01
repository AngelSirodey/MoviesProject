import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardContainer from './CardContainer';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const movies = [
  {
    Poster: 'image1.jpg',
    Title: 'title1',
    imdbID: '1'
  },
  {
    Poster: 'image2.jpg',
    Title: 'title2',
    imdbID: '2'
  }
];

describe('CardContainer behaviour', () => {
    it('should render two Card components', () => {
        wrapper = shallow(<CardContainer movies={movies} />);
        expect(wrapper.find('Card').length).toEqual(2)
    });
});
