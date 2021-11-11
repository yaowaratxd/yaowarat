import React from 'react';

const Keys = ({ charts }) => {
  if (charts) {
    return (
      <div className="charkey">
        <p>Too Small</p>
        <p>Perfect</p>
        <p>Too Big</p>
      </div>
    );
  } else {
    return (
      <div className="charkey">
        <p>Poor</p>
        <p>Fine</p>
        <p>Great</p>
      </div>
    );
  }
};

export default Keys;