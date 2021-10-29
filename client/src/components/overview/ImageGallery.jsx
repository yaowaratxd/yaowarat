import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tile = styled.img`
height: 10vh;
width:  10vw;
border: 1px solid black;
margin-bottom: 5px;
`;
const SelectedTile = styled.img`
height: 10vh;
width:  10vw;
border: 1px solid black;
border-bottom: 6px solid rebeccapurple;
margin-bottom: 5px;
`;
const LeftRibbon = styled.div`
width: 10vw;
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
width: 50vw;
`;

const ClickyButton = styled.button`
background-color: Transparent;
border: none;
color: rebeccapurple;
`;

const ImageGallery = ({ allImages, selectedImage, setSelectedImage }) => {

  const handleClickLeft = () => {
    for (let i = 0; i < allImages.length; ++i) {
      for (let j = 0; j < allImages[i].length; ++j) {
        if (allImages[i][j].url === selectedImage) {
          if (j === 0) {
            return;
          } else {
            setSelectedImage(allImages[i][j-1].url);
          }
        }
      }
    }
  };
  const handleClickRight = () => {
    for (let i = 0; i < allImages.length; ++i) {
      for (let j = 0; j < allImages[i].length; ++j) {
        if (allImages[i][j].url === selectedImage) {
          if (j === allImages[i][j].length) {
            return;
          } else {
            setSelectedImage(allImages[i][j + 1].url);
          }
        }
      }
    }
  };

  const renderLeftButton = () => {
    if (allImages.length > 0) {
      return allImages[0].url === selectedImage ? '' : <ClickyButton onClick={handleClickLeft}>Left</ClickyButton>;
    }
  };
  return <div>
    <div>
  { renderLeftButton() }
        <BaseImage src={selectedImage} />
        <ClickyButton onClick={handleClickRight}>Right</ClickyButton>
        <LeftRibbon>
          <ImageContainer>
          { allImages.map((im) => im.url === selectedImage ? <SelectedTile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> : <Tile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          }
          {/* { allImages.map((imag) => imag.map((im) => im.url === selectedImage ? <SelectedTile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> : <Tile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          )} */}
        </ImageContainer>
        </LeftRibbon>
      </div>
  </div>
};

export default ImageGallery;

//     {/* <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg> */}