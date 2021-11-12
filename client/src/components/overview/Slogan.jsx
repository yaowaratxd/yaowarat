import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
width: 40vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Slogan = ({ description, slogan }) => {
  return <Box>
    { slogan ? <h3 style={{ marginBottom: '1vh' }}>{ slogan }</h3> : '' }
    { description ? <h6>{ description }</h6> : '' }
  </Box>
};

export default Slogan;