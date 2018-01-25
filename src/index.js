import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { getItemListFromLocalStorage } from './Components/utils/localStorage';
import registerServiceWorker from './registerServiceWorker';


const toDoList = getItemListFromLocalStorage('toDoList');
const doneList = getItemListFromLocalStorage('doneList');

ReactDOM.render(<App toDoList={toDoList} doneList={doneList} />, document.getElementById('root'));
registerServiceWorker();
