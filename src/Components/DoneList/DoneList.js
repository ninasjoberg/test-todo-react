import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './doneList.css';


export default function DoneList(props) {
    const doneList = props.doneList.map((item, index) => {
        return <ListItem key={index} item={item} type="done" onDelete={props.onDelete} />;
    });

    return (
        <div className="done-list">
            <h1>DONE:</h1>
            <ul className="list-of-dones">
                {doneList}
            </ul>
        </div>
    );
}

DoneList.propTypes = {
    doneList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
