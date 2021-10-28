import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import ImageGallery from './components/overview/ImageGallery.jsx';
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
    <Root>
      <ImageGallery product={allThings[0]}/>
    </Root>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
