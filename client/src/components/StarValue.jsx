import React from 'react';

const Stars = (props) => {
  const value = props.rating;

  const fullStar = 'public/graphics/fullstar.png';
  const threeQuarterStar = '/public/graphics/threequarterstar.png';
  const halfStar = '/public/graphics/halfstar.png';
  const quarterStar = '/public/graphics/onequarterstar.png';
  const emptyStar = 'public/graphics/emptystar.png';
  // /home/pjjpb/hackreactor/yaowarat/public/resources/graphics/emptystar.png
  // public/graphics/emptystar.png

  const starArray = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];

  const remainingRating = value - Math.floor(value);

  let fullStars = 0;

  for (var i = 0; i < 5; i++) {
    if (i <= Math.floor(value) - 1) {
      starArray[i] = fullStar;
      fullStars = i;
    }
  }

  if (value - Math.floor(value) !== 0) {
    if (remainingRating === 0.75) {
      starArray[fullStars + 1] = threeQuarterStar;
    }
    if (remainingRating === 0.50) {
      starArray[fullStars + 1] = halfStar;
    }
    if (remainingRating === 0.25) {
      starArray[fullStars + 1] = quarterStar;
    }
  }

  return (
    <div>
      {starArray.map((star) => <img src={star} height="20px" width="20px" alt="rating stars" />)}
    </div>
  );
};

export default Stars;
