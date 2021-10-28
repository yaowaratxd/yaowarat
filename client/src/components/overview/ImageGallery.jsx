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

const ImageGallery = ({ allImages, selectedImage, setSelectedImage }) => {
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
