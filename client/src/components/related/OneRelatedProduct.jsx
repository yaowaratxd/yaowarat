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

  getStyles() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.product.id}/styles`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((response) => {
        this.setState({thisBookExtra: response.data});
        // console.log('thisbook\n', response)
      });
  }


  render () {
    return (
      <li>
        <div>Product category: {this.props.product.category} </div>
        <div>Product name: {this.props.product.name}</div>
        <div>Price (default, needs updating) {this.props.product.default_price}</div>
        <div>Star rating: where does rating info come from?</div>
        <div><RelatedProductDetails extra={this.state.thisBookExtra} /></div>
        <br />
      </li>
    )
  }
}

export default OneRelatedProduct;