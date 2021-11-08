import React, { useState } from 'react';

import styled from 'styled-components';
import QuantityDropDown from './QuantityDropDown.jsx';

const AddButton = styled.button`
width: 100px;
height: 45px;
background-color: Transparent;
margin-right: 40px;
margin-top: 20px;
`;
const Container = styled.div`
position: relative;
display: flex;
flex-wrap: true;
`;

const AddToCart = ({ quantity, hasSize }) => {
  const [addCart, setAddCart] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [display, setDisplay] = useState('+');


  const handleFav = () => {
    if (display === '+') {
      setDisplay('<3');
    } else {
      setDisplay('+');
    }
  };

  const handleAddToCart = () => {
    if (!hasSize) {
      alert('You must pick a size!');
      return;
    }
    setAddCart(!addCart)
  };
 return <Container>
   <QuantityDropDown setInStock={setInStock} hasSize={hasSize} quantity={quantity} />
  { inStock ? <AddButton onClick={() => handleAddToCart()}>{ addCart ? 'Remove From Cart' : 'Add To Cart'}</AddButton> : '' }
  <AddButton onClick={handleFav}>{ display }</AddButton>
 </Container>
};

export default AddToCart;