import React from 'react';

import Breakdown from './Breakdown.jsx';

const ReviewOverview = (props) => {
  return (
    <div className="reviewOverview">
      <h4>Ratings & Reviews</h4>
      <p>Rating Average: Fill</p>
      <Breakdown />
      <p>Recommended</p>
      <p>Characteristics</p>
    </div>
  );
};

export default ReviewOverview;