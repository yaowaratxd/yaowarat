import React from 'react';

import ReviewTiles from './tileComponents/ReviewTiles.jsx';
import SubmitModal from './submitreview/SubmitModal.jsx';
import StarRating from './submitreview/StarRating.jsx';
import CharSubmit from './submitreview/CharSubmit.jsx';

const ReviewList = (props) => {
  const modal = (props.showModal ? (
    <SubmitModal>
      <div className="modal"  >
        <table>
          <tbody>
            <tr>
              <th scope="col">Write Your Review</th>
            </tr>
            <tr>
              <td>
                <form>
                  <label>How was your product?</label>
                  <StarRating rating={4} />

                  <br />

                  <p>Would you recommend this product?</p>
                  <input type="radio" name="recommend" value="yes"></input>
                  <label>Yes</label>
                  <input type="radio" name="recommend" value="no"></input>
                  <label> No</label>

                  <br />
                  <br />

                  <CharSubmit meta={props.meta} />

                  <br />
                  <br />

                  <label>Summary</label>
                  <br />
                  <input type="text" placeholder="Ex: Best purchase ever!"></input>

                  <br />
                  <br />

                  <label>Why did you like or dislike this product?</label>
                  <br />
                  <input type="text" placeholder="Ex: Super Comfy"></input>

                  <br />
                  <br />

                  <label>Display Name</label>
                  <br />
                  <input type="text" placeholder="Ex: Jackson11"></input>
                  <p>For privacy reasons, do not use your full name or email address</p>

                  <br />

                  <label>Email</label>
                  <br />
                  <input type="text" placeholder="Ex: Jackson11@email.com"></input>
                  <p>For authentication reasons, you will not be emailed</p>
                  <button onClick={props.writeReview}>Cancel</button>
                  <button type="submit" value="Submit" onClick={props.submitReview} >Submit</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>

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