import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Related from './components/related/index.jsx';


import styled from 'styled-components';

import Overview from './components/overview/Overview.jsx';
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
  return (
    <div>
    {/* <Root>
      <Overview product={allThings[0]}/>
    </Root> */}

      <h3>Ratings and Reviews</h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3>Questions and Answers</h3>
      <h2><Related /></h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
