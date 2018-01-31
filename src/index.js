import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { getItemListFromLocalStorage, getCounterFromLocalStorage } from './Components/utils/localStorage';
import registerServiceWorker from './registerServiceWorker';


const toDoList = getItemListFromLocalStorage('toDoList');
const doneList = getItemListFromLocalStorage('doneList');
const counter = getCounterFromLocalStorage('Counter');

ReactDOM.render(<App toDoList={toDoList} doneList={doneList} counter={counter} />, document.getElementById('root'));
registerServiceWorker();
