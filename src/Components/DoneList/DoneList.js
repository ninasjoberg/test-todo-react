import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.js'
import './doneList.css';


export default function ToDoList (props) {


    const doneList = props.doneList.map((item, index) => {
      console.log(item)
        return <ListItem key={index} item={item} type="done" delete={props.onDelete}/>
    })

    return (
      <div className="done-list">
        <h3>Done:</h3>
        <ul className="list-of-dones">
          {doneList}
        </ul>
      </div>
    );

}

