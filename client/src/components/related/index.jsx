import React from 'react';
import axios from 'axios';
import config2 from '/config2.js';
import OneRelatedProduct from './OneRelatedProduct.jsx';
import OneOutfit from './OneOutfitProduct.jsx';
import AddCurrentItem from './AddCurrentItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: placeholder,
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
        this.setState({ relatedProducts: this.state.relatedProducts.concat(results.data)});
      });
  }

  addToOutfitList(product) {
    // this.setState({ outfitProducts: this.state.outfitProducts.concat(product) });
    this.setState( (state) => {
      return {outfitProducts: state.outfitProducts.concat(product)}
    }   );
  }

  removeFromOutfitList (product) {
    const stringed = JSON.stringify(product);
    // console.log('removing: ', stringed);
    this.setState ((state) => {
      return {outfitProducts: state.outfitProducts.filter((product) => JSON.stringify(product) !== stringed)};
    });///
  }

  render() {
    // var fullOutfitDetails = [];
    return (
      <div>
        <div className="related products">current product selected: <em>{this.state.currentProduct.name}</em>
          <ul>
            {this.state.relatedProducts.map((oneProduct) => {
              return <OneRelatedProduct product={oneProduct} setOutfit={this.addToOutfitList} />
            })}
          </ul>
        </div>
        <div className="outfit products">customer favorite outfit list
          <div> <AddCurrentItem setOutfit={this.addToOutfitList} currentProduct={this.state.currentProduct}/> </div>
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
