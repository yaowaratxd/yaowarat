import React from 'react';
import ReactDOM from 'react-dom';

const related = document.getElementById('related');

class CompareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.children)
    // related.appendChild(document.createElement('div'));
  }

  // componentWillUnmount() {
  //   related.removeChild(document.getElementById('modal2'));
  // }

  render() {
    return !this.props.children
    ? null
    : ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      document.getElementById('related'),
    );
  }
}

export default CompareModal;
