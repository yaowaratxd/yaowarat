import React from 'react';

import ReviewList from './ReviewList.jsx';
import ReviewOverview from './ReviewOverview.jsx';

class Review extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.readMore = this.readMore.bind(this);
  }

  readMore(event) {
    console.log('Read More was clicked!');
  }

  render() {
    return (
      <div className="reviewContainer">
        <ReviewOverview className="reviewOverview" />
        <ReviewList className="reviewList" readMore={this.readMore} />
      </div>
    );
  }

}

export default Review;