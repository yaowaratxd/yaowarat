/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import config from '/config.js';


class OneRelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisProductExtra: {},
      // thisProductReview: {},
      thisProductRating: {},

    };
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (!this.state.thisProductExtra.product_id) {
  //     this.getStyles();
  //     (console.log('something changed'))
  //   }
  // }

  componentDidMount() {
    this.getStyles();
    this.getReviews();
  }

  getStyles() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.product.id}/styles`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({thisProductExtra: response.data});
      });
  }

  getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${this.props.product.id}`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({ thisProductRating: response.data })
      });
  }

  getRatingScore() {
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

  render() {
    var picImage = 'https://freesvg.org/img/Image-Not-Found.png';
    var productRating = 'Be the first to provide a rating!';
    if (this.state.thisProductRating.ratings) {
      productRating = this.getRatingScore();
    };
    // console.log(this.state.thisProductExtra);
    if (this.state.thisProductExtra.product_id) {
      if (this.state.thisProductExtra.results[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra.results[0].photos[0].thumbnail_url;
      };
    }
    // console.log('picimage: ', picImage)
    return (
      <li class="related">
        <div>Product category: {this.props.product.category} </div>
        <div>Product name: {this.props.product.name}</div>
        <img src={`${picImage}`} width="100" height="100"/>
        <div>Price (default, needs conditional updating) {this.props.product.default_price}</div>
        <div>Star rating: {productRating}</div>

        <br />
      </li>
    );
  }
}

export default OneRelatedProduct;