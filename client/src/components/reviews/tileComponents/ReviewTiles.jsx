import React from 'react';

import Helpfulness from './Helpfulness.jsx';
import Response from './Response.jsx';

const ReviewTiles = (props) => {
  const reviews = props.reviews;
  if (reviews === undefined) {
    return <></>
  } else {
    var tiles = reviews.map((review, index) => {
      if (index === 0) {
        console.log(review);
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
          <p>Rating: {review.rating}</p>
          <p>Date: {date}</p>
          <p className="header" >header: {header}</p>
          <p>Body: {review.body}</p>
          <Helpfulness review={review} helpfulButton={props.helpfulButton} />
          <p>UserName: {review.reviewer_name}</p>
          <Response review={review} />
          <p>Recommended: {review.recommend ? 'I recommend this product' : ''}</p>
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
