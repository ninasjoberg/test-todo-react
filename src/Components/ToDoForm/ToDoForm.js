import React from 'react';
import './toDoForm.css';


export default function ToDoForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} data-test="form" className="todo-form">
                <input type="text" name="addToDo" onChange={props.onChange} placeholder="Thing I have to do" value={props.insertText} className="todo-input" />
                <input type="submit" value="Create" className="submit-button" />
            </form>
        </div>
    );
}
