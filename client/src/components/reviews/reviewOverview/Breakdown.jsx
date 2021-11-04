import React from 'react';

import StarBar from './StarBar.jsx';

const Breakdown = ({ reviews }) => {
  var ratings = [];
  if (reviews.length === 0) {
    console.log('No Reviews');
  } else {
    for (var i = 0; i < reviews.length; i++) {
      var cReview = reviews[i];
      ratings.push(cReview.rating);
    }

    var starCount = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0, };
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
      <p className="underline">5 Star</p> <StarBar reviews={reviews} /> <p>{starCount['5']}</p>
      <p className="underline">4 Star</p> <StarBar reviews={reviews} /> <p>{starCount['4']}</p>
      <p className="underline">3 Star</p> <StarBar reviews={reviews} /> <p>{starCount['3']}</p>
      <p className="underline">2 Star</p> <StarBar reviews={reviews} /> <p>{starCount['2']}</p>
      <p className="underline">1 Star</p> <StarBar reviews={reviews} /> <p>{starCount['1']}</p>
    </div>

  );
};

export default Breakdown;