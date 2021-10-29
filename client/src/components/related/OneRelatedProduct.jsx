import React from 'react';
import axios from 'axios';
import config from '/config.js';

import RelatedProductDetails from './RelatedProductDetails.jsx';

class OneRelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisBookExtra: {}
    };
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (!this.state.thisBookExtra.product_id) {
      this.getStyles();
      (console.log('something changed'))
    }
  }

  getStyles() {
    // console.log('invoked')
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.product.id}/styles`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({thisBookExtra: response.data});
        // console.log('thisbook\n', response)
      })
      // .then(console.log(this.state.thisBookExtra));
  }



  render () {
    var picImage = 'https://freesvg.org/img/Image-Not-Found.png';
    if(this.state.thisBookExtra.product_id) {
      if (this.state.thisBookExtra.results[0].photos[0].thumbnail_url) {
        picImage = this.state.thisBookExtra.results[0].photos[0].thumbnail_url
      };
      console.log(picImage)
      return (
        <li>
          <div>Product category: {this.props.product.category} </div>
          <div>Product name: {this.props.product.name}</div>
          <img src={`${picImage}`} width="100" height="100"/>
          <div>Price (default, needs updating) {this.props.product.default_price}</div>
          <div>Star rating: where does rating info come from?</div>

          <br />
        </li>
      )
    } else {
      return (
        <li>
          <div>Product category: {this.props.product.category} </div>
          <div>Product name: {this.props.product.name}</div>
          <div>Price (default, needs updating) {this.props.product.default_price}</div>
          <div>Star rating: where does rating info come from?</div>
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