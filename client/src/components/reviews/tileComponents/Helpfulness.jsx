import React from 'react';

const Helpfulness = (props) => {
  console.log('This is the current review', props.review);
  if (props.helpfulClick === true) {
    return (
      <p>Thank you for rating! Yes ({props.review.helpfulness}) No</p>
    );
  }
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
