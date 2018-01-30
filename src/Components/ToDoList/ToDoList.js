import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './toDoList.css';


export default function ToDoList(props) {
    const toDoList = props.toDoList.map((item, index) => {
        return (<ListItem
            key={index}
            item={item}
            type="todo"
            onDelete={props.onDelete}
            onDone={props.onDone}
        />);
    });

    return (
        <div className="todo-list">
            <h1>TO-DO:</h1>
            <ul className="list-of-todos">
                {toDoList}
            </ul>
        </div>
    );
}

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

