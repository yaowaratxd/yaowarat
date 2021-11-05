import React from 'react';

import StarBar from './StarBar.jsx';

const Breakdown = ({ reviews, starFilter }) => {
  var ratings = [];
  var starCount = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0, };
  if (reviews.length === 0) {
    console.log('No Reviews');
  } else {
    for (var i = 0; i < reviews.length; i++) {
      var cReview = reviews[i];
      ratings.push(cReview.rating);
    }

    for (var j = 0; j < ratings.length; j++) {
      if (ratings[j] === 5) {
        starCount['5']++;
      } else if (ratings[j] === 4) {
        starCount['4']++;
      } else if (ratings[j] === 3) {
        starCount['3']++;
      } else if (ratings[j] === 2) {
        starCount['2']++;
      } else if (ratings[j] === 1) {
        starCount['1']++;
      }
    }
  }


  return (
    <div className="breakdown">
      <p>Breakdown</p>

      <p className="underline" onClick={starFilter}>5 Star</p>
      <StarBar reviews={reviews} starCount={starCount['5']} />

      <p className="underline" onClick={starFilter}>4 Star</p>
      <StarBar reviews={reviews} starCount={starCount['4']} />

      <p className="underline" onClick={starFilter}>3 Star</p>
      <StarBar reviews={reviews} starCount={starCount['3']} />

      <p className="underline" onClick={starFilter}>2 Star</p>
      <StarBar reviews={reviews} starCount={starCount['2']} />

      <p className="underline" onClick={starFilter}>1 Star </p>
      <StarBar reviews={reviews} starCount={starCount['1']} />

    </div>

  );
};

export default Breakdown;