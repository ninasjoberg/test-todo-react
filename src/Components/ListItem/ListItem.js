import React, { Component } from 'react';
import './listItem.css';


export default function ListItem (props) {

    return (
      <div>
        <li className="item">
            <p>{props.item}</p>
            <button className="itemButton" onClick={() => props.delete(props.item)}>Delete</button>
            {(props.type === 'todo') &&
                <button className="itemButton" onClick={() => props.done(props.item)}>Completed</button>
            }
        </li>
      </div>
    );

}
