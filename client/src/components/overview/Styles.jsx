import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Container = styled.div`
position: relative;
left: 20vw;
top: 30vh;
`;

const Styles = ({ styles }) => {
  const [styles, setStyles] = useState(styles);
  const [primaryStyleImages, setPrimaryStyleImages] = useState([]);

  return <Container>
    Yo!
  </Container>
};

export default Styles;