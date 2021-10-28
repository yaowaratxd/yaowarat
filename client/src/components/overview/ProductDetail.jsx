import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  left: 20vw;
  top: 4vh;
  width: 20vw;
`;


const ProductDetail = ({ product }) => {
  return <Container>
    <h1>{ product.name }</h1>
    <h4>{ product.category }</h4>
    <p>{ product.price }</p>
  </Container>
};

export default ProductDetail;