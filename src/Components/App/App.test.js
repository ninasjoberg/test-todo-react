import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('test the internal method addToDoList', () => {
    const fakeEvent = {
        target: {
            name: 'addToDo',
            value: 'mata hunden',
        },
    };
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
    wrapper.instance().changeHandler(fakeEvent);
    expect(wrapper.state().addToDo).toEqual('mata hunden');
});


describe('test the internal method addToDoList', () => {
    const preventDefault = jest.fn();
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
    it('adds an errorMessage to state if no todo', () => {
        wrapper.setState({ addToDo: '' });
        wrapper.instance().addToDoList({ preventDefault });
        expect(wrapper.state().errorMessage).toBeTruthy();
    });
    it('adds a todoItem to toDoList in state', () => {
        wrapper.setState({ addToDo: 'tvätta' });
        wrapper.instance().addToDoList({ preventDefault });
        const todo = wrapper.state().toDoList.find((item) => {
            return item.text === 'tvätta';
        });
        expect(todo).toBeTruthy();
    });
});


it('should show message is shown when errorMessage in state', () => {
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
    const errorMess = 'type in a ToDo';
    wrapper.setState({ errorMessage: errorMess });
    expect(wrapper.find('.input-error-message').exists()).toBeTruthy();
    expect(wrapper.find('.input-error-message').text()).toBe(errorMess);
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
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
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
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
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
    const wrapper = shallow(<App toDoList={[]} doneList={[]} />);
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

