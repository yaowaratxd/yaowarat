import React, { useState } from 'react';

import styled from 'styled-components';

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

const AddToCart = (props) => {
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
  <AddButton onClick={() => setAddCart(!addCart)}>{ addCart ? 'Remove From Cart' : 'Add To Cart'}</AddButton>
  <AddButton onClick={handleFav}>{ display }</AddButton>
 </Container>
};

export default AddToCart;