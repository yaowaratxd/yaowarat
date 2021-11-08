import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  left: 30vw;
  top: 4vh;
  width: 20vw;
`;

const NewPrice = styled.span`
color: red;
text-decoration: line-through;
`;

const ProductDetail = ({ product, selectedImage, styles }) => {
  const [ratings, setRatings] = useState(0);
  const [reviewTotal, setReviewTotal] = useState(0);
  useEffect(() => {
    axios.get(`/api/reviews/meta/${ product.id }`).then(res => {
      let count = 0;
      let total = 0;
      for (let rating in res.data.ratings) {
        count += parseInt(res.data.ratings[rating]);
        total += parseInt(res.data.ratings[rating] * rating);
      }
      setRatings((total / count).toFixed(2));
      axios.get(`/api/reviews/${ product.id}`).then((res) => {
        setReviewTotal(res.data.quantity);
      });
    });
  }, [selectedImage, product]);

  const renderPrice =  selectedImage.salePrice ? <div> <NewPrice> {product.default_price} </NewPrice> { selectedImage.salePrice } </div> : product.default_price;
  return <Container>
   { ratings !== 'NaN' ?  `${ ratings }  - click here to see all ${ reviewTotal } reviews...` : '' }
    <h1>{ product.name }</h1>
    <h4>{ product.category }</h4>
    { renderPrice }
  </Container>
};

export default ProductDetail;