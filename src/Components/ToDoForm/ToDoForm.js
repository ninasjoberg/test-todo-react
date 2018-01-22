import React, { Component } from 'react';
//import './ToDoForm.css';

export default function ToDoForm (props) {


    return (
      <div>
        <form onSubmit={props.onSubmit} className="todo-form">
          <input type="text" name="addToDo" onChange={props.onChange} placeholder="toDo" value={props.insertText}/>
          <input className="btn btn-primary" type="submit" value="Create" />
        </form>
      </div>
    );

}

