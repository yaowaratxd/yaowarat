import React from 'react';
import axios from 'axios';
import config from '/config.js';
// config.js

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBook: placeholder,
    };
    this.getRelated = this.getRelated.bind(this);
  }

  getRelated() {
    axios.get('/products/1', {
      headers: {
        Authorization: `token ${config.TOKEN}`
      }
    })
    .then(results => {console.log(results)})
  };



  render() {
    return (
      <div>related text placeholder</div>
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