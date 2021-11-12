import React from 'react';
import StartValue from '../StartValue.jsx';

const StarRating = (props) => {
  var rating = props.avg();
  return (
    <div className="starRating">
      <h3>{rating}  </h3>
      {/* Stars */}
      <StartValue rating={rating} />
    </div>
  );
}

export default StarRating;