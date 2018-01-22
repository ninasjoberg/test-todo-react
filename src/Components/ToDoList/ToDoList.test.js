import React from 'react';
import ToDoList from './ToDoList.js';
import { shallow } from 'enzyme';


it('renders a list of Todo:s', () => {
    const toDoList = ['plugga', 'koka kaffe', 'tvätta']
    const wrapper = shallow(<ToDoList toDoList={toDoList} />);
    expect(wrapper.find('.list-of-todos').children()).toHaveLength(3);
});