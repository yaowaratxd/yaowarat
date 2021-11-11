import React, { useState, useEffect } from 'react';

import QuantityDropDown from './QuantityDropDown.jsx';
import AddToCart from './AddToCart.jsx';
import styled from 'styled-components';

import colorScheme from '../../colorScheme.js';
import ClickCounter from '../ClickCounter.jsx';
/*
position: relative;
left: 25vw;
top: 10vh;

border-radius: 50%;
border: 1px solid black;
border-radius: 50%;
border: 3px solid rebeccapurple;
*/

// position: relative;
const Container = styled.div`
display: flex;
flex-wrap: true;
`;

const StyleIconCotainer = styled.div`
width: 25vw;
display: flex;
flex-wrap: wrap;
`;

const StyleTile = styled.div`
width: 20%;
margin: .3vw;
`;
const SelectedStyleTile = styled.div`
width: 20%;
margin: .3vw;
`;

const SelectEle = styled.select`
width: 100px;
height: 45px;
margin-right: 20px;
margin-top: 20px;
`;

const CartContainer = styled.div`
position: relative;
left: -5vw;
`;

const Styles = ({ styles, setSelectedStyle, selectedImage }) => {
  const [selected, setSelected] = useState('');
  const [quantity, setQuantity] = useState(7);
  const [name, setName] = useState('');
  const [hasSize, setHasSize] = useState(false);

  const setQ = () => {
    styles.filter(style => {
      for (let i = 0; i < style.photos.length; ++i) {
        if (style.photos[i].url === selectedImage.url) {
          let useThis;
          for (let key in style.skus) {
            if (!selected) {
              useThis = 'XS';
            } else {
              useThis = selected;
            }
            if (style.skus[key].size === useThis) {
              setQuantity(style.skus[key].quantity);
              getName();
            }
          }
        }
      }
    })
  };
  useEffect(() => {
    setQ();
    getName();
  }, [selected, quantity, name, selectedImage]);

  const createQuantitySelector = () => {
    let results = [];
    for (let i = 1; i <= q; ++i) {
      results.push(<option key={i} value={i}> { i } </option>);
    }
    return results;
  };

  const getName = () => {
    styles.filter((style) => {
      if (style.id === selectedImage.id) {
        setName(style.name)
      }
    })
  };


  const handleChange = (event) => {
    setSelected(event.target.value);
    setQ();
    getName();
    setHasSize(true);
  };
  const handleChangeImage = (url, id) => {
    // document.getElementById('selectedTile').scrollIntoView();
    setSelectedStyle({url, id});
    getName();
  };
  return <div>
    <ClickCounter event='Styles'>
    <Container>
  <h6><b>STYLE > </b>{ name }</h6>
    </Container>
    <StyleIconCotainer>
    { styles.map((image) =>  {
      for (let i = 0; i < image.photos.length; ++i) {
        if (image.photos[i].thumbnail_url === selectedImage.url || image.photos[i].url === selectedImage.url) {
          return <SelectedStyleTile key={image.id}>  <img onClick={() => handleChangeImage(image.image, image.id)} key={image.id} src={image.image} style={{height: '55px', width: '55px', border: `3px solid ${colorScheme.darkGrey}`, borderRadius: '50%'}}/> </SelectedStyleTile>
        }
      }
        return <StyleTile key={image.id}>  <img onClick={() => handleChangeImage(image.image, image.id)} key={image.id} src={image.image} style={{height: '50px', width: '50px', borderRadius: '50%'}}/> </StyleTile>
    }
    )}
    </StyleIconCotainer>
    <Container>
    <SelectEle id='size' onChange={(event) => handleChange(event)}>
    <option key={'--'} value={''}> Select Size </option>
    { styles.map((image) =>  {
      let placeholder = [];
      for (let i = 0; i < image.photos.length; ++i) {
        if (image.photos[i].url === selectedImage.url) {

          for (let key in image.skus) {
            placeholder.push(<option key={key} value={image.skus[key].size}>{ image.skus[key].size }</option>);
          }
        }
      }
      return placeholder;
    }
    )}
    </SelectEle>
    {/* <CartContainer> */}
      <AddToCart hasSize={hasSize} quantity={quantity} />
    {/* </CartContainer> */}
  </Container>
  </ClickCounter>
  </div>
};

export default Styles;
