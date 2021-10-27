import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [random, setRandom] = useState('hello world');
  return (
    <div>
      <h1>{ random }</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
