import React from 'react';

import ReviewTiles from './ReviewTiles.jsx';

const ReviewList = (props) => {
  return (
    <div className="container">
      <div className="tile">Review 1</div>
      <div className="tile">Review 2</div>
      <div className="tile">Review 3</div>
      <div className="tile">Review 4</div>
      <button type="button" onClick={props.readMore}>Read More</button>
    </div>
    // <ReviewTiles />
  );
};

export default ReviewList;