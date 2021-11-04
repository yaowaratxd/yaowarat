import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tile = styled.img`
height: 7vh;
width:  7vw;
border: 1px solid black;
margin-bottom: 5px;
`;

const SelectedTile = styled.img`
height: 7vh;
width:  7vw;
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
z-index: 2;
`;
const ImageContainer = styled.div`
width: 10vw;
`;
const BaseImage = styled.img`
width: 40vw;
position: absolute;
top: 5vh;
left: 5%;
height: 60vh;
cursor: zoom-in;
`;
const BaseImageExpanded = styled.img`
width: 70vw;
position: absolute;
top: 5vh;
left: 5%;
height: 60vh;
z-index: 2;
cursor: zoom-out;
`;

const ClickyButton = styled.button`
background-color: Transparent;
border: none;
color: rebeccapurple;
`;
const ExpandClickyButton = styled.button`
background-color: Transparent;
border: none;
color: rebeccapurple;
position: relative;
right: 5vw;
top: 5vh;
z-index: 2;
`;

const ImageGallery = ({ allImages, selectedImage, setSelectedImage, styles, setSelectedStyle }) => {
  const [expandedImage, setExpandedImage] = useState(false);

  const handleClickLeft = () => {
    for (let i = 0; i < allImages.length; ++i) {
      for (let j = 0; j < allImages[i].length; ++j) {
        if (allImages[i][j].url === selectedImage.url) {
          if (i === 0 && j === 0) {
            return;
          } else if (j === 0 && i > 0) {
            setSelectedImage(Object.assign({url: allImages[i-1][allImages[i].length - 1].url, id: allImages[i-1][allImages[i].length - 1].id, salePrice: allImages[i-1][allImages[i].length - 1].salePrice }, saveDiscount()));
          }
          else {
            setSelectedImage(Object.assign({url: allImages[i][j-1].url, id: allImages[j-1].id, salePrice: allImages[j-1].salePrice }, saveDiscount()));
          }
        }
      }
    }
  };
  const handleClickRight = () => {
    for (let i = 0; i < allImages.length; ++i) {
      for (let j = 0; j < allImages[i].length; ++j) {
        if (allImages[i][j].url === selectedImage.url) {
          if (j === allImages[i].length - 1) {
            setSelectedImage(Object.assign({url: allImages[i + 1][0].url, id: allImages[i + 1][0].id, salePrice: allImages[i + 1][0].salePrice }, saveDiscount()));
          } else {
            setSelectedImage(Object.assign({url: allImages[i][j + 1].url, id: allImages[i][j + 1].id, salePrice: allImages[i][j + 1].salePrice }, saveDiscount()));
          }
        }
      }
    }
  };

  const changeExpansion = () => {
    setExpandedImage(!expandedImage);
  };

  const renderLeftButton = () => {
    if (allImages.length > 0) {
      return allImages[0][0].url === selectedImage.url ? '' : <ClickyButton onClick={handleClickLeft}>Left</ClickyButton>;
    }
  };
  const renderRightButton = () => {
    let len = allImages.length - 1
    if (allImages.length > 0) {
      return allImages[len][allImages[len].length - 1].url === selectedImage.url ? '' : <ClickyButton onClick={handleClickRight}>Right</ClickyButton>;
    }
  };

  const handleTileClick = ({ url, id, thumbnail }) => {
    const obj = Object.assign({ url, id }, saveDiscount());
    // console.log(obj);
    setSelectedImage(obj);
    // setSelectedStyle(Object.assign({ url: thumbnail, image: url }, saveDiscount()));
  };

  const saveDiscount = () => {
    let id, salePrice;
    for (let i = 0; i < styles.length; ++i) {
      for (let j = 0; j < styles[i].photos.length; ++j) {
        if (styles[i].photos[j].url === selectedImage.url || styles[i].photos[j].thumbnail_url === selectedImage.url) {
          id = styles[i].id;
          salePrice = styles[i].salePrice;
        }
      }
    }
    return { id, salePrice }
  }
  return <div>
    <div>
  { renderLeftButton() }
        { expandedImage ? <BaseImageExpanded onClick={changeExpansion} src={selectedImage.url} /> : <BaseImage onClick={changeExpansion} src={selectedImage.url} /> }
        {/* <ClickyButton onClick={handleClickRight}>Right</ClickyButton>
         */}
        { renderRightButton() }
        <ExpandClickyButton onClick={changeExpansion}> Expand</ExpandClickyButton>
        <LeftRibbon>
          <ImageContainer>
          {/* { allImages.map((im) => im.url === selectedImage ? <SelectedTile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> : <Tile onClick={() => setSelectedImage(im.url)} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          } */}
          { allImages.map((imag) => imag.map((im) => im.url === selectedImage.url ? <SelectedTile onClick={() => handleTileClick({ url: im.url, id: im.id, thumbnail: im.thumbnail_url })} key={im.thumbnail_url} src={im.thumbnail_url} /> : <Tile onClick={() => handleTileClick({ url: im.url, id: im.id, thumbnail: im.thumbnail_url  })} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          )}
        </ImageContainer>
        </LeftRibbon>
      </div>
  </div>
};

export default ImageGallery;

{/* <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg>

*/}