/* eslint-disable react/sort-comp */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OneRelatedProduct from './OneRelatedProduct.jsx';
import OneOutfit from './OneOutfitProduct.jsx';
import AddCurrentItem from './AddCurrentItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: placeholder,// convert to a prop
      relatedProducts: [],
      outfitProducts: [], //move up to app most likely
      left: 0,
      right: 2,
      };
    this.getRelated = this.getRelated.bind(this);
    this.addToOutfitList = this.addToOutfitList.bind(this);
    this.removeFromOutfitList = this.removeFromOutfitList.bind(this);
    this.compareProducts = this.compareProducts.bind(this);
    this.navRef = React.createRef();
  }

  componentDidMount() {
    this.getRelated();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.product !== this.props.product) {
  //     console.log('should update')
  //     this.getStyles();
  //     this.getReviews();
  //   }
  // }

  getRelated() {
    axios.get(`/products/${this.props.currentProduct.id}/related`)
      .then((results) => { this.setState({relatedProductsKey: results.data}); })
      .then(() => {
        for (var i = 0; i < this.state.relatedProductsKey.length; i++) {
          this.getProduct(this.state.relatedProductsKey[i]);
        }
      })
      .catch(err => console.log(err));
  }

  getProduct(productID) {
    axios.get(`/products/${productID}/`)
      .then((results) => {
        this.setState({ relatedProducts: this.state.relatedProducts.concat(results.data) });
      })
      .catch(err => console.log(err));
  }

  addToOutfitList(product) {
    for (var i = 0; i < this.state.outfitProducts.length; i++) {
      console.log('this product id:', product.id, 'is already on outfit list')
      if (this.state.outfitProducts[i].id === product.id) {
        return;
        }
      }
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

  handleNav = (direction) => {
    // console.log(this.navRef.current.scrollLeft)
    if (direction === 'left') {
      this.setState((state) => (
        {
        left: state.left - 1,
        right : state.right - 1,
      }))
      // this.navRef ? (this.navRef.current.scrollLeft -= 200) : null;
    } else {
    //   // this.navRef ? (this.navRef.current.scrollLeft += 200) : null;
      this.setState( state => ({
        left : state.left + 1,
        right : state.right + 1,
    }))
    }
  }

  render() {
    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
    };
    let relatedSlice = this.state.relatedProducts.slice(this.state.left, this.state.right)
    // console.log(relatedSlice)
    const leftButton = (this.state.left === 0) ? null : <button id="scrollarrow" onClick={() => this.handleNav('left')}>{String.fromCodePoint(129152, )}</button>
    const rightButton = (this.state.right === this.state.relatedProducts.length) ? null : <button id="scrollarrow" onClick={() => this.handleNav('right')}>{String.fromCodePoint( 129154)}</button>
    return (
      <div>
        <h3>current product selected: <em>{this.props.currentProduct.name}</em> </h3>
        <div>
          <ul className="relatedproducts">
            {leftButton}
            {relatedSlice.map((oneProduct) => {
              return <OneRelatedProduct setCurrentProduct={this.props.setCurrentProduct} product={oneProduct} originalProduct={this.props.currentProduct} ref={this.navRef}/>
            })}
            {rightButton}
          </ul>
        </div>
        Your outfit list:
        <div>
          <ul className="outfitproducts">
          <div> <AddCurrentItem setOutfit={this.addToOutfitList} currentProduct={this.props.currentProduct}/> </div>
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
