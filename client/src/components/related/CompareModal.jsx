import React from 'react';
import ReactDOM from 'react-dom';

// const related = document.getElementById('related');

class CompareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return !this.props.children
    ? null
    : ReactDOM.createPortal(

      this.props.children,

      document.getElementById('related'),
    );
  }
}

export default CompareModal;
