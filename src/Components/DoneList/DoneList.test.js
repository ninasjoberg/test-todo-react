import React from 'react';
import { shallow } from 'enzyme';
import DoneList from './DoneList';


it('renders a list of Done', () => {
    const doneList = [
        {
            text: 'åka pulka',
            id: 0,
        },
        {
            text: 'träna',
            id: 1,
        },
    ];
    const wrapper = shallow(<DoneList doneList={doneList} />);
    expect(wrapper.find('.list-of-dones').children()).toHaveLength(2);
});

