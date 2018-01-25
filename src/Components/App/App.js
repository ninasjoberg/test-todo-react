import React, { Component } from 'react';
import './App.css';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import DoneList from '../DoneList/DoneList';
import { saveItemListToLocalStorage } from '../utils/localStorage';


let counter = 0;

class App extends Component {
    state = {
        addToDo: '',
        toDoList: this.props.toDoList,
        doneList: this.props.doneList,
        errorMessage: '',
    }


    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    addToDoList = (event) => {
        event.preventDefault();

        if (this.state.addToDo === '' || this.state.addToDo < 2) {
            this.setState({ errorMessage: 'type in a ToDo' });
        } else {
            this.setState({ errorMessage: '' });
            counter += 1;
            const toDo = {
                text: this.state.addToDo,
                id: counter,
            };
            const newToDoList = [...this.state.toDoList, toDo];
            this.setState({ toDoList: newToDoList });
            this.setState({ addToDo: '' });
            saveItemListToLocalStorage(newToDoList, 'toDoList');
        }
    }


    addToDoneList = (doneItem) => {
        if (!doneItem || (typeof (doneItem) !== 'object')) {
            throw Error('doneItem must be an object');
        }
        const newDoneList = [...this.state.doneList, doneItem];
        this.setState({ doneList: newDoneList });
        saveItemListToLocalStorage(newDoneList, 'doneList');

        const newToDoList = this.state.toDoList.filter((item) => {
            return item.id !== doneItem.id;
        });
        this.setState({ toDoList: newToDoList });
        saveItemListToLocalStorage(newToDoList, 'toDoList');
    }


    deleteToDo = (deleteItem) => {
        if (!deleteItem || (typeof (deleteItem) !== 'object')) {
            throw Error('deleteItem must be an object');
        }
        const newToDoList = this.state.toDoList.filter((item) => {
            return item.id !== deleteItem.id;
        });
        this.setState({ toDoList: newToDoList });
        saveItemListToLocalStorage(newToDoList, 'toDoList');
    }


    deleteDone = (deleteItem) => {
        if (!deleteItem || (typeof (deleteItem) !== 'object')) {
            throw Error('deleteItem must be an object');
        }
        const newDoneList = this.state.doneList.filter((item) => {
            return item.id !== deleteItem.id;
        });
        this.setState({ doneList: newDoneList });
        saveItemListToLocalStorage(newDoneList, 'doneList');
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">To-Do testApp</h1>
                </header>
                <article className="main-content">
                    {(this.state.errorMessage !== '') && <p className="input-error-message">{this.state.errorMessage}</p>}
                    <ToDoForm
                        onChange={this.changeHandler}
                        onSubmit={this.addToDoList}
                        insertText={this.state.addToDo}
                    />
                    <div className="list-content">
                        <ToDoList
                            toDoList={this.state.toDoList}
                            onDelete={this.deleteToDo}
                            onDone={this.addToDoneList}
                        />
                        <DoneList
                            doneList={this.state.doneList}
                            onDelete={this.deleteDone}
                        />
                    </div>
                </article>
            </div>
        );
    }
}

export default App;
