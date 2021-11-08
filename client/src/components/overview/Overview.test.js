import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

import Overview from './Overview.jsx';

describe('Overview component', () => {
  it ('Should render to the screen', () => {
    const component = shallow(<Overview />);
    expect(component).toBeTruthy();
  });
});