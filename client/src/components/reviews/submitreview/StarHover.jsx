import React from 'react';

const StarHover = (props) => {
  var value = props.rating;
  const fullStar = '/graphics/fullstar.png';
  const emptyStar = '/graphics/emptystar.png';

  var starArray = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];

  var updateStar = (event) => {
    console.log('A star was hovered');
    // debugger;
    event.target = <img src={fullStar} height="20px" width="20px" alt="rating stars" />
  }

  return (
    <div className="submitstars" >
      {[...Array(5)].map((star, index) => {
        return (
          <label>
            <input type="radio" name="rating" />
            <img src={emptyStar} height="20px" width="20px" alt="rating stars" key={index} onMouseOver={updateStar} />
          </label>
        );
      })}
      {/* {starArray.map((star, index) => <img src={star} height="20px" width="20px" alt="rating stars" key={index} onMouseOver={updateStar} />)} */}
    </div>
  );
};

export default StarHover;