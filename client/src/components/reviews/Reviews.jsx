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
      reviewsShown: 2,
      sort: 'relevant'
    };
    this.readMore = this.readMore.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.state.sort}/${this.state.product.id}`)
      .then((response) => {
        this.setState({ reviews: response.data.results });
      })
      .catch((err) => {
        console.log('There was an Error');
        console.log(err);
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

  sort(event) {
    // console.log('Sort was Changed!');
    this.setState({ sort: event.target.value }, () => {
      axios.get(`/api/reviews/${this.state.sort}/${this.state.product.id}`)
        .then((response) => {
          this.setState({ reviews: response.data.results });
          for (var i = 0; i < response.data.results.length; i++) {

          }
          // console.log(`The reviews have been sorted by ${this.state.sort}`);
        })
        .catch((err) => {
          console.log('There was an Error');
          console.log(err);
        })
    });

  }

  render() {
    return (
      <div className="reviewContainer">
        <ReviewOverview className="reviewOverview" />
        <ReviewList className="reviewList" readMore={this.readMore} writeReview={this.writeReview} reviews={this.state.reviews} reviewsShown={this.state.reviewsShown} sort={this.sort} sortType={this.state.sort} />
      </div>
    );
  }

}

export default Review;



/**
 * Star average function
 * getRatingScore() {
    var reviewTotalScore = 0;
    var totalReviews = 0;
    if (JSON.stringify(this.state.thisProductRating.ratings) !== '{}') {
      for (var key in this.state.thisProductRating.ratings) {
        reviewTotalScore += (parseInt([key]) * parseInt(this.state.thisProductRating.ratings[key]));
        totalReviews += parseInt(this.state.thisProductRating.ratings[key])
      }
      return (Math.round((reviewTotalScore / totalReviews) * 4) / 4).toFixed(2);
    }
    return 'Be the first to rate this product!';
  }
 */