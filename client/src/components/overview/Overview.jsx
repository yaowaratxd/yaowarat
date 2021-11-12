import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './ImageGallery.jsx';
import ProductDetail from './ProductDetail.jsx';
import Styles from './Styles.jsx';
import AddToCart from './AddToCart.jsx';
import Slogan from './Slogan.jsx';
import Checklist from './Checklist.jsx';
import ClickCounter from '../ClickCounter.jsx';

const ProductCartandStyleContainer = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`;

const OverviewContainer = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid black;
`;

const SloganContainer = styled.div`
display: flex;
position: relative;
top: -18vh;
width: 100%;
`;

const SocialWrapper = styled.div`
position: relative;
top: -20vh;
display: flex;
justify-content: flex-start;
`;

const Overview = (props) => {
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const [allImages, setAllImages] = useState([]);
  const [totalImages, setTotalImages] = useState([])
  const [styles, setStyles] = useState([]);

  const fetchImages = (productId, callback) => {
    axios.get(`/api/products/${productId}/styles`).then((results) => {
      let container = [];
      let styles = [];
      for (let i = 0; i < results.data.results.length; ++i) {
        styles.push({image: results.data.results[i].photos[0].thumbnail_url, id: results.data.results[i].style_id, url: results.data.results[i].photos[0].url, skus: results.data.results[i].skus, photos: results.data.results[i].photos, salePrice: results.data.results[i].sale_price, name: results.data.results[i].name });
      }
      setStyles(styles);
      callback(results.data.results);
    })
  };

  const setSelectedStyle = (styleUrl) => {
    for (let i = 0; i < totalImages.length; ++i) {
      for (let j = 0; j < totalImages[i].length; ++j) {
        if (totalImages[i][j].thumbnail_url === styleUrl.url) {
          setAllImages(totalImages[i]);
          let newId, salePrice;
          for (let i = 0; i < styles.length; ++i) {
            if (styles[i].image === styleUrl.url) {
              newId = styles[i].id;
              salePrice = styles[i].salePrice;
            }
          }
          setSelectedImage({ url: totalImages[i][0].url, id: newId, salePrice });
          return;
        }
      }
    }
  };

  useEffect(() => {
    fetchImages(props.product.id, (stylings) => {
      let temp = [];
      for (let i = 0; i < 1; ++i) {
      temp = [...temp, stylings[i]['photos']];
      }
      setAllImages(temp[0]);
      setSelectedImage({ url: temp[0][0].url, id: stylings[0].style_id, salePrice: stylings[0].sale_price });
      let allHolder = [];
      for (let i = 0; i < stylings.length; ++i) {
      allHolder = [...allHolder, stylings[i]['photos']];
      }
      setTotalImages(allHolder);
    });
  }, [props.product]);
  return <div>
  <OverviewContainer >
    <ImageGallery setSelectedStyle={setSelectedStyle} styles={styles} allImages={totalImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    <ProductCartandStyleContainer>
      <ProductDetail product={props.product} styles={styles} selectedImage={selectedImage} />
      <Styles styles={styles} selectedImage={selectedImage} setSelectedStyle={setSelectedStyle} />
    </ProductCartandStyleContainer>
  </OverviewContainer>
  <SloganContainer>
  <Slogan slogan={props.product.slogan} description={props.product.description} />
  <Checklist />
  </SloganContainer>
  <SocialWrapper>
    <img src='/graphics/facebook.png' onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${selectedImage.url}`, 'facebook-share-dialog', 'width=626,height=436') } />
    {/* <img src='/graphics/facebook.png' onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'facebook-share-dialog', 'width=626,height=436') } /> */}
    <img src='/graphics/twitter.png' onClick={() => window.open('https://www.twitter.com/intent/tweet?url='+selectedImage.url,'twitter-share-dialog', 'width=626,height=436') } />
    <img src='/graphics/pinterest.png' onClick={() => window.open('http://pinterest.com/pin/create/button/?url='+selectedImage.url,'pinterest-share-dialog', 'width=626,height=436') } />
    </SocialWrapper>
  </div>
};

export default Overview;

// style={{ width: '80vw' }}
