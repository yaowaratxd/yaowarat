import React from 'react';

class Review extends React.Component {
  state = {
    fill: ''
  };
  readMore = readMore.bind(this);

  readMore(event) {
    console.log('Read More was clicked!');
  }

  render() {
    return (
      <div className="container">
        <div className="tile">Review 1</div>
        <div className="tile">Review 2</div>
        <div className="tile">Review 3</div>
        <div className="tile">Review 4</div>
        <button type="button" onClick={readMore()}>Read More</button>
      </div>
    );
  }

}