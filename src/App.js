import React, { Component } from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';
import DoneList from './Components/DoneList/DoneList';

let counter = 0;

class App extends Component {
    state = {
        addToDo: '',
        toDoList: [],
        doneList: [],
        errorMessage: '',
    }


    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    addToDoList = (event) => {
        event.preventDefault();

        if (this.state.addToDo === '') {
            this.setState({ errorMessage: 'type in a ToDo' });
        } else {
            this.setState({ errorMessage: '' });
            counter += 1;
            const toDo = {
                text: this.state.addToDo,
                id: counter,
            };
            this.setState({ toDoList: [...this.state.toDoList, toDo] });
            this.setState({ addToDo: '' });
        }
    }


    addDoneList = (doneItem) => {
        this.setState({ doneList: [...this.state.doneList, doneItem] });
        const newToDoList = this.state.toDoList.filter((item) => {
            return item.id !== doneItem.id;
        });
        this.setState({ toDoList: newToDoList });
    }


    deleteToDo = (deleteItem) => {
        const newToDoList = this.state.toDoList.filter((item) => {
            return item.id !== deleteItem.id;
        });
        this.setState({ toDoList: newToDoList });
    }


    deleteDone = (deleteItem) => {
        const newDoneList = this.state.doneList.filter((item) => {
            return item !== deleteItem;
        });
        this.setState({ doneList: newDoneList });
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">To-Do testApp</h1>
                </header>
                <article className="main-content">
                    {this.state.errorMessage && <p className="input-error-message">{this.state.errorMessage}</p>}
                    <ToDoForm
                        onChange={this.changeHandler}
                        onSubmit={this.addToDoList}
                        insertText={this.state.addToDo}
                    />
                    <div className="list-content">
                        <ToDoList
                            toDoList={this.state.toDoList}
                            onDelete={this.deleteToDo}
                            onDone={this.addDoneList}
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
