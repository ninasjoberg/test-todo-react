import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';


const item = {
    text: 'koka kaffe',
    id: 4,
};

let fakefunc;

beforeEach(() => {
    fakefunc = jest.fn();
});


it('renders an li-tag when tehre is a todo', () => {
    const wrapper = shallow(<ListItem type="todo" item={item} />);
    expect(wrapper.find('li')).toBeDefined();
});


it('renders a complete-button if typ=todo', () => {
    const type = 'todo';
    const wrapper = shallow(<ListItem type={type} item={item} />);
    expect(wrapper.find('.complete-button').exists()).toBeTruthy();
});


it('does not render a complete-button if typ=done', () => {
    const type = 'done';
    const wrapper = shallow(<ListItem type={type} item={item} />);
    expect(wrapper.find('.complete-button').exists()).toBeFalsy();
});


it('simulate onclick success delete-button', () => {
    const type = 'toDo';
    const wrapper = mount(<ListItem type={type} item={item} onDelete={fakefunc} />);
    wrapper.find('.delete-button').simulate('click');
    expect(fakefunc).toHaveBeenCalled();
});


it('simulate onclick success doneButton', () => {
    const type = 'todo';
    const wrapper = mount(<ListItem type={type} item={item} onDone={fakefunc} />);
    wrapper.find('.complete-button').simulate('click');
    expect(fakefunc).toHaveBeenCalled();
});


// Snapshot test:

it('should match snapshot', () => {
    const type = 'todo';
    const tree = renderer
        .create(<ListItem type={type} item={item} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

