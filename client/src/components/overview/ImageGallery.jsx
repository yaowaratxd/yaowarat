import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState({});
  const [allImages, setAllImages] = useState([]);

  const fetchImages = async (productId) => {
    const results = await axios.get(`/api/products/${productId}/styles`);
    console.log(results);
  };

  return <h1>Image Gallery!</h1>
};

export default ImageGallery;