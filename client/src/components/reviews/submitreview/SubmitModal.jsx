import React from 'react';
import ReactDOM from 'react-dom';

const SubmitModal = (props) => {
  return !props.children
    ? null
    : ReactDOM.createPortal(
      props.children, document.getElementById('review')
    );
};

export default SubmitModal;