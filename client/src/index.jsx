import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Related from './components/related/index.jsx';
import Banner from './components/Banner.jsx';


import styled from 'styled-components';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import sampleData from './sampleData.json'
import ClickCounter from './components/ClickCounter.jsx';
import Top from './components/Banner.jsx';

import colorScheme from './colorScheme.js';
// import './index.css';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colorScheme.lightBlue};
  padding: 0px;
`;

const OuterContainer = styled.div`
display: flex;
width: 50vw;
left: 15vw;
justify-content: center;
`;

const App = () => {
  const [random, setRandom] = useState('hello world');
  const [allThings, setAllThings] = useState(sampleData);
  const [currentProduct, setCurrentProduct] = useState(allThings[3]);

  return (
    <div>

      <Banner />

      <div className="widget">
        <Root>
          <Top />
        </Root>
        <Root>
          <Overview product={currentProduct} />
        </Root>
      </div>
      <div className="widget">
        <br />
        <Root>
          <Related setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} />
        </Root>
      </div>
      <div className="widget">
        <Root>
          <Reviews product={currentProduct} />
        </Root>
      </div>
      {/* <div className="widget">
        <h3>Questions and Answers</h3>
      </div> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
