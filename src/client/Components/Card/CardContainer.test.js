import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MOCKED_MOVIES } from '../../utils/testsMockedData';
import CardContainer from './CardContainer';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('CardContainer behaviour', () => {
    it('should render Card components', () => {
        wrapper = shallow(<CardContainer movies={MOCKED_MOVIES} />);
        expect(wrapper.find('Card').length).toEqual(5)
    });
});
