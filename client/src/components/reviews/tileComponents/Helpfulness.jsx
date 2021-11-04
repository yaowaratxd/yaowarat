import React from 'react';

const Helpfulness = (props) => {
  return (
    <p>
      Was this review helpful?
      <button className="helpfulbutton" onClick={props.helpfulButton} >
        {" "}Yes{" "}
      </button>
      ({props.review.helpfulness})
      <button className="helpfulbutton" onClick={props.helpfulButton} >
        {" "}No{" "}
      </button>
    </p>
  );
};

// Note: When either button is clicked both should be disabled and the results should be saved

export default Helpfulness;
