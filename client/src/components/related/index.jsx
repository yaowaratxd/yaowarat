import React from 'react';
import axios from 'axios';
import config from '/config.js';
import OneRelatedProduct from './OneRelatedProduct.jsx';
import OneOutfit from './OneOutfitProduct.jsx';


class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBook: placeholder,
      relatedProducts: [],
      additionalProductDetails: [],
      outfitProducts: [], //move up to app most likely
    };
    this.getRelated = this.getRelated.bind(this);
    this.addToOutfitList = this.addToOutfitList.bind(this);
    this.removeFromOutfitList = this.removeFromOutfitList.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentBook.id}/related`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((results) => { this.setState({relatedProductsKey: results.data}); })
      .then(() => {
        for (var i = 0; i < this.state.relatedProductsKey.length; i++) {
          this.getBook(this.state.relatedProductsKey[i]);
        }
      });
  }

  getBook(productID) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/`, {
      headers: {
        authorization: `${config.TOKEN}`,
      },
    })
      .then((results) => {
        this.setState({ relatedProducts: this.state.relatedProducts.concat(results.data)});
      });
  }

  addToOutfitList(product) {
    this.setState({ outfitProducts: this.state.outfitProducts.concat(product) });
  }

  removeFromOutfitList (product) {
    console.log(product);
  }

  render() {
    // var fullOutfitDetails = [];
    return (
      <div>
        <div className="related products">current product selected: <em>{this.state.currentBook.name}</em>
          <ul>
            {this.state.relatedProducts.map((oneProduct) => {
              return <OneRelatedProduct product={oneProduct} setOutfit={this.addToOutfitList} />
            })}
          </ul>
        </div>
        <div className="outfit products">customer favorite outfit list
          <ul>
            {this.state.outfitProducts.map((oneProduct) => {
                return <OneOutfit product={oneProduct} removeOutfit={this.removeFromOutfitList} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}



export default Related;




const placeholder = {
  'id': 37311,
  'campus': 'hr-rfe',
  'name': 'Camo Onesie',
  'slogan': 'Blend in to your crowd',
  'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  'category': 'Jackets',
  'default_price': '140.00',
  'created_at': '2021-08-13T14:37:33.145Z',
  'updated_at': '2021-08-13T14:37:33.145Z'
};
