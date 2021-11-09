const React = require('react');
// import { shallow, configure } from 'enzyme';
const shallow = require('enzyme');
const configure = require('enzyme');
const mount = require('enzyme');

test('addition', () => {
  console.log('test is running');
  expect(1 + 1).toEqual(2);
})

const index = require('./index.jsx')

describe('Related', () => {
  it('should render properly with no children', () => {
    const component = shallow(<Related />);
    console.log(component)
  })



})