import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

/* Unlike the previous smoke test using ReactDOM.render(),
this test only renders <App> and doesn’t go deeper.
even if <App> itself renders a <Button> that throws, this test will pass.
Shallow rendering is great for isolated unit tests,
but you may still want to create some full rendering tests to ensure the
components integrate correctly. Enzyme supports full rendering with mount(),
and you can also use it for testing state changes and component lifecycle.*/

it('renders without crashing', () => {
    shallow(<App />);
});

describe('test the internal method addToDoList', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(<App />);
    it('adds a todoItem to toDoList in state', () => {
        wrapper.setState({ addToDo: 'tvätta' });
        wrapper.instance().addToDoList({ preventDefault });
        const todo = wrapper.state().toDoList.find((item) => {
            return item.text === 'tvätta';
        });
        expect(todo).toBeTruthy();
    });
    it('adds an errorMessage to state if no todo', () => {
        wrapper.setState({ addToDo: '' });
        wrapper.instance().addToDoList({ preventDefault });
        expect(wrapper.state().errorMessage).toBeTruthy();
    });
});


const listOfTodos = [
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

const toDoObj = {
    text: 'åka pulka',
    id: 0,
};

const newListOfTodos = [{
    text: 'träna',
    id: 1,
},
{
    text: 'tvätta',
    id: 2,
}];

describe('test the internal method addToDoneList', () => {
    const wrapper = mount(<App />);
    it('adds a todoItem to doneList in state', () => {
        wrapper.setState({ toDoList: listOfTodos });
        wrapper.instance().addToDoneList(toDoObj);
        expect(wrapper.state().doneList).toMatchObject([toDoObj]);
        expect(wrapper.state().toDoList).toMatchObject(newListOfTodos);
    });
    it('trows error if no doneItem', () => {
        const tryToAddDoneItemWithFaltyArg = () => {
            wrapper.instance().addToDoneList(undefined);
        };
        expect(tryToAddDoneItemWithFaltyArg).toThrowError('doneItem must be an object');
    });
});


describe('test the internal method deleteToDo', () => {
    const wrapper = mount(<App />);
    it('delets a todoItem from toDoList in state', () => {
        wrapper.setState({ toDoList: listOfTodos });
        wrapper.instance().deleteToDo(toDoObj);
        expect(wrapper.state().toDoList).toMatchObject(newListOfTodos);
    });
    it('trows error if no deleteItem', () => {
        const tryToDeleteWithFaltyArg = () => {
            wrapper.instance().deleteToDo('plugga');
        };
        expect(tryToDeleteWithFaltyArg).toThrowError('deleteItem must be an object');
    });
});


describe('test the internal method deleteDone', () => {
    const wrapper = mount(<App />);
    it('delets a todoItem from doneList in state', () => {
        wrapper.setState({ doneList: listOfTodos });
        wrapper.instance().deleteDone(toDoObj);
        expect(wrapper.state().doneList).toMatchObject(newListOfTodos);
    });
    it('trows error if no doneItem', () => {
        const tryToDeleteWithFaltyArg = () => {
            wrapper.instance().deleteDone(null);
        };
        expect(tryToDeleteWithFaltyArg).toThrowError('deleteItem must be an object');
    });
});
