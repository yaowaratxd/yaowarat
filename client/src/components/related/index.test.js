const React = require('react');
// import { shallow, configure } from 'enzyme';
const shallow = require('enzyme');
const configure = require('enzyme');
const mount = require('enzyme');
const Related = require('./index.jsx')

test('addition', () => {
  console.log('test is running');
  expect(1 + 4).toEqual(5);
})

const index = require('./index.jsx')

// describe('Related', () => {
//   it('should render properly with no children', () => {
//     const component = shallow(<Related />);
//   })



// })