import React from 'react';
import { shallow } from 'enzyme';

//components
import Home from './Home.js';

describe('<Home />', () => {
    it('should render correctly', () => {
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
        expect(component.find('h1').exists()).toBe(true);
    });
});
