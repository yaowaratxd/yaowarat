import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Stars from '../StarValue.jsx';
import colorScheme from '../../colorScheme.js';
import ClickCounter from '../ClickCounter.jsx';

// position: relative;
const Container = styled.div`
  width: 20vw;
`;

const NewPrice = styled.span`
color: red;
text-decoration: line-through;
`;

const Link = styled.a`
color: ${colorScheme.darkGrey};
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
      setRatings(Math.round((total / count * 4) / 4).toFixed(2));
      axios.get(`/api/reviews/${ product.id}`).then((res) => {
        setReviewTotal(res.data.quantity);
      });
    });
  }, [selectedImage, product]);

  const renderPrice =  selectedImage.salePrice ? <div> <NewPrice> {product.default_price} </NewPrice> { selectedImage.salePrice } </div> : product.default_price;
  return <Container>
   { ratings !== 'NaN' ?  <Stars rating={ratings} /> : '' } { reviewTotal > 0 ?  <Link href='#'>read all { reviewTotal } reviews...</Link>  : '' }
    <h5>{ product.category }</h5>
    <h2>{ product.name }</h2>
    <h6>{ renderPrice }</h6>
  </Container>
};

export default ProductDetail;