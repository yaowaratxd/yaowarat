import React from 'react';

const Recommended = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <></>
    );
  } else {
    var reviewNum = reviews.length;
    var recommendations = 0;
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].recommend === true) {
        recommendations++;
      }
    }
    var percent = 100 * (recommendations / reviewNum);
    return (
      <p>{percent}% of reviews recommended this product</p>
    );
  }
};

export default Recommended;