import React from 'react';

const Breakdown = ({ reviews }) => {
  var ratings = [];
  if (reviews.length === 0) {
    console.log('No Reviews');
  } else {
    for (var i = 0; i < reviews.length; i++) {
      var cReview = reviews[i];
      ratings.push(cReview.rating);
    }

  }


  return (
    <div className="breakdown">
      <p>Breakdown</p>
      <p className="underline">5 Star</p>
      <p className="underline">4 Star</p>
      <p className="underline">3 Star</p>
      <p className="underline">2 Star</p>
      <p className="underline">1 Star</p>
    </div>

  );
};

export default Breakdown;