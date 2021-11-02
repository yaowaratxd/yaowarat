import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import ReviewOverview from './ReviewOverview.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      reviews: {}
    };
    this.readMore = this.readMore.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
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
    console.log('Read More was clicked!');

  }

  test() {
    console.log(this.state.reviews);
  }

  render() {
    return (
      <div className="reviewContainer">
        <ReviewOverview className="reviewOverview" />
        <ReviewList className="reviewList" readMore={this.readMore} reviews={this.state.reviews} test={this.test()} />
      </div>
    );
  }

}

export default Review;