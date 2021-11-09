/** Used in jest.config.js */
const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });
