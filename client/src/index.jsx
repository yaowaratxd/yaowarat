import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Related from './components/related/index.jsx';


const App = () => {
  const [random, setRandom] = useState('hello world');
  return (
    <div>
      <h3>Overview</h3>
      <h3>Ratings and Reviews</h3>
      <h3>Questions and Answers</h3>
      <h2><Related /></h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
