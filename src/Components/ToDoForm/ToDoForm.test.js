import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDoForm from './ToDoForm';


it('renders without crashing', () => {
    shallow(<ToDoForm />);
});


it('simulate add todo success', () => {
    const wrapper = mount(<ToDoForm />);
    const todoEvent = { target: { name: 'addToDo', value: 'tvätta' } };
    wrapper.find('input[name="addToDo"]').simulate('change', todoEvent);
    wrapper.find('[data-test="form"]').simulate('submit');
    expect(wrapper.find('.input-error-message').exists()).toBeFalsy();
});