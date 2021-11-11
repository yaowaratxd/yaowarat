import React from 'react';
import StarValue from '../StartValue.jsx';
import StarHover from './StarHover.jsx';

const StarRating = (props) => {
  return (
    <div>
      {/* <StarValue rating={3} /> */}
      <StarHover rating={3} />
    </div>
  );
};

export default StarRating;