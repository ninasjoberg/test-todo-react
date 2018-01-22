import React from 'react';
import ListItem from './ListItem.js';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
    shallow(<ListItem />);
});