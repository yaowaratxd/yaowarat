import React from 'react';
import axios from 'axios';
import config2 from '/github.config.js';

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
        authorization: `${config2.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({ thisProductExtra: response.data });
      });
  }

  getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${this.props.product.id}`, {
      headers: {
        authorization: `${config2.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({ thisProductRating: response.data });
      });
  }





  getRatingScore() {
    let reviewTotalScore = 0;
    let totalReviews = 0;
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
    let picImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/X-circle.svg/1024px-X-circle.svg.png';
    let productRating = 'Be the first to provide a rating!';
    if (this.state.thisProductRating.ratings) {
      productRating = this.getRatingScore();
    }

    if (this.state.thisProductExtra.product_id) {
      if (this.state.thisProductExtra.results[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra.results[0].photos[0].thumbnail_url;
      }
    }

    return (
      <div className="oneoutfit">
        <img src={`${picImage}`} height="250px" width="200px"/> <br/>
        <button onClick={ () => {this.props.removeOutfit(this.props.product)} } type="button" id="outfitbutton"> Remove </button>
        <div>Product category: {this.props.product.category} </div>
        <div>Product name: {this.props.product.name}</div>
        <div>Price: (default,updating) {this.props.product.default_price}</div>
        <div>Star rating: {productRating}</div>

        <br />
      </div>
    );
  }
}

export default OneOutfit;