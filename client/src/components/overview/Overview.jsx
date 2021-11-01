import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ImageGallery from './ImageGallery.jsx';
import ProductDetail from './ProductDetail.jsx';
import Styles from './Styles.jsx';

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
        styles.push({image: results.data.results[i].photos[0].thumbnail_url, id: results.data.results[i].style_id, url: results.data.results[i].photos[0].url, skus: results.data.results[i].skus });
      }
      setStyles(styles);
      callback(results.data.results);
    })
  };

  const setSelectedStyle = (styleUrl) => {
    for (let i = 0; i < totalImages.length; ++i) {
      for (let j = 0; j < totalImages[i].length; ++j) {
        if (totalImages[i][j].thumbnail_url === styleUrl) {
          setAllImages(totalImages[i]);
          setSelectedImage(totalImages[i][0].url);
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
      setSelectedImage(temp[0][0].url);
      let allHolder = [];
      for (let i = 0; i < stylings.length; ++i) {
      allHolder = [...allHolder, stylings[i]['photos']];
      }
      setTotalImages(allHolder);
    });
  }, []);

  return <div>
    <ImageGallery allImages={allImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    <ProductDetail product={props.product}/>
    <Styles styles={styles} selectedImage={selectedImage} setSelectedStyle={setSelectedStyle} />
  </div>

};

export default Overview;