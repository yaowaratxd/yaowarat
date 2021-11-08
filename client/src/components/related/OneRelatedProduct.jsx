/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
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

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      console.log('should update')
      this.getStyles();
      this.getReviews();
    }
  }

  getStyles() {
    axios.get(`/api/products/${this.props.product.id}/styles`)
      .then((response) => {
        // console.log(response.data.results)
        this.setState({ thisProductExtra: response.data.results });
      })
      .catch(err => console.log(err));
  }

  getReviews() {
    axios.get(`/reviews/meta/${this.props.product.id}`)
      .then((response) => {
        this.setState({ thisProductRating: response.data });
      })
      .catch(err => console.log(err));
  }

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

    if (this.state.thisProductExtra[0]) {
      if (this.state.thisProductExtra[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra[0].photos[0].thumbnail_url;
      }
    }
    
    const renderPrice = function (array, object) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].sale_price) {
          return <div><s>{array[i].original_price}</s> Sale! <em id="saleprice">{array[i].sale_price}</em> </div>
        }
      }
      return <div>{object.default_price}</div>
    }


//selectedImage.salePrice ? <div> <NewPrice> {product.default_price} </NewPrice> { selectedImage.salePrice } </div> : product.default_price;
    return (
      <div className="onerelated" href="">
        <img src={`${picImage}`} height="250px" width="200px" alt="product" onClick={() => this.props.setCurrentProduct(this.props.product)}/>
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
          Price: {renderPrice(this.state.thisProductExtra, this.props.product)}<br/>
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