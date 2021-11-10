import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import Overview from './reviewOverview/Overview.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      reviews: {},
      reviewsShown: 2,
      sort: 'relevant',
      meta: {},
      helpfulClick: false
    };
    this.readMore = this.readMore.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.sort = this.sort.bind(this);
    this.helpfulButton = this.helpfulButton.bind(this);
    this.starFilter = this.starFilter.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.state.sort}/${this.props.product.id}`)
      .then((reviews) => {
        this.setState({ reviews: reviews.data.results });
        this.getMeta();
      })
      .catch((err) => {
        console.log('There was an Error with reviews');
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product !== this.props.product) {
      axios.get(`/api/reviews/${this.state.sort}/${this.props.product.id}`)
        .then((reviews) => {
          this.setState({ reviews: reviews.data.results });
          this.getMeta();
        })
        .catch((err) => {
          console.log('There was an Error with reviews');
          console.log(err);
        });
    }
  }

  getMeta() {
    axios.get(`/reviews/meta/${this.props.product.id}`)
      .then((meta) => {
        // console.log('This it the meta data: ', meta.data);
        this.setState({ meta: meta.data });
      })
      .catch((err) => {
        console.log('There was an Error with meta');
        console.log(err);
      })
  };
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
    this.setState({ sort: event.target.value }, () => {
      axios.get(`/api/reviews/${this.state.sort}/${this.props.product.id}`)
        .then((response) => {
          this.setState({ reviews: response.data.results });
        })
        .catch((err) => {
          console.log('There was an Error');
          console.log(err);
        })
    });
  }

  helpfulButton(event, id) {
    if (event.target.innerText === 'Yes') {
      axios.put(`/reviews/${id}/helpful`)
        .then((response) => {
          axios.get(`/api/reviews/${this.state.sort}/${this.props.product.id}`)
            .then((reviews) => {
              this.setState({ reviews: reviews.data.results });
              this.getMeta();
            })
            .catch((err) => {
              console.log('There was an Error with reviews');
              console.log(err);
            });
        })
        .catch((err) => {
          console.log('There was an Error: ', err);
        });
      this.setState({ helpfulClick: true });
    } else {
      console.log('No was clicked!');
      this.setState({ helpfulClick: true });
    }
  }

  starFilter() {
    console.log('A star was clicked!');
  }

  render() {
    return (
      <div className="reviewContainer">
        <Overview className="reviewOverview" reviews={this.state.reviews} starFilter={this.starFilter} meta={this.state.meta} />
        <ReviewList className="reviewList" readMore={this.readMore} writeReview={this.writeReview} reviews={this.state.reviews} reviewsShown={this.state.reviewsShown} sort={this.sort} sortType={this.state.sort} helpfulButton={this.helpfulButton} helpfulClick={this.state.helpfulClick} />
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