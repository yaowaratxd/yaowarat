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
left: 20vw;
top: 10vh;
display: flex;
flex-wrap: true;
`;

const AddToCart = ({ quantity, hasSize }) => {
  const [addCart, setAddCart] = useState(false);
  const [display, setDisplay] = useState('+');

  const handleFav = () => {
    if (display === '+') {
      setDisplay('<3');
    } else {
      setDisplay('+');
    }
  };
 return <Container>
   <QuantityDropDown hasSize={hasSize} quantity={quantity} />
  <AddButton onClick={() => setAddCart(!addCart)}>{ addCart ? 'Remove From Cart' : 'Add To Cart'}</AddButton>
  <AddButton onClick={handleFav}>{ display }</AddButton>
 </Container>
};

export default AddToCart;