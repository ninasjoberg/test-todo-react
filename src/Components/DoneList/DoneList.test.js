import React from 'react';
import DoneList from './DoneList.js';
import { shallow } from 'enzyme';


it('renders a list of Done', () => {
    const doneList = ['åka pulka', 'ring ett samtal']
    const wrapper = shallow(<DoneList doneList={doneList} />);
    expect(wrapper.find('.list-of-dones').children()).toHaveLength(2);
});

