import React from 'react';

const StarBar = ({ reviews }) => {
  console.log('This is the Star Bar');

  return (
    <div className="basebar">
      <div className="filledbar">
        <span>_</span>
      </div>
    </div>
  );
};

export default StarBar;