import React from 'react';
import PropTypes from 'prop-types';
import './listItem.css';


export default function ListItem(props) {
    const {
        item, onDelete, onDone, type,
    } = props;

    return (
        <div>
            <li className="item">
                <p>{item.text}</p>
                <div className="buttons">
                    <button className="delete-button" onClick={() => { onDelete(item); }}>Delete</button>
                    {(type === 'todo') &&
                        <button className="complete-button" onClick={() => { onDone(item); }}>Completed</button>
                    }
                </div>
            </li>
        </div>
    );
}


ListItem.propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
    type: PropTypes.string.isRequired,
};

