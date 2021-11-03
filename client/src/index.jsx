import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import sampleData from './sampleData.json'

// import './index.css';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const App = () => {
  const [random, setRandom] = useState('hello world');
  const [allThings, setAllThings] = useState(sampleData);
  return (
    <Root>
      {/* <Overview product={allThings[0]} /> */}
      <Reviews product={allThings[3]} />
    </Root>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
