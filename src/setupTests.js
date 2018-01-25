import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/**
 * Extended version of localStorage mock, this is
 * so you can actually save stuff in localStorage
 */
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: ((key) => {
            return store[key];
        }),
        setItem: ((key, value) => {
            store[key] = value.toString();
        }),
        clear: (() => {
            store = {};
        }),
        removeItem: ((key) => {
            delete store[key];
        }),
    };
});

global.localStorage = localStorageMock();
