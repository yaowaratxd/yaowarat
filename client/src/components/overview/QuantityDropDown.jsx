import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const SelectEle = styled.select`
width: 100px;
height: 45px;
margin-right: 40px;
margin-top: 20px;
`;

const QuantityDropDown = ({ quantity, hasSize }) => {
  const [selections, setSelections] = useState(['-']);

  useEffect(() => {
    let iters = quantity > 15 ? 15 : quantity;
    let results = [];
    for (let i = 1; i <= iters; ++i) {
      results.push(i);
    };
    setSelections(results);
  }, [quantity])

  return <SelectEle>
    { hasSize ? '' : <option key={'--'} value={''}> - </option>}
    { selections.map((size) => <option key={size} value={size}>{ size }</option>)}
  </SelectEle>
};

export default QuantityDropDown;