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
  const [styles, setStyles] = useState([]);

  const fetchImages = (productId, callback) => {
    axios.get(`/api/products/${productId}/styles`).then((results) => {
      let container = [];
      setStyles(results.data.results);
      callback(results.data.results);
    })
  };

  useEffect(() => {
    fetchImages(props.product.id, (stylings) => {
      let temp = [];
      for (let i = 0; i < stylings.length; ++i) {
      temp = [...temp, stylings[i]['photos']];
      }
      setAllImages(temp);
      setSelectedImage(temp[0][0].url);
    });
  }, []);

  return <div>
    <ImageGallery allImages={allImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    <ProductDetail product={props.product}/>
    <Styles styles={styles} />
  </div>

};

export default Overview;