import React from 'react';

const ReviewTiles = (props) => {
  if (props.reviews === undefined) {
    return <></>
  } else {
    var tiles = props.reviews.map((review, index) => {
      var date = new Date(`${review.date.slice(0, 10)}`).toLocaleDateString({}, { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' })

      return (
        <div className="tile" key={index}>
          <p>Rating: {review.rating}</p>
          <p>Date: {date}</p>
          <p>header: {review.summary}</p>
          <p>Body: {review.body}</p>
          <p>Helpful?: {review.helpfulness}</p>
          <p>UserName: {review.reviewer_name}</p>
          <p>Response: {review.response}</p>
          <p>Recommended: {review.recommended}</p>
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
};


export default ReviewTiles;