import React from 'react';

import Breakdown from './Breakdown.jsx';
import StarRating from './StarRating.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.Average = this.Average.bind(this);
  }

  componentDidMount() {
    this.setState({ reviews: this.props.reviews });
  }
  Average() {
    var reviews = this.props.reviews;
    var ratings = [];
    if (reviews.length === 0) {
      return 'No Reviews';
    }
    for (var i = 0; i < reviews.length; i++) {
      ratings.push(reviews[i].rating);
    }
    var avg = ratings[0];
    for (var i = 1; i < ratings.length; i++) {
      avg += ratings[i];
    }
    // avg = avg / reviews.length;
    avg = (Math.round((avg / reviews.length) * 4) / 4).toFixed(2);
    // console.log('This is the avg: ', avg)
    return avg;
  }

  render() {
    return (
      <div className="reviewOverview">
        <h4>Ratings & Reviews</h4>
        <StarRating avg={this.Average} />
        <Breakdown reviews={this.props.reviews} starFilter={this.props.starFilter} />
        <p>Recommended</p>
        <p>Characteristics</p>
      </div>
    );
  }
}

export default Overview;