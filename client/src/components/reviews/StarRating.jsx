import React from 'react';

const StarRating = (props) => {
  return (
    <>
      <h3>{props.avg()}</h3>
      <span class="material-icons">
        star
      </span>
      <span class="material-icons">
        star_border
      </span>
    </>
  );
}

export default StarRating;