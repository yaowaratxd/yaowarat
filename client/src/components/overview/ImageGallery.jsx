import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Tile = styled.img`
height: 10vh;
width:  10vw;
border: 1px solid black;
margin-bottom: 5px;
`;
const LeftRibbon = styled.div`
width: 15vw;
position: absolute;
top: 5vh;
left: 5%;
height: 60vh;
overflow: scroll;
`;
const ImageContainer = styled.div`
width: 10vw;
`;
const BaseImage = styled.img`
width: 25vw;
position: absolute;
top: 5vh;
left: 5%;
height: 60vh;
width: 40vw;
`;

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
      setSelectedImage(temp[0][0].url);
    });
  }, []);

  return <div>
    <div>
      <BaseImage src={selectedImage} />
        <LeftRibbon>
          <ImageContainer>
          { allImages.map((imag) => imag.map((im) =>  <Tile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          )}
        </ImageContainer>
        </LeftRibbon>
      </div>
  </div>
};

export default ImageGallery;
