import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';


const item = {
    text: 'koka kaffe',
    id: 4,
};


it('renders without crashing', () => {
    shallow(<ListItem type="todo" item={item} />);
});


it('renders an li-tag when tehre is a todo', () => {
    const wrapper = shallow(<ListItem type="todo" item={item} />);
    expect(wrapper.find('li')).toBeDefined();
});


it('renders a complete-button if typ=todo', () => {
    const type = 'todo';
    const wrapper = shallow(<ListItem type={type} item={item} />);
    expect(wrapper.find('.completeButton').exists()).toBeTruthy();
});


it('does not render a complete-button if typ=done', () => {
    const type = 'done';
    const wrapper = shallow(<ListItem type={type} item={item} />);
    expect(wrapper.find('.completeButton').exists()).toBeFalsy();
});

