import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import ReviewOverview from './ReviewOverview.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      reviews: {},
      reviewsShown: 2
    };
    this.readMore = this.readMore.bind(this);
    this.writeReview = this.writeReview.bind(this);
  }

  componentDidMount() {
    // console.log('Component did mount');
    axios.get(`/api/reviews/${this.state.product.id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ reviews: response.data.results });
      })
      .catch((err) => {
        console.log('There was an Error');
      });
  }
  // 37311

  readMore(event) {
    // console.log('Read More was clicked!');
    var count = this.state.reviewsShown;
    count += 2;
    this.setState({ reviewsShown: count });
  }

  writeReview(event) {
    console.log('Write Review was clicked!');
  }

  render() {
    return (
      <div className="reviewContainer">
        <ReviewOverview className="reviewOverview" />
        <ReviewList className="reviewList" readMore={this.readMore} writeReview={this.writeReview} reviews={this.state.reviews} reviewsShown={this.state.reviewsShown} />
      </div>
    );
  }

}

export default Review;