import React from 'react';

import ReviewTiles from './tileComponents/ReviewTiles.jsx';

const ReviewList = (props) => {
  if (!Array.isArray(props.reviews) || props.reviews.length === 0) {
    return (
      < div className="container" >
        <h4>Reviews</h4>
        <p>There are no reviews. Go ahead and add one!</p>
        <button type="button" onClick={props.writeReview}>Submit Review</button>
      </div >
    );
  } else if (props.reviewsShown >= props.reviews.length) {
    return (
      < div className="container" >
        <h5>{props.reviews.length} reviews, sorted by {" "}
          <label>
            <select value={props.sortType} onChange={props.sort}>
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </label></h5>
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} helpfulButton={props.helpfulButton} />
        <button type="button" onClick={props.writeReview}>Submit Review</button>
      </div >
    );
  } else {
    return (
      < div className="container" >
        <h5>{props.reviews.length} reviews, sorted by {" "}
          <label>
            <select value={props.sortType} onChange={props.sort}>
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </label></h5>
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} helpfulButton={props.helpfulButton} helpfulClick={props.helpfulClick} />
        <button type="button" onClick={props.readMore}>Read More</button>
        <button type="button" onClick={props.writeReview}>Submit Review</button>
      </div >
    );
  }
};

export default ReviewList;