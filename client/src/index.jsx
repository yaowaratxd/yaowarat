import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Related from './components/related/index.jsx';


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

const OuterContainer = styled.div`
display: flex;
width: 70vw;
left: 15vw;
justify-content: center;
`;

const App = () => {
  const [random, setRandom] = useState('hello world');
  const [allThings, setAllThings] = useState(sampleData);
  return (
    <div>
        <Root>
          <Overview product={allThings[2]}/>
        </Root>
      <div className="widget">
      </div>
      <div className="widget">
        <h3>Ratings and Reviews</h3>
      </div>
      <div className="widget">
        <h3>Questions and Answers</h3>
      </div>
      <div className="widget">
        <br />
        <h3><Related currentProduct={allThings[2]}/></h3>
      </div>
    <Root>
      {/* <Overview product={allThings[0]} /> */}
      <Reviews product={allThings[2]} />
    </Root>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
