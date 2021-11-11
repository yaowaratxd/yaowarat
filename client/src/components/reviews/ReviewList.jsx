import React from 'react';

import ReviewTiles from './tileComponents/ReviewTiles.jsx';
import SubmitModal from './submitModal/SubmitModal.jsx';

const ReviewList = (props) => {
  const modal = (props.showModal ? (
    <SubmitModal>
      <div className="modal">
        hello
        <button onClick={props.writeReview}>Hide</button>
      </div>
    </SubmitModal>
  ) : null);
  if (!Array.isArray(props.reviews) || props.reviews.length === 0) {
    return (
      < div className="container" >
        <h4>Reviews</h4>
        <p>There are no reviews. Go ahead and add one!</p>
        <button type="button" onClick={props.writeReview}>Submit Review</button>
        {modal}
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
        {modal}
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
        < ReviewTiles reviews={props.reviews} reviewsShown={props.reviewsShown} helpfulButton={props.helpfulButton} helpfulClick={props.helpfulClick} starFilter={props.starFilter} />
        <button type="button" onClick={props.readMore}>Read More</button>
        <button type="button" onClick={props.writeReview}>Submit Review</button>
        {modal}
      </div >
    );
  }
};

export default ReviewList;