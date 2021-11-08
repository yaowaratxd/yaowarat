import React from 'react';
import axios from 'axios';

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
    const renderPrice = function (array, object) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].sale_price) {
          return <div><s>{array[i].original_price}</s> Sale! <em id="saleprice">{array[i].sale_price}</em> </div>
        }
      }
      return <div>{object.default_price}</div>
    }
    
    let picImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/X-circle.svg/1024px-X-circle.svg.png';
    let productRating = 'Be the first to provide a rating!';
    if (this.state.thisProductRating.ratings) {
      productRating = this.getRatingScore();
    }

    if (this.state.thisProductExtra[0]) {
      if (this.state.thisProductExtra[0].photos[0].thumbnail_url) {
        picImage = this.state.thisProductExtra[0].photos[0].thumbnail_url;
      }
    }

    return (
      <div className="oneoutfit">
        <img src={`${picImage}`} height="250px" width="200px"/> <br/>
        <button onClick={ () => {this.props.removeOutfit(this.props.product)} } type="button" id="outfitbutton"> {String.fromCodePoint( 0x2715)} </button>
        <div>Product category: {this.props.product.category} </div>
        <div>Product name: {this.props.product.name}</div>
        <div>Price: {renderPrice(this.state.thisProductExtra, this.props.product.default_price)}</div>
        <div>Star rating: {productRating}</div>

        <br />
      </div>
    );
  }
}

export default OneOutfit;