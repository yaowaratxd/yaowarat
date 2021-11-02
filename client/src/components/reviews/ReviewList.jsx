import React from 'react';

import ReviewTiles from './ReviewTiles.jsx';

const ReviewList = (props) => {
  console.log(props);
  if (!Array.isArray(props.reviews)) {
    return <></>
  } else {
    return (
      < div className="container" >
        <h4>Reviews</h4>
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} />
        <button type="button" onClick={props.readMore}>Read More</button>
      </div >
    );
  }
};

export default ReviewList;