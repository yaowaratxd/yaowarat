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

test('state has value', () => {
  const component = shallow
  expect(thing).length.not.toEqual(0)
})