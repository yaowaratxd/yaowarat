import React, { useState } from 'react';

import styled from 'styled-components';
import QuantityDropDown from './QuantityDropDown.jsx';
import ClickCounter from '../ClickCounter.jsx';

const AddButton = styled.button`
width: 190px;
height: 45px;
background-color: Transparent;
margin-right: 40px;
margin-top: 20px;
`;
const FavButton = styled.button`
width: 50px;
height: 45px;
background-color: Transparent;
margin-right: 40px;
margin-top: 20px;
`;
const Container = styled.div`
display: flex;
flex-wrap: true;
flex-direction: column;
`;
const LineBreak = styled.div`
display: flex;
width: 50%;
justify-content: space-around;
`;

const MoveLeft = styled.div`
position: relative;
display: flex;
left: -2.3vw;
`;

const Margins = styled.div`
margin-left: 35px;
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
   <LineBreak>
    <Margins>
      <QuantityDropDown setInStock={setInStock} hasSize={hasSize} quantity={quantity} />
    </Margins>
   </LineBreak>
   <LineBreak>
     <MoveLeft>
       <ClickCounter event='addButton'>
      { inStock ? <AddButton onClick={() => handleAddToCart()}>{ addCart ? 'Remove From Cart' : 'Add To Cart'}</AddButton> : '' }
      </ClickCounter>
      <FavButton onClick={handleFav}>{ display }</FavButton>
     </MoveLeft>
   </LineBreak>
 </Container>
};

export default AddToCart;