/* eslint-disable react/sort-comp */
import React from 'react';
import axios from 'axios';
import config2 from '/config2.js';
import styled from 'styled-components';
import OneRelatedProduct from './OneRelatedProduct.jsx';
import OneOutfit from './OneOutfitProduct.jsx';
import AddCurrentItem from './AddCurrentItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: placeholder,
      relatedProducts: [],
      // additionalProductDetails: [],
      outfitProducts: [], //move up to app most likely
    };
    this.getRelated = this.getRelated.bind(this);
    this.addToOutfitList = this.addToOutfitList.bind(this);
    this.removeFromOutfitList = this.removeFromOutfitList.bind(this);
    this.compareProducts = this.compareProducts.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentProduct.id}/related`, {
      headers: {
        authorization: `${config2.TOKEN}`,
      },
    })
      .then((results) => { this.setState({relatedProductsKey: results.data}); })
      .then(() => {
        for (var i = 0; i < this.state.relatedProductsKey.length; i++) {
          this.getProduct(this.state.relatedProductsKey[i]);
        }
      });
  }

  getProduct(productID) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/`, {
      headers: {
        authorization: `${config2.TOKEN}`,
      },
    })
      .then((results) => {
        this.setState({ relatedProducts: this.state.relatedProducts.concat(results.data) });
      });
  }

  addToOutfitList(product) {
    // this.setState({ outfitProducts: this.state.outfitProducts.concat(product) });
    this.setState((state) => ({ outfitProducts: state.outfitProducts.concat(product) }));
  }

  removeFromOutfitList(product) {
    const stringed = JSON.stringify(product);
    // console.log('removing: ', stringed);
    this.setState((state) => (
      {
        outfitProducts: state.outfitProducts.filter(
          (product) => JSON.stringify(product) !== stringed,
        ),
      }));
  }

  // for handling the modal compare option
  compareProducts(selectedProduct) {
    console.log(selectedProduct);
    this.handleShowModal();
  }

  render() {
    return (
      <div>
        <h3>current product selected: <em>{this.state.currentProduct.name}</em></h3>
        <div>
          <ul className="relatedproducts">
            {this.state.relatedProducts.map((oneProduct) => {
              return <OneRelatedProduct product={oneProduct} originalProduct={this.state.currentProduct}/>
            })}
          </ul>
        </div>
        Your outfit list:
        <div>
          <ul className="outfitproducts">
          <div> <AddCurrentItem setOutfit={this.addToOutfitList} currentProduct={this.state.currentProduct}/> </div>
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
  "id": 37313,
  "campus": "hr-rfe",
  "name": "Morning Joggers",
  "slogan": "Make yourself a morning person",
  "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  "category": "Pants",
  "default_price": "40.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z"
};
