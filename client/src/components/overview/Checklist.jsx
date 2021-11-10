import React from 'react';
import styled from 'styled-components';

import colorScheme from '../../colorScheme.js';

const Box = styled.div`
width: 25vw;
border-left: 1px solid ${colorScheme.darkGrey};
`;

const List = styled.ul`
list-style: none;
`;

const Checklist = () => {
  return <Box>
    <List>
      <li>✓ GMO and Pesticide-free</li>
      <li>✓ Made with 100% Genetic Modification</li>
      <li>✓ This is made up</li>
      <li>✓ It doesn't matter</li>
    </List>
  </Box>
};

export default Checklist;