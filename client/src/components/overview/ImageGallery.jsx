import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import colorScheme from '../../colorScheme.js';
import ClickCounter from '../ClickCounter.jsx';

const Tile = styled.img`
height: 7vh;
width:  7vw;
border: 1px solid ${colorScheme.tan};
margin-bottom: 5px;
`;

const SelectedTile = styled.img`
height: 7vh;
width:  7vw;
border: 3px solid ${colorScheme.darkGrey};
border-bottom: 6px solid ${colorScheme.darkGrey};
margin-bottom: 5px;
`;
const LeftRibbon = styled.div`
width: 7vw;
left:   18vw;
position: absolute;
top: 15vh;
height: 60vh;
overflow: scroll;
z-index: 2;
display: flex;
justify-content: center;
`;

const ImageContainer = styled.div`
width: 10vw;
`;

const BaseImage = styled.img`
width: 40vw;
height: 70vh;
cursor: zoom-in;
`;
const BaseImageExpanded = styled.img`
width: 70vw;
height: 60vh;
z-index: 2;
cursor: zoom-in;
`;
const BaseImageExploded = styled.img`
width: 250%;
height: 250%;
overflow: scroll;
z-index: 4;
cursor: zoom-out;
`;

const ClickyButton = styled.button`
background-color: Transparent;
border: none;
color: ${colorScheme.darkGrey};
height: 250%;
width: 250%;
`;
const ExpandClickyButton = styled.button`
background-color: Transparent;
border: none;
color: ${colorScheme.darkGrey};
position: relative;
z-index: 2;
`;

const LeftButton = styled.div`
position: relative;
top: 25vh;
left: 25vw;
`;
const RightButton = styled.div`
position: relative;
top: 25vh;
left: 50vw;
`;
const ExpandButton = styled.div`
position: relative;
top: -85vh;
left: 35vw;
`;

const ImageGallery = ({ allImages, selectedImage, setSelectedImage, styles, setSelectedStyle, changeImageSize }) => {
  const [expandedImage, setExpandedImage] = useState(0);
  let x = 0, y = 0;

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
    if (expandedImage === 0) {
      setExpandedImage(1)
      changeImageSize(1);
    } else if (expandedImage === 1) {
      setExpandedImage(2);
      changeImageSize(2);
    } else {
      setExpandedImage(0);
      changeImageSize(0);
    }
  };

  const renderLeftButton = () => {
    if (allImages.length > 0) {
      return allImages[0][0].url === selectedImage.url ? '' : <ClickyButton onClick={handleClickLeft}><h1>{'<'}</h1></ClickyButton>;
    }
  };
  const renderRightButton = () => {
    let len = allImages.length - 1
    if (allImages.length > 0) {
      return allImages[len][allImages[len].length - 1].url === selectedImage.url ? '' : <ClickyButton onClick={handleClickRight}><h1>{'>'}</h1></ClickyButton>;
    }
  };

  const handleTileClick = ({ url, id, thumbnail }) => {
    const obj = Object.assign({ url, id }, saveDiscount());
    setSelectedImage(obj);
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
  const handleMouse = (event) => {
      window.scrollBy(event.clientX - x, event.clientY - y);
      x = event.clientX;
      y = event.clientY;
  };
  return <div>
    <div>
      <LeftButton>
        {/* { renderLeftButton() } onMouseMove={(e) => handleMouse(e)} */}
      </LeftButton>
        { expandedImage === 0 ?  <BaseImage onClick={changeExpansion} src={selectedImage.url} /> : expandedImage === 1 ? <BaseImageExpanded onClick={changeExpansion} src={selectedImage.url} /> : <BaseImageExploded   onClick={changeExpansion} src={selectedImage.url} /> }
         <RightButton>
        {/* { renderRightButton() } */}
        </RightButton>
        <ExpandButton>
        <ExpandClickyButton onClick={changeExpansion}> <h1>{'[ ]'}</h1> </ExpandClickyButton>
        </ExpandButton>
        { expandedImage <= 1 ? <LeftRibbon>
          <ImageContainer>
          { allImages.map((imag) => imag.map((im) => im.url === selectedImage.url  ? <SelectedTile id='selectedTile' onClick={() => handleTileClick({ url: im.url, id: im.id, thumbnail: im.thumbnail_url })} key={im.thumbnail_url} src={im.thumbnail_url} /> : <Tile onClick={() => handleTileClick({ url: im.url, id: im.id, thumbnail: im.thumbnail_url  })} key={im.thumbnail_url} src={im.thumbnail_url} /> )
          )}
        </ImageContainer>
        </LeftRibbon> : '' }
      </div>
  </div>
};

export default ImageGallery;
