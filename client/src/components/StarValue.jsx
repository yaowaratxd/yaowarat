import React from 'react';

const Stars = (props) => {
  const value = props.rating;

  const fullStar = '/graphics/fullstar.png';
  const threeQuarterStar = '/graphics/threequarterstar.png';
  const halfStar = '/graphics/halfstar.png';
  const quarterStar = '/graphics/onequarterstar.png';
  const emptyStar = '/graphics/emptystar.png';

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
      {starArray.map((star, i) => <img key={i} src={star} height="20px" width="20px" alt="rating stars" />)}
    </div>
  );
};

export default Stars;
