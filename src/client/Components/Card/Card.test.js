import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from "react-router-dom";

import Card from './Card';
import { MOCKED_ONE_MOVIE } from '../../utils/testsMockedData';
import { MoviesProvider } from '../../Store/movieSearchContext';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('Card Component behaviour', () => {
    it('should include Link to details', () => {
        wrapper = mount(
            <StaticRouter>
                <MoviesProvider>
                    <Card movie={MOCKED_ONE_MOVIE} />
                </MoviesProvider>
            </StaticRouter>
        );
        expect(wrapper.find('Link').props().to).toBe('/details?imdbID=1');
    });

    it('should render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
