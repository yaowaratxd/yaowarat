import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  left: 20vw;
  top: 4vh;
  width: 20vw;
`;

const NewPrice = styled.span`
color: red;
text-decoration: line-through;
`;

const ProductDetail = ({ product, selectedImage, styles }) => {
  console.log(selectedImage);
  const renderPrice =  selectedImage.salePrice ? <div> <NewPrice> {product.default_price} </NewPrice> { selectedImage.salePrice } </div> : product.default_price;
  return <Container>
    <h1>{ product.name }</h1>
    <h4>{ product.category }</h4>
    { renderPrice }
  </Container>
};

export default ProductDetail;