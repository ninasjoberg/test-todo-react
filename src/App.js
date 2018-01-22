import React, { Component } from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm/ToDoForm.js';
import ToDoList from './Components/ToDoList/ToDoList.js';
import DoneList from './Components/DoneList/DoneList.js';


class App extends Component {

  state = {
    addToDo: '',
    toDoList: [],
    doneList: [],
    errorMessage: ''
  }

  //sets the state based on the name and value from the current inputfield
  addToDo = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  addToDoList = (event) => {
    event.preventDefault();

    if(!this.state.addToDo){
      this.setState({errorMessage : 'type in a ToDo'});
    }

    if(!this.state.errorMessage){
      this.setState({toDoList : [...this.state.toDoList, this.state.addToDo]})
      this.setState({addToDo: ''})
    }
  }

  addDoneList = (doneItem) => {
    this.setState({doneList : [...this.state.doneList, doneItem]})

    const newToDoList = this.state.toDoList.filter((item) => {
      return item != doneItem;
    })
    this.setState({toDoList : newToDoList})
  }


  deleteToDo = (deleteItem) => {
    const newToDoList = this.state.toDoList.filter((item) => {
      console.log(item);
      return item != deleteItem;
    })
    this.setState({toDoList : newToDoList})
  }


  deleteDone = (deleteItem) => {
    const newDoneList = this.state.doneList.filter((item) => {
      return item != deleteItem;
    })
    this.setState({doneList : newDoneList})
  }


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do testApp</h1>
        </header>
        <article className="main-content">
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          <ToDoForm onChange={this.addToDo} onSubmit={this.addToDoList} insertText={this.state.addToDo}/>
          <div className="list-content">
            <ToDoList toDoList={this.state.toDoList} onDelete={this.deleteToDo} onDone={this.addDoneList}/>
            <DoneList doneList={this.state.doneList} onDelete={this.deleteDone}/>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
