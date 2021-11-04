import React from 'react';

const Helpfulness = (props) => {
  console.log(props);
  return (
    <p>
      Was this review helpful?
      <button className="helpfulbutton" >
        Yes
      </button>
      ({props.review.helpfulness})
    </p>
  );
};

export default Helpfulness;
