import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sampleData from '../../sampleData.json'


configure({ adapter: new Adapter() });

import Overview from './Overview.jsx';

describe('Overview component', () => {
  it ('Should render to the screen', () => {
    const component = shallow(<Overview product={sampleData[0]}/>);
    expect(component).toBeTruthy();
  });
});