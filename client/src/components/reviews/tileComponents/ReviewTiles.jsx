import React from 'react';

import Helpfulness from './Helpfulness.jsx';
import Response from './Response.jsx';
import StarValue from '../StartValue.jsx';

const ReviewTiles = (props) => {
  var filtered = (reviews, filter) => {
    var newReviewList = [];
    if (!filter['1'] && !filter['2'] && !filter['3'] && !filter['4'] && !filter['5']) {
      return reviews;
    }
    for (var keys in filter) {
      if (filter[keys]) {
        for (var i = 0; i < reviews.length; i++) {
          var cKey = keys;
          var cReview = reviews[i];
          var cRating = cReview.rating;
          if (`${cRating}` === `${cKey}`) {
            newReviewList.push(cReview);
          }
        }
      }
    }
    return newReviewList;
  };
  var reviews = filtered(props.reviews, props.starFilter);
  // console.log('These are the current reviews: ', reviews);

  if (reviews === undefined) {
    return <></>
  } else {
    var tiles = reviews.map((review, index) => {
      if (index === 0) {
        // console.log(review);
      }

      var date = new Date(`${review.date.slice(0, 10)}`).toLocaleDateString({}, { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' })
      var header = review.summary;
      var body = review.body;


      if (header.length > 60) {
        header = header.substring(0, 60);
        header += '...';
      }

      /*
      if (body.length < 50) {
        console.log('Review was to small: ', body.length);
        return (<></>);

      } else if (body.length > 1000) {
        console.log('Review was to large: ', body.length);
        return (<></>);
      }
      */

      return (
        <div className="tile" key={index}>
          <StarValue rating={review.rating} />
          <p>Date: {date}</p>
          <p className="header" >Header: {header}</p>
          <p>Body: {review.body}</p>
          <Helpfulness review={review} helpfulButton={props.helpfulButton} helpfulClick={props.helpfulClick} />
          <p>UserName: {review.reviewer_name}</p>
          <Response review={review} />
          <p>Recommended: {review.recommend ? 'I recommend this product ' + `${String.fromCodePoint(0x2713)}` : ''}</p>
          {/* <img src={review.photos[0]} alt="Image" width="500" height="600"></img> */}
        </div>
      );
    });

    if (props.reviewsShown >= props.reviews.length) {
      return tiles;
    } else {
      var render = [];
      for (var i = 0; i < props.reviewsShown; i++) {
        render.push(tiles[i]);
      }
      return render;
    }

  }
}

export default ReviewTiles;

// {String.fromCodePoint(0x1F5F8)}