import React from 'react';
import axios from 'axios';
import config from '/config.js';

import RelatedProductDetails from './RelatedProductDetails.jsx';

class OneRelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisProductExtra: {},
      thisProductReview: {},
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
        // console.log('thisbook\n', response)
      })
      // .then(console.log(this.state.thisProductExtra));
  }

  getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=37311`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
    .then((response) => {
      this.setState({thisProductRating: response.data})
    })
  }



  render () {
    console.log(this.state.thisProductRating.ratings)
    var picImage = 'https://freesvg.org/img/Image-Not-Found.png';
    if(this.state.thisProductExtra.product_id) {
      if (this.state.thisProductExtra.results[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra.results[0].photos[0].thumbnail_url;
      };
      // console.log(picImage)
      return (
        <li>
          <div>Product category: {this.props.product.category} </div>
          <div>Product name: {this.props.product.name}</div>
          <img src={`${picImage}`} width="100" height="100"/>
          <div>Price (default, needs conditional updating) {this.props.product.default_price}</div>
          <div>Star rating: this.state.thisProductRating.ratings</div>

          <br />
        </li>
      )
    } else {
      return (
        <li>
          <div>Product category: {this.props.product.category} </div>
          <div>Product name: {this.props.product.name}</div>
          <div>Price (default, needs updating) {this.props.product.default_price}</div>
          <div>Star rating: this.state.thisProductRating.ratings.1</div>
          <div>
            no extra deets
          </div>
          <br />
        </li>
      )


    }
  }
}

export default OneRelatedProduct;