import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('Login behaviour', () => {
    it('should render Login components', () => {
        wrapper = shallow(<Login />);
        expect(wrapper.find('.Login')).toBeTruthy(); ;
    });

    it('should call handleLogin func on submit', () => {
        wrapper = shallow(<Login />);
        expect(wrapper.find('button')).toHaveLength(1);
        wrapper.find('.Login__button').simulate('click');
    });

    it('should render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
