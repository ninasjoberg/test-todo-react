import React, { Component } from 'react';
//import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div>
          <div>
			<input type="text" value="" placeholder="text" required="" autofocus></input>
			<button onClick>add</button>
		</div>
      </div>
    );
  }
}

export default ToDo;
