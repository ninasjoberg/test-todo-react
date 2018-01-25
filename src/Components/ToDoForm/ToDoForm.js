import React from 'react';


export default function ToDoForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} data-test="form" className="todo-form">
                <input type="text" name="addToDo" onChange={props.onChange} placeholder="toDo" value={props.insertText} />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}
