import React from 'react';
import ToDoForm from './ToDoForm.js';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
    shallow(<ToDoForm />);
});