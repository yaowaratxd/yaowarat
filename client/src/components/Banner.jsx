import React from 'react';
import styled from 'styled-components';

import colorScheme from '../colorScheme.js';

const Banner = styled.div`
width: 70vw;
background-color: ${colorScheme.darkGrey};
height: 100px;
`;

const Top = () => {
  return <Banner>Logo</Banner>
};

export default Top;