import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Tile = styled.img`
height: 10%;
widht:  10%;
border: 1px solid black;
`

const ImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState({});
  const [allImages, setAllImages] = useState([]);
  const [styles, setStyles] = useState([]);

  const fetchImages = (productId, callback) => {
    axios.get(`/api/products/${productId}/styles`).then((results) => {
      let container = [];
      setStyles(results.data.results);
      // for (let i = 0; i < results.data.results.length; ++i) {
      //   if (results.data.results[i].photos.length > 0) {
      //     for (let j = 0; i < results.data.results[i].photos.length; ++j) {
      //       // console.log(results.data.results[i].photos);
      //       // container.push(results.data.results[i].photos[j]);
      //     }
      //   }
      // }
      // console.log(container);
      // setAllImages(container);
      callback(results.data.results);
    })
  };

  useEffect(() => {
    fetchImages(product.id, (stylings) => {
      let temp = [];
      for (let i = 0; i < stylings.length; ++i) {
      temp = [...temp, stylings[i]['photos']];
      }
      setAllImages(temp);
    });
  }, []);

  return <div>
    { allImages.map((imag) => {
      console.log(imag[0]);
      return <img src={imag[0].thumbnail_url} />
    })}
  </div>
};

export default ImageGallery;
