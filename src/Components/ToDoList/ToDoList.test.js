import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from './ToDoList';


it('renders a list of Todo:s', () => {
    const toDoList = [
        {
            text: 'åka pulka',
            id: 0,
        },
        {
            text: 'träna',
            id: 1,
        },
        {
            text: 'tvätta',
            id: 2,
        },
    ];
    const wrapper = shallow(<ToDoList toDoList={toDoList} />);
    expect(wrapper.find('.list-of-todos').children()).toHaveLength(3);
});