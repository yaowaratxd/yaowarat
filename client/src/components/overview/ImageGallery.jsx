import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Tile = styled.img`
height: 10%;
widht:  10%;
border: 1px solid black;
`
const LeftRibbon = styled.div`
width: 15%;
position: absolute;
left: 5%;
height: 80vh;
overflow: scroll;
`

const ImageGallery = ({ product }) => {
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
    fetchImages(product.id, (stylings) => {
      let temp = [];
      for (let i = 0; i < stylings.length; ++i) {
      temp = [...temp, stylings[i]['photos']];
      }
      setAllImages(temp);
    });
  }, []);

  return <div>
    <LeftRibbon>
    { allImages.map((imag) => imag.map((im) =>  <Tile key={im.thumbnail_url} src={im.thumbnail_url} /> )
    )}
    </LeftRibbon>
  </div>
};

export default ImageGallery;
