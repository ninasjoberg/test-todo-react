import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.js'
import './toDoList.css';

export default function ToDoList (props) {


    const toDoList = props.toDoList.map((item, index) => {
        return <ListItem key={index} item={item} type="todo" delete={props.onDelete} done={props.onDone}/>
    })

    return (
      <div className="todo-list">
        <h3>ToDo:</h3>
        <ul className="list-of-todos">
          {toDoList}
        </ul>
      </div>
    );
}

