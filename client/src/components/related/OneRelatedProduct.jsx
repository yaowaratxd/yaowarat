/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import config2 from '/config2.js';
import Comparing from './CompareModal.jsx'
import Stars from '../StarValue.jsx';


class OneRelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisProductExtra: {},
      thisProductRating: {},
      showModal: false,
      mainProductRating: {}, // could be done at main index level and passed down along with item
    };
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.compareProducts = this.compareProducts.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
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

  // getMainProductReviews() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${this.props.originalProduct.id}`, {
  //     headers: {
  //       authorization: `${config2.TOKEN}`,
  //     },
  //   })
  //     .then((response) => {
  //       this.setState({ mainProductRating: response.data });
  //     });
  // }

  handleShowModal() {
    this.setState({ showModal: true });
  }

  handleHideModal() {
    this.setState({ showModal: false });
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

  compareProducts(selectedProduct) {
    console.log(selectedProduct);
    this.handleShowModal();
  }

  render() {
    const modal = (this.state.showModal ? (
      <Comparing>
        <div className="modal" id="modal2">
          <div>
            <table>
              <tbody>
                <tr>
                  <th scope="col">Page Product</th>
                  <th scope="col">Features</th>
                  <th scope="col">Selected Comparison</th>
                </tr>
                <tr>
                  <td>This should come from parent</td>
                  <td>Star Rating</td>
                  <td><Stars rating={this.getRatingScore()} /></td>
                </tr>
                <tr>
                  <td>{this.props.originalProduct.category}</td>
                  <td>Product Category</td>
                  <td>{this.props.product.category}</td>
                </tr>
                <tr>
                  <td>{this.props.originalProduct.name}</td>
                  <td>Product Title</td>
                  <td>{this.props.product.name}</td>
                </tr>
                <tr>
                  <td>{this.props.originalProduct.default_price}</td>
                  <td>Price</td>
                  <td>{this.props.product.default_price}</td>
                </tr>
                <tr>
                  <td>{this.props.originalProduct.description}</td>
                  <td>Product Overview</td>
                  <td>{this.props.product.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => this.setState({ showModal: false})}>Hide comparison</button>
       </div>
      </Comparing>
    ) : null);

    var picImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/X-circle.svg/1024px-X-circle.svg.png';
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
      <div className="onerelated">
        <img src={`${picImage}`} height="250px" width="200px" alt="product" />
        <br/>
        <button onClick={this.compareProducts} className="fa fa-star" type="button" id="comparebutton"> </button>
        {modal}
        <div>
          Product category:
          {this.props.product.category} <br/>
        </div>
        <div>
          Product name:
          {this.props.product.name} <br/>
        </div>
        <div>
          Price (default):
          {this.props.product.default_price}<br/>
        </div>
        <div>
          Star rating:
          {productRating}
        </div>
        <div>{this.props.comparison}</div>

        <br />
        <Stars rating={productRating} />
      </div>
    );
  }
}

export default OneRelatedProduct;
