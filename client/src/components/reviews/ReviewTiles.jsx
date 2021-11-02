import React from 'react';

const ReviewTiles = (props) => {
  if (props.reviews === undefined) {
    return <></>
  } else {
    return props.reviews.map((review, index) => {
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
  }

};
// new Date("2019-01-06T23:29:35.000Z")
// .toLocaleDateString({},
//   {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
//   );


export default ReviewTiles;