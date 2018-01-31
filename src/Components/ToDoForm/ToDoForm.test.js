import React from 'react';
import { shallow } from 'enzyme';
import ToDoForm from './ToDoForm';


test('onChange is called when inputvalue is changed', () => {
    const fakefunc = jest.fn();
    const wrapper = shallow(<ToDoForm onChange={fakefunc} />);
    wrapper.find('.todo-input').simulate('change', 'tvätta');
    expect(fakefunc).toHaveBeenCalled();
});


test('onSubmit is called when form is submitted', () => {
    const fakefunc = jest.fn();
    const wrapper = shallow(<ToDoForm onSubmit={fakefunc} />);
    wrapper.find('form').simulate('submit');
    expect(fakefunc).toHaveBeenCalled();
});

