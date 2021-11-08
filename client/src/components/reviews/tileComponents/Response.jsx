import React from 'react';

const Response = ({ review }) => {
  if (review.response) {
    return (
      <p>Response: {review.response}</p>
    );
  } else {
    return (
      <></>
    );
  }
};

export default Response;