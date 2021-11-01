import React from 'react';
import axios from 'axios';
import config from '/config.js';

class OneOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisProductExtra: {},
      thisProductRating: {},
      isFavorited: false,

    };
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

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
        this.setState({ thisProductExtra: response.data });
      });
  }

  getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${this.props.product.id}`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({ thisProductRating: response.data });
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
    }

    if (this.state.thisProductExtra.product_id) {
      if (this.state.thisProductExtra.results[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra.results[0].photos[0].thumbnail_url;
      }
    }

    return (
      <li className="related">
        <button onClick={ () =>   {this.props.removeOutfit(this.props.product)}     }> take away </button>
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

export default OneOutfit;