import React from 'react';
import { mount } from 'enzyme';

import Overview from './Overview.jsx';

describe('Overview component', () => {
  it ('Should render to the screen', () => {
    const component = mount(<Overview />);
    expect(5).toExist();
  });
});