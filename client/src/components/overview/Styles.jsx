import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Container = styled.div`
position: relative;
left: 20vw;
top: 30vh;
`;

const StyleTile = styled.div`
  
border-radius: 50%;
border: 1px solid black;
`;

const Styles = ({ styles }) => {

  // useEffect(() => {
  //   const styleImages = [];
  //   for (let i = 0; i < styles.length; ++i) {
  //     styleImages.push({image: styles[i].photos[0], styleId: styles[i].style_id });
  //     // setPrimaryStyleImages([...primaryStyleImages, {image: styles[i].photos[0], styleId: styles[i].style_id }]);
  //   }
  //   setStyle(styles);
  //   setPrimaryStyleImages(styleImages);
  // }, []);
  return <Container>
    { styles.map((image) =>  <StyleTile key={image.id} style={{
      backgroundImage: `url('${ image.image }')`,
      backgroundRepeat: "no-repeat", height: '50px', width: '50px'
    }} /> )}
  </Container>
};

export default Styles;