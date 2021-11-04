import React from 'react';

const StarRating = (props) => {
  return (
    <>
      <h3>{props.avg()}</h3>
      <span className="material-icons">
        star
      </span>
      <span className="material-icons">
        star_border
      </span>
    </>
  );
}

export default StarRating;