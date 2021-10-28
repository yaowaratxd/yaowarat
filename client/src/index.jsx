import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Related from './components/related/index.jsx';


const App = () => {
  const [random, setRandom] = useState('hello world');
  return (
    <div>
      <h1>Overview</h1>
      <h1>Ratings and Reviews</h1>
      <h1>Questions and Answers</h1>
      <h1><Related /></h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
