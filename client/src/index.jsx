import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import sampleData from './sampleData.json'

// import './index.css';

const Root =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const App = () => {
  const [random, setRandom] = useState('hello world');
  const [allThings, setAllThings] = useState(sampleData);
  console.log(sampleData);
  return (
    <Root>
      <h1>{ random }</h1>
    </Root>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
