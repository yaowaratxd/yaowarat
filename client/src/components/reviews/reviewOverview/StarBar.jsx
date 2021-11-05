import React from 'react';

const StarBar = ({ reviews, starCount }) => {
  var count = reviews.length;
  var votes = starCount;
  var filled = (100 * (votes / count));
  // console.log(filled);

  return (
    <div className="basebar">
      <div className="filledbar" style={{ 'backgroundColor': 'lightgreen', 'width': (filled) + '%' }}>
        <span>{votes}</span>
      </div>
    </div>
  );
};

export default StarBar;