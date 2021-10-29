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

const Styles = ({ styles, setSelectedStyle }) => {

  return <Container>
    { styles.map((image) =>  <StyleTile key={image.id}>  <img onClick={() => setSelectedStyle(image.image)} key={image.id} src={image.image} style={{height: '50px', width: '50px', borderRadius: '50%'}}/> </StyleTile> )}
  </Container>
};

export default Styles;

// style={{
//   backgroundImage: `url('${ image.image }')`,
//   backgroundRepeat: "no-repeat", height: '50px', width: '50px'
// }