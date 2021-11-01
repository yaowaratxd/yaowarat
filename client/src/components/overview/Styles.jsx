import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Container = styled.div`
position: relative;
left: 20vw;
top: 10vh;
display: flex;
flex-wrap: true;
`;

const StyleTile = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
border: 1px solid black;
`;
const SelectedStyleTile = styled.div`
height: 55px;
width: 55px;
border-radius: 50%;
border: 3px solid rebeccapurple;
`;

const Styles = ({ styles, setSelectedStyle, selectedImage }) => {
  console.log(styles);
  return <Container>
    { styles.map((image) =>  {
      if (image.url === selectedImage.url ) {
        return <SelectedStyleTile key={image.id}>  <img onClick={() => setSelectedStyle({url: image.image, id: image.id})} key={image.id} src={image.image} style={{height: '55px', width: '55px', borderRadius: '50%'}}/> </SelectedStyleTile>
      } else {
        return <StyleTile key={image.id}>  <img onClick={() => setSelectedStyle({url: image.image, id: image.id })} key={image.id} src={image.image} style={{height: '50px', width: '50px', borderRadius: '50%'}}/> </StyleTile>
      }
    }
    )}
    <select>
    { styles.map((image) =>  {
      let placeholder = [];
      if (image.url === selectedImage.url) {
        for (let key in image.skus) {
          placeholder.push(<option key={key} value={image.skus[key].size}>{ image.skus[key].size }</option>);
        }
      }
      return placeholder;
    }
    )}
    </select>
    <select>
    { styles.map((image) =>  {
      let placeholder = [];
      if (image.url === selectedImage.url) {
        for (let key in image.skus) {
          placeholder.push(<option key={key} value={image.skus[key].quantity}>{ image.skus[key].quantity }</option>);
        }
      }
      return placeholder;
    }
    )}
    </select>
  </Container>
};

export default Styles;

// style={{
//   backgroundImage: `url('${ image.image }')`,
//   backgroundRepeat: "no-repeat", height: '50px', width: '50px'
// }