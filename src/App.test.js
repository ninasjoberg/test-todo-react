import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
    shallow(<App />);
});

/* Unlike the previous smoke test using ReactDOM.render(),
this test only renders <App> and doesn’t go deeper.
even if <App> itself renders a <Button> that throws, this test will pass.
Shallow rendering is great for isolated unit tests,
but you may still want to create some full rendering tests to ensure the
components integrate correctly. Enzyme supports full rendering with mount(),
and you can also use it for testing state changes and component lifecycle.*/

