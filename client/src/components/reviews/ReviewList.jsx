import React from 'react';

import ReviewTiles from './ReviewTiles.jsx';

const ReviewList = (props) => {
  console.log('Reviews Length: ', props.reviews.length);
  console.log('Reviews to Show: ', props.reviewsShown);
  if (!Array.isArray(props.reviews) || props.reviews.length === 0) {
    return (
      < div className="container" >
        <h4>Reviews</h4>
        <p>There are no reviews. Go ahead and add one!</p>
      </div >
    );
  } else if (props.reviewsShown >= props.reviews.length) {
    // console.log('To be shown is greater then length');
    return (
      < div className="container" >
        <h5>{props.reviews.length} reviews, sorted by relevance</h5>
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} />
        <button type="button" onClick={props.writeReview}>Submit Review</button>
      </div >
    );
  } else {
    return (
      < div className="container" >
        <h5>{props.reviews.length} reviews, sorted by relevance</h5>
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} />
        <button type="button" onClick={props.readMore}>Read More</button>
        <button type="button" onClick={props.writeReview}>Submit Review</button>
      </div >
    );
  }
};

export default ReviewList;